#!/usr/bin/env python3
"""
scrape_site.py - Render a JavaScript website in a real browser and dump ALL of
its content into one Markdown file (plus optional assets / API JSON).

Setup (once):
    pip install playwright
    playwright install chromium

Usage:
    python scrape_site.py https://dpulsai.com/
    python scrape_site.py https://dpulsai.com/ --max-pages 200 --download-assets
    python scrape_site.py https://dpulsai.com/ --headful        # watch it run

Output (in ./scrape_output/ by default):
    dpulsai_com_full_data.md   <- everything, page by page
    api_responses/*.json       <- JSON the site loaded from its backend (if any)
    assets/                    <- images, logos, favicons (with --download-assets)
    screenshots/*.png          <- full-page screenshot of every page
"""

import argparse
import hashlib
import json
import re
import sys
import time
from collections import deque
from pathlib import Path
from urllib.parse import urljoin, urlparse, urldefrag

try:
    from playwright.sync_api import sync_playwright, TimeoutError as PWTimeout
except ImportError:
    sys.exit("Playwright missing. Run:  pip install playwright && playwright install chromium")

# --------------------------------------------------------------------------
# JavaScript that runs inside the page: converts the rendered DOM to Markdown
# --------------------------------------------------------------------------
JS_TO_MARKDOWN = r"""
() => {
  const SKIP = new Set(['SCRIPT','STYLE','NOSCRIPT','TEMPLATE','IFRAME','CANVAS']);
  const BLOCK = new Set(['ADDRESS','ARTICLE','ASIDE','BLOCKQUOTE','DIV','DL','FIELDSET',
    'FIGCAPTION','FIGURE','FOOTER','FORM','HEADER','HR','MAIN','NAV','OL','P','PRE',
    'SECTION','TABLE','UL','LI','TR','DETAILS','SUMMARY','H1','H2','H3','H4','H5','H6']);
  const clean = s => (s || '').replace(/\s+/g, ' ').trim();
  const abs = u => { try { return new URL(u, document.baseURI).href; } catch(e) { return u; } };

  function walk(node, ctx) {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent.replace(/\s+/g, ' ');
    if (node.nodeType !== Node.ELEMENT_NODE) return '';
    const tag = node.tagName;
    if (SKIP.has(tag)) return '';
    const st = getComputedStyle(node);
    if (st.display === 'none' || st.visibility === 'hidden') return '';
    if (tag === 'SVG' || tag === 'svg') {
      const t = node.querySelector('title');
      return t ? ' ' + clean(t.textContent) + ' ' : '';
    }

    const kids = () => Array.from(node.childNodes).map(c => walk(c, ctx)).join('');

    if (/^H[1-6]$/.test(tag)) {
      const t = clean(kids());
      return t ? `\n\n${'#'.repeat(+tag[1])} ${t}\n\n` : '';
    }
    if (tag === 'BR') return '\n';
    if (tag === 'HR') return '\n\n---\n\n';
    if (tag === 'IMG') {
      const src = node.currentSrc || node.src || node.getAttribute('data-src') || '';
      return src ? ` ![${clean(node.alt)}](${abs(src)}) ` : '';
    }
    if (tag === 'A') {
      const t = clean(kids());
      const href = node.getAttribute('href');
      if (!href) return t;
      return t ? ` [${t}](${abs(href)}) ` : ` <${abs(href)}> `;
    }
    if (tag === 'BUTTON' || node.getAttribute('role') === 'button') {
      const t = clean(kids());
      return t ? ` **[Button: ${t}]** ` : '';
    }
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
      const label = node.placeholder || node.getAttribute('aria-label') || node.name || node.id || '';
      const type = node.type || tag.toLowerCase();
      let extra = '';
      if (tag === 'SELECT') extra = ' options: ' + Array.from(node.options).map(o => clean(o.text)).join(' / ');
      return ` _[Field: ${type} - ${label}${extra}]_ `;
    }
    if (tag === 'LI') {
      const t = clean(kids());
      return t ? `\n- ${t}` : '';
    }
    if (tag === 'UL' || tag === 'OL') return `\n${kids()}\n`;
    if (tag === 'TR') {
      const cells = Array.from(node.children).map(c => clean(walk(c, ctx)));
      return `\n| ${cells.join(' | ')} |`;
    }
    if (tag === 'TABLE') return `\n\n${kids()}\n\n`;
    if (tag === 'PRE' || tag === 'CODE') {
      const t = node.textContent.trim();
      return tag === 'PRE' ? `\n\n\`\`\`\n${t}\n\`\`\`\n\n` : ` \`${clean(t)}\` `;
    }
    if (tag === 'STRONG' || tag === 'B') { const t = clean(kids()); return t ? ` **${t}** ` : ''; }
    if (tag === 'EM' || tag === 'I') { const t = clean(kids()); return t ? ` *${t}* ` : ''; }
    if (tag === 'BLOCKQUOTE') return `\n\n> ${clean(kids())}\n\n`;

    const inner = kids();
    return BLOCK.has(tag) ? `\n${inner}\n` : inner;
  }

  const pick = sel => { const e = document.querySelector(sel); return e ? walk(e, {}) : ''; };

  // Whole body in reading order
  let body = walk(document.body, {});
  body = body.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').replace(/ {2,}/g, ' ').trim();

  // Meta tags
  const meta = {};
  document.querySelectorAll('meta').forEach(m => {
    const k = m.getAttribute('name') || m.getAttribute('property') || m.getAttribute('http-equiv');
    const v = m.getAttribute('content');
    if (k && v) meta[k] = v;
  });

  // JSON-LD structured data
  const jsonld = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
    .map(s => { try { return JSON.parse(s.textContent); } catch (e) { return null; } })
    .filter(Boolean);

  // Next.js / Nuxt style embedded data
  const nextData = document.getElementById('__NEXT_DATA__');
  let embedded = null;
  if (nextData) { try { embedded = JSON.parse(nextData.textContent); } catch (e) {} }

  const links = Array.from(document.querySelectorAll('a[href]')).map(a => ({
    text: clean(a.textContent), href: abs(a.getAttribute('href'))
  }));
  const images = Array.from(document.querySelectorAll('img, source[srcset], video[poster]')).map(i => ({
    alt: i.alt || '', src: abs(i.currentSrc || i.src || i.getAttribute('data-src') || i.poster || i.srcset || '')
  })).filter(i => i.src);
  const icons = Array.from(document.querySelectorAll('link[rel*="icon"], link[rel="manifest"], link[rel="canonical"], link[rel="alternate"]'))
    .map(l => ({ rel: l.rel, href: abs(l.href) }));
  const headings = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'))
    .map(h => ({ level: +h.tagName[1], text: clean(h.textContent) })).filter(h => h.text);
  const colors = (() => {
    const cs = getComputedStyle(document.body);
    const root = getComputedStyle(document.documentElement);
    const vars = {};
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules) {
          if (rule.selectorText === ':root' || rule.selectorText === 'html') {
            for (const p of rule.style) if (p.startsWith('--')) vars[p] = rule.style.getPropertyValue(p).trim();
          }
        }
      } catch (e) {}
    }
    return {
      bodyBackground: cs.backgroundColor, bodyColor: cs.color, bodyFont: cs.fontFamily,
      cssVariables: vars
    };
  })();

  return {
    title: document.title, lang: document.documentElement.lang, meta, jsonld, embedded,
    links, images, icons, headings, colors,
    header: pick('header, [role=banner]'), nav: pick('nav'), footer: pick('footer, [role=contentinfo]'),
    markdown: body
  };
}
"""

JS_EXPAND = r"""
() => {
  let n = 0;
  document.querySelectorAll('[aria-expanded="false"], details:not([open]) > summary').forEach(el => {
    try { el.click(); n++; } catch (e) {}
  });
  return n;
}
"""

JS_SCROLL = r"""
async () => {
  await new Promise(resolve => {
    let y = 0; const step = 600;
    const t = setInterval(() => {
      window.scrollBy(0, step); y += step;
      if (y >= document.body.scrollHeight + 1200) { clearInterval(t); resolve(); }
    }, 150);
  });
  window.scrollTo(0, 0);
}
"""


def norm(url: str) -> str:
    url, _ = urldefrag(url)
    return url.rstrip("/") if urlparse(url).path not in ("", "/") else url.rstrip("/") + "/"


def slug(url: str) -> str:
    p = urlparse(url)
    s = re.sub(r"[^a-zA-Z0-9]+", "_", (p.netloc + p.path + ("_" + p.query if p.query else "")).strip("/"))
    return s[:80] or "index"


def same_site(url: str, root_host: str) -> bool:
    h = urlparse(url).netloc.lower().removeprefix("www.")
    return h == root_host


SKIP_EXT = re.compile(r"\.(png|jpe?g|gif|webp|svg|ico|pdf|zip|mp4|webm|mp3|woff2?|ttf|css|js|xml|json)$", re.I)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("url")
    ap.add_argument("--out", default="scrape_output")
    ap.add_argument("--max-pages", type=int, default=100)
    ap.add_argument("--download-assets", action="store_true")
    ap.add_argument("--headful", action="store_true")
    ap.add_argument("--wait", type=float, default=2.0, help="extra seconds to wait after load")
    args = ap.parse_args()

    start = norm(args.url)
    root_host = urlparse(start).netloc.lower().removeprefix("www.")
    out = Path(args.out)
    (out / "api_responses").mkdir(parents=True, exist_ok=True)
    (out / "screenshots").mkdir(exist_ok=True)
    if args.download_assets:
        (out / "assets").mkdir(exist_ok=True)

    queue, seen, pages = deque([start]), {start}, []
    api_hits, asset_urls = {}, set()

    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=not args.headful)
        ctx = browser.new_context(
            viewport={"width": 1440, "height": 900},
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                       "(KHTML, like Gecko) Chrome/124.0 Safari/537.36",
        )
        page = ctx.new_page()

        def on_response(resp):
            try:
                ct = resp.headers.get("content-type", "")
                if "json" in ct and resp.request.resource_type in ("xhr", "fetch"):
                    body = resp.json()
                    api_hits[resp.url] = body
            except Exception:
                pass

        page.on("response", on_response)

        # Seed the queue from sitemap.xml and robots.txt
        for extra in ("/sitemap.xml", "/robots.txt"):
            try:
                r = ctx.request.get(urljoin(start, extra), timeout=15000)
                if r.ok:
                    txt = r.text()
                    (out / extra.strip("/").replace("/", "_")).write_text(txt, encoding="utf-8")
                    for u in re.findall(r"<loc>\s*([^<\s]+)\s*</loc>", txt) + \
                             re.findall(r"(?im)^sitemap:\s*(\S+)", txt):
                        u = norm(u)
                        if same_site(u, root_host) and not SKIP_EXT.search(u) and u not in seen:
                            seen.add(u); queue.append(u)
            except Exception:
                pass

        while queue and len(pages) < args.max_pages:
            url = queue.popleft()
            print(f"[{len(pages)+1}] {url}")
            try:
                page.goto(url, wait_until="networkidle", timeout=45000)
            except PWTimeout:
                print("   (networkidle timeout, continuing with what loaded)")
            except Exception as e:
                print(f"   FAILED: {e}")
                continue

            time.sleep(args.wait)
            try:
                page.evaluate(JS_SCROLL)
                time.sleep(0.8)
                page.evaluate(JS_EXPAND)       # open accordions / FAQ items
                time.sleep(0.8)
                data = page.evaluate(JS_TO_MARKDOWN)
                page.screenshot(path=str(out / "screenshots" / f"{slug(url)}.png"), full_page=True)
            except Exception as e:
                print(f"   extract failed: {e}")
                continue

            data["url"] = page.url
            pages.append(data)

            for im in data["images"]:
                asset_urls.add(im["src"])
            for ic in data["icons"]:
                asset_urls.add(ic["href"])

            for ln in data["links"]:
                href = ln["href"]
                if not href.startswith("http"):
                    continue
                n = norm(href)
                if same_site(n, root_host) and not SKIP_EXT.search(n) and n not in seen:
                    seen.add(n); queue.append(n)

        browser.close()

    # ---- save API JSON -------------------------------------------------
    for i, (u, body) in enumerate(api_hits.items()):
        (out / "api_responses" / f"{i:03d}_{slug(u)}.json").write_text(
            json.dumps({"url": u, "data": body}, indent=2, ensure_ascii=False), encoding="utf-8")

    # ---- download assets ----------------------------------------------
    if args.download_assets:
        import urllib.request
        for u in sorted(asset_urls):
            if not u.startswith("http"):
                continue
            try:
                name = Path(urlparse(u).path).name or hashlib.md5(u.encode()).hexdigest()
                urllib.request.urlretrieve(u, out / "assets" / name)
            except Exception as e:
                print(f"   asset skipped {u}: {e}")

    # ---- write the Markdown -------------------------------------------
    md = [f"# Full Website Data: {root_host}\n",
          f"_Scraped from {start} - {len(pages)} page(s) rendered in a real browser._\n",
          "## Table of Contents\n"]
    for i, p in enumerate(pages, 1):
        md.append(f"{i}. {p['title'] or p['url']} - <{p['url']}>")
    md.append("\n---\n")

    for i, p in enumerate(pages, 1):
        md.append(f"\n# PAGE {i}: {p['title'] or p['url']}\n")
        md.append(f"- **URL:** {p['url']}")
        md.append(f"- **Language:** {p['lang'] or 'n/a'}\n")

        if p["meta"]:
            md.append("## Meta / SEO tags\n")
            for k, v in p["meta"].items():
                md.append(f"- **{k}:** {v}")
            md.append("")
        if p["icons"]:
            md.append("## Favicons / canonical / manifest\n")
            for ic in p["icons"]:
                md.append(f"- {ic['rel']}: {ic['href']}")
            md.append("")
        if p["jsonld"]:
            md.append("## Structured data (JSON-LD)\n```json\n" +
                      json.dumps(p["jsonld"], indent=2, ensure_ascii=False) + "\n```\n")
        if p["headings"]:
            md.append("## Heading outline\n")
            for h in p["headings"]:
                md.append(f"{'  ' * (h['level'] - 1)}- H{h['level']}: {h['text']}")
            md.append("")
        if p["header"].strip():
            md.append("## Header / top bar\n\n" + p["header"].strip() + "\n")
        if p["nav"].strip():
            md.append("## Navigation\n\n" + p["nav"].strip() + "\n")

        md.append("## Full page content (reading order)\n")
        md.append(p["markdown"] + "\n")

        if p["footer"].strip():
            md.append("## Footer\n\n" + p["footer"].strip() + "\n")

        md.append("## All links on this page\n")
        seen_l = set()
        for ln in p["links"]:
            key = (ln["text"], ln["href"])
            if key in seen_l:
                continue
            seen_l.add(key)
            md.append(f"- [{ln['text'] or '(no text)'}]({ln['href']})")
        md.append("")

        md.append("## All images / media\n")
        seen_i = set()
        for im in p["images"]:
            if im["src"] in seen_i:
                continue
            seen_i.add(im["src"])
            md.append(f"- alt: \"{im['alt']}\" -> {im['src']}")
        md.append("")

        c = p["colors"]
        md.append("## Design tokens (useful for the rebuild)\n")
        md.append(f"- Body background: `{c['bodyBackground']}`")
        md.append(f"- Body text color: `{c['bodyColor']}`")
        md.append(f"- Body font stack: `{c['bodyFont']}`")
        for k, v in list(c["cssVariables"].items())[:80]:
            md.append(f"- `{k}`: `{v}`")
        md.append("")

        if p["embedded"]:
            md.append("## Embedded app data (__NEXT_DATA__)\n```json\n" +
                      json.dumps(p["embedded"], indent=2, ensure_ascii=False)[:200000] + "\n```\n")
        md.append("\n---\n")

    if api_hits:
        md.append("\n# Backend API responses captured while loading\n")
        md.append("_Full copies are in the `api_responses/` folder._\n")
        for u in api_hits:
            md.append(f"- {u}")

    outfile = out / f"{slug(start)}_full_data.md"
    outfile.write_text("\n".join(md), encoding="utf-8")
    print(f"\nDone. {len(pages)} pages -> {outfile}")
    print(f"API JSON files: {len(api_hits)} | assets found: {len(asset_urls)}")


if __name__ == "__main__":
    main()
