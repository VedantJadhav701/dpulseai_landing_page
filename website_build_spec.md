# WEBSITE BUILD SPECIFICATION: Physical AI + Enterprise AI Startup

> **Instruction to the coding agent:** Read this entire file before writing any code. Build the complete website described here. Where this file says `[TODO: ...]`, take the content from the local folder `c:\Users\HP\projects\ARQAYA\scrape_output` (see Section 3). If content is missing there, use clearly marked placeholder text and list it in `CONTENT_GAPS.md`. **Never invent metrics, customers, partners, funding, benchmarks or team members.**

---

> **UPDATE v2 (supersedes anything earlier in this file that conflicts):**
> 1. Legal entity, address, phone, emails and hours are now confirmed (Section 1, "Corporate identity").
> 2. Track record is now provided (Section 1, "Track record").
> 3. New robotics concept: **Work Chips** (modular skills + router). See Section 16.
> 4. The Research section must be seeded with an arXiv reading list. See Section 17.
> 5. Footer, Contact and structured data must use the corporate identity. See Section 18.

---

## 1. Company Summary

| Item | Value |
|---|---|
| Company name | **DPULSE AI** (legal entity: **DPULSE AI PRIVATE LIMITED**). Keep brand name and legal name in one config file. The project folder is named ARQAYA; do not use that as the public name unless the owner confirms. |
| Type | AI startup, **software only. No hardware.** |
| Stage | Early. Entering the physical AI domain with several use cases |
| Current live site | https://dpulsai.com/ (OUTDATED: describes an old data-analytics product called "PulseBoard". Do not reuse its positioning) |

### Corporate identity (confirmed by owner; use verbatim)

| Item | Value |
|---|---|
| Legal entity | DPULSE AI PRIVATE LIMITED |
| Headquarters | Shubham Apt., Flat No. 6B, Sr. No. 23, Baner Gaon, Haveli, Pune - 411045, Maharashtra, India |
| Phone | +91 91 75 79 0779 |
| General inquiries | info@dpulseai.com |
| Support | support@dpulseai.com |
| Operating hours | Monday to Friday, 9:00 AM to 6:00 PM IST |

> **Domain check:** the live site is `dpulsai.com` but the emails use `dpulseai.com` (extra "e"). Do not "fix" either. Put both in config and flag it in `CONTENT_GAPS.md` for the owner to confirm.

### Track record (owner-supplied; display as a "proof strip")
- 2 government projects delivered
- 8 projects delivered for other clients
- 20+ AI products and platforms built for different use cases
- Company has generated revenue since establishment (about 20 lakh+ over the first two years). **Do NOT show the revenue figure on the site** unless the owner explicitly approves. Use it only in internal notes.
- **Do not name** government departments or clients unless the owner supplies written approval. Use anonymized wording such as "A state government department" or "A telecom operator".
- Do not show exact counts as larger than stated. "20+" means 20 or more; show "20+".

### What the company does
1. **Enterprise AI:** custom LLMs and domain-specific small language models (DSLMs) built for client organizations on their own data.
2. **World models:** models that learn how the physical world behaves (simulation, planning, training robots).
3. **VLM and VLA development:** vision-language and vision-language-action models.
4. **Robotics brain:** the software intelligence layer that controls robots, **hardware-agnostic**. Architecture idea: a general base model plus a library of **Work Chips** (specialized skill modules) and a **router** that sends each task to the right chip (Section 16).
5. **Agriculture (flagship physical AI use case):** physical AI that reduces the workforce needed in farming. Software only; we run on partners' machines.

### Positioning statement (use as the core message)
> We build the intelligence, not the machines. Custom AI models for organizations, and a hardware-agnostic brain for physical AI.

### Hero headline options (pick one, keep it short, A/B-testable via config)
- "General-purpose intelligence for the physical world."
- "The brain for physical AI."
- "Custom AI for organizations. A brain for robots."

---

## 2. Reference Sites (structure and tone only)

**Main reference: Physical Intelligence** (https://physicalintelligence.company/ , research posts at https://www.pi.website/). Reasons: it is a pure-software "brain" company, research-first, minimal.

Patterns to follow (re-implement in our own design, **do not copy text, images, code or layout pixel-for-pixel**):
- One research page per model release, published as a series that shows progress (e.g. v0.1, v0.2).
- A very short one-line mission on the homepage.
- A "platform layer" story page for partners, with testimonials when available.
- A research / collaboration contact line plus hiring invitation at the bottom of every research page.

Secondary references (storytelling only; they build hardware, so do not copy product-page structure):
- Skild AI (hardware-agnostic robot brain)
- Bonsai Robotics, Carbon Robotics (how an agriculture problem and result are told)
- Figure AI (demo-heavy presentation)
- Cohere, Arcee AI (enterprise custom-model pages; verify current sites yourself)

The agent should open these sites and note first screen, navigation labels, research listing style and call-to-action wording before designing. Do not reproduce their copy.

---

## 3. Content Source: Ingest First

Before building, read everything in `c:\Users\HP\projects\ARQAYA\scrape_output\` (and any sibling project/research folders the owner points to).

1. Create `content-inventory.md`: a table of every project, paper, model, dataset, demo, team member and partner found, with file path source.
2. Classify each item under one pillar: `enterprise-ai`, `world-models`, `vlm-vla`, `robotics-brain`, `agriculture`.
3. Generate content files (Section 8) from this inventory. Use the owner's real wording; light editing for clarity only.
4. Anything referenced but missing (images, videos, numbers) goes in `CONTENT_GAPS.md` and is shown on the site as a neutral placeholder (never fake data).
5. Ignore old "PulseBoard" analytics copy from the scraped dpulsai.com pages unless the owner explicitly says to keep a part.

---

## 4. Tech Stack (use unless the owner objects)

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS + CSS variables for design tokens
- **Content:** MDX files in `/content` for research releases, projects, blog and case studies (frontmatter validated with Zod)
- **Animation:** Framer Motion, subtle only; respect `prefers-reduced-motion`
- **Icons:** lucide-react
- **Fonts:** self-hosted via `next/font` (a clean sans such as Inter or Geist, plus a mono such as JetBrains Mono for technical labels)
- **Forms:** server action or API route sending email via Resend (env var `RESEND_API_KEY`); spam protection with honeypot + rate limit
- **Analytics:** Plausible or Vercel Analytics (privacy-friendly, no cookie banner needed)
- **SEO:** `next-sitemap`, per-page metadata, OpenGraph images generated with `next/og`
- **Deploy:** Vercel (or any Node host). Provide `README.md` with setup, env vars, and deploy steps.
- **Quality:** ESLint, Prettier, TypeScript strict, Playwright smoke tests for main routes

---

## 5. Design System

**Feel:** serious research lab meets modern infrastructure company. Calm, technical, confident. Not "generic AI startup".

- **Theme:** dark by default with a light theme toggle. Define all colours as CSS variables (`--bg`, `--surface`, `--border`, `--text`, `--muted`, `--accent`).
- **Palette:** near-black background, off-white text, **one** accent colour (suggest a green or teal to tie into agriculture; owner can change in one file).
- **Typography:** large, tight display headings; generous line height for body; mono for small labels, version tags and metadata.
- **Layout:** max content width ~1200px, 12-column grid, large vertical spacing between sections.
- **Visuals (no hardware photos available):**
  - Simulation clips, model-output overlays on real farm imagery, architecture diagrams, benchmark charts.
  - Build diagrams as inline SVG or Mermaid-style components so they stay crisp and themeable.
  - Provide a `<MediaFrame>` component that accepts video (muted loop, `playsInline`, poster) or image, lazy-loaded.
- **Motion:** fade/slide on scroll, one subtle hero animation (e.g. a slow particle/grid or looping demo video). Nothing that hurts performance.
- **Accessibility:** WCAG AA contrast, keyboard navigation, visible focus rings, alt text on all media, semantic landmarks.
- **Performance:** Lighthouse 90+ on all four scores for the homepage on mobile; images via `next/image`, video lazy-loaded.

---

## 6. Sitemap and Navigation

```
/                         Home
/enterprise-ai            Enterprise AI (custom LLMs, DSLMs)
/physical-ai              Physical AI overview (world models, VLM/VLA, robotics brain)
/agriculture              Agriculture (flagship use case)
/research                 Research index (filterable)
/research/[slug]          One page per release / paper
/research/literature     Curated arXiv reading list (third-party papers)
/projects                 Projects index
/projects/[slug]          Case study per project
/platform                 Platform / "how it works" + integrations + APIs
/platform/work-chips      Work Chips: modular skills + router (Section 16)
/partners                 Build-with-us page for hardware makers, equipment makers, simulators
/about                    Mission, approach, team
/blog                     Updates and technical posts (optional, MDX)
/careers                  Open roles + research collaboration
/contact                  Contact form with audience selector
/privacy  /terms          Legal
/404                      Custom not-found page
```

**Header nav:** Enterprise AI · Physical AI · Agriculture · Research · Projects · Company ▾ (About, Partners, Careers, Blog) · **[Contact / Request a pilot]** (button)
**Footer:** link columns, short mission line, legal name + registered address + phone + info@ and support@ emails + operating hours (Section 18), research contact email, social links (GitHub, Hugging Face, LinkedIn, X if provided), legal links, and `© [year] DPULSE AI PRIVATE LIMITED`.

---

## 7. Page-by-Page Specification

### 7.1 Home (`/`)
1. **Hero:** one-line headline (Section 1 options), one supporting sentence, two buttons: "Request a pilot" (primary) and "Read our research" (secondary). Looping demo video or animated visual behind/beside it.
2. **One-stack diagram:** *domain data → custom LLM / DSLM → VLM / VLA + world model → robot action.* Caption: "One pipeline, from enterprise data to physical action."
3. **Five pillars (cards):** Enterprise AI, World Models, VLM & VLA, Robotics Brain, Agriculture. Each card: icon, one-line outcome, "Learn more" link.
4. **Featured use case: Agriculture:** short story block (problem → approach → result) with media. Link to `/agriculture`.
5. **Latest research:** 3 most recent releases pulled from `/content/research`.
6. **Hardware-agnostic strip:** "Works with any robot, tractor, drone or camera system." Show partner/integration logos only if real; otherwise a text list of supported platforms from content.
7. **Selected projects:** 3 cards from `/content/projects` (featured: true).
8. **Closing CTA:** "Build with us" with three paths: Enterprise customer, Farm / equipment partner, Researcher / collaborator.

### 7.2 Enterprise AI (`/enterprise-ai`)
- Hero: "Custom AI models built on your data, running in your environment."
- Offerings (cards): **Custom LLMs**, **Domain-specific small language models (DSLMs)**, **Fine-tuning and evaluation**, **Deployment (cloud, on-premise, edge)**.
- Process timeline: Discovery → Data preparation → Training / fine-tuning → Evaluation → Deployment → Monitoring.
- Why small domain models: cost, latency, privacy, accuracy (only state claims the owner's content supports).
- Case studies: anonymized cards pulled from `/content/projects` where `pillar: enterprise-ai`.
- CTA: "Talk to us about your use case".

### 7.3 Physical AI (`/physical-ai`)
- Hero: "The software brain for physical AI. Hardware-agnostic."
- Four capability sections, alternating media/text: **World models**, **VLM**, **VLA**, **Robotics brain**. Each: what it is (plain language), what we built, link to related research releases.
- Architecture diagram (SVG): perception → reasoning → action, with where world models fit.
- "We do not build hardware" explainer: integrates with partners' robots and machines through SDK / API.
- CTA: partner page and research page.

### 7.4 Agriculture (`/agriculture`) — flagship
- Hero: framing around labour shortage and reducing workforce need through physical AI (use the owner's wording).
- Sections: **The problem** · **Our approach (software)** · **How the model sees and decides** (diagram + model-output images) · **Results** (simulation, recorded field data, or pilot data, only what the owner supplies) · **Deploy with your equipment** (hardware-agnostic message) · **Pilot request form**.
- Must be explicit that the company supplies software and runs on partner machines.
- If no named pilot partner exists, do not imply one. Show a "Pilot with us" call to action instead.

### 7.5 Research (`/research`, `/research/[slug]`)
- Index: grid/list of releases, newest first, filters by pillar and type (model, paper, dataset, benchmark, blog), search box.
- Release page template (mirror the "one page per release" pattern):
  1. Title, version tag (mono), date, pillar tags
  2. One-paragraph summary
  3. Key results (only supplied numbers) in a clean table or chart component
  4. Method / architecture with diagrams
  5. Demo media
  6. Links: paper (arXiv/PDF), model card (Hugging Face), code (GitHub), dataset
  7. Citation block (BibTeX) with copy button
  8. Footer block: "Researchers: write to `[RESEARCH_EMAIL]` for collaboration. We are hiring." with link to `/careers`
- Include JSON-LD (`ScholarlyArticle`) and OpenGraph image per page.

### 7.6 Projects (`/projects`, `/projects/[slug]`)
- Index: cards with title, pillar tag, one-line outcome, thumbnail.
- Case study template: Problem · Approach · Model/stack · Results · Deployment · What we learned. Use anonymized client names unless the owner permits naming.

### 7.7 Platform (`/platform`)
- "How it works" end-to-end diagram.
- **Integrations / compatible platforms:** robot makers, equipment makers, simulators, edge compute. List only what is real. Otherwise label "Integrations in progress".
- **Models and APIs:** what is delivered (weights, fine-tuning, inference API, SDK). `[TODO: confirm with owner]`
- **Simulation and evaluation:** world models, benchmarks, safety checks.
- Developer CTA: docs / GitHub / Hugging Face links when they exist.

### 7.8 Partners (`/partners`)
- Audience: hardware makers, farm-equipment companies, simulator platforms.
- Pitch: embed our intelligence layer; we are not a competitor on hardware.
- Partnership models, integration steps, and a partner enquiry form.
- Testimonials section renders only when real quotes exist in `/content/testimonials`.

### 7.9 About (`/about`)
- Mission, approach, why software-only, principles (rigorous evaluation, safety, open research where possible).
- Team grid from `/content/team` (photo optional, role, links). Do not add anyone not provided.
- Affiliations / backers section only with owner-supplied items.

### 7.10 Careers (`/careers`)
- Open roles from `/content/careers` (empty state: "No open roles right now. Send us your work.").
- Research collaboration invitation and email.

### 7.11 Contact (`/contact`)
- Form with required "I am a…" selector: **Enterprise customer · Farm or equipment partner · Researcher · Investor · Other**.
- Fields: name, work email, organization, message. Validation, honeypot, success/error states, confirmation email optional.
- Direct emails listed: general, research (`[RESEARCH_EMAIL]`), partnerships.

### 7.12 Blog (`/blog`) — optional but scaffold it
- MDX posts, tags, RSS feed (`/rss.xml`).

---

## 8. Reusable Components (build these first)

`Header`, `Footer`, `Hero`, `PillarCard`, `StackDiagram` (SVG), `ResearchCard`, `ProjectCard`, `MediaFrame`, `Timeline`, `ComparisonTable`, `ResultsChart` (recharts, themeable), `CitationBlock` (copy button), `CalloutCTA`, `TeamCard`, `ContactForm`, `ThemeToggle`, `Tag`, `SectionHeading`, `Container`, `MDXComponents`.

---

## 9. Content Model (MDX frontmatter, validated with Zod)

```yaml
# /content/research/<slug>.mdx
title: ""
version: "v0.1"            # optional
date: "YYYY-MM-DD"
pillar: ["world-models"]   # enterprise-ai | world-models | vlm-vla | robotics-brain | agriculture
type: "model"              # model | paper | dataset | benchmark | blog
summary: ""
heroMedia: ""              # path or URL
links:
  paper: ""
  huggingface: ""
  github: ""
  dataset: ""
results:                   # only owner-supplied numbers
  - label: ""
    value: ""
    note: ""
featured: false
```

```yaml
# /content/projects/<slug>.mdx
title: ""
pillar: ["enterprise-ai"]
client: ""                 # anonymize if not permitted: "A telecom operator"
oneLiner: ""
status: "completed"        # completed | in-progress | research
featured: false
thumbnail: ""
```

Also: `/content/team/*.json`, `/content/careers/*.json`, `/content/testimonials/*.json`, `/content/site.ts` (company name, tagline, contact emails, social links, nav items).

---

## 10. Copy and Voice Rules

- Plain, precise, confident. Short sentences. Outcome-first.
- Avoid generic phrases such as "AI-powered insights", "revolutionize", "cutting-edge", "unlock the power".
- Use specific nouns: models, data, robots, farms, benchmarks.
- Every claim must come from the owner's content. If a number is not provided, do not show one.
- Make "software only, hardware-agnostic" visible on the home, Physical AI, Agriculture and Partners pages.

---

## 11. SEO, Analytics, Legal

- Unique `<title>` and meta description per page; canonical URLs; `sitemap.xml` and `robots.txt`.
- Structured data: `Organization` (home), `ScholarlyArticle` (research), `Article` (blog).
- Privacy policy and terms pages (use a neutral template and mark `[TODO: legal review]`).
- No third-party tracking cookies; if any are added, include a consent banner.

---

## 12. Do Not

- Do not copy text, images, logos, code or exact layouts from reference sites.
- Do not reuse the old PulseBoard analytics messaging.
- Do not display fake logos, customers, testimonials, numbers, awards or funding.
- Do not imply the company makes or sells hardware.
- Do not use stock photos of robots as if they were the company's work.
- Do not ship placeholder lorem ipsum; use clearly labelled neutral placeholders and log them.

---

## 13. Build Phases

1. **Setup:** repo, Next.js, Tailwind, tokens, fonts, lint/format, `/content/site.ts`.
2. **Content ingestion:** run Section 3; produce `content-inventory.md`, MDX files, `CONTENT_GAPS.md`.
3. **Core components and layout:** header, footer, hero, cards, media frame, diagrams.
4. **Pages:** Home → Physical AI → Enterprise AI → Agriculture → Research → Projects → Platform → Partners → About → Careers → Contact → Blog → legal.
5. **Forms and email:** contact and pilot request, validation, spam protection, env docs.
6. **Polish:** motion, dark/light, responsive pass (360px, 768px, 1280px, 1920px), accessibility pass.
7. **QA and deploy:** Lighthouse, Playwright smoke tests, broken-link check, sitemap, deploy, README.

---

## 14. Acceptance Criteria

- [ ] All routes in Section 6 exist and render without errors.
- [ ] Every research release and project in the scrape folder appears on the site under the right pillar.
- [ ] No old PulseBoard messaging remains.
- [ ] Hardware-agnostic, software-only message appears on Home, Physical AI, Agriculture and Partners.
- [ ] No unsupported claims, fake logos or fabricated numbers anywhere.
- [ ] Lighthouse mobile scores of 90+ (Performance, Accessibility, Best Practices, SEO) on the homepage.
- [ ] Contact form works end to end and routes by audience.
- [ ] Dark and light themes both pass AA contrast.
- [ ] `README.md`, `CONTENT_GAPS.md` and `content-inventory.md` are delivered.
- [ ] `/platform/work-chips` exists and does not imply physical hardware chips (unless the owner confirms).
- [ ] `/research/literature` lists every paper in Section 17, each verified against its arXiv page, with original one-to-three-sentence summaries and no copied abstract text.
- [ ] Footer, Contact page and JSON-LD use the exact corporate identity in Section 1.
- [ ] Revenue is not displayed anywhere on the site.

---

## 15. Open Questions for the Owner (agent: list answers or leave as TODO)

1. Final company name and domain (dpulsai.com vs ARQAYA).
2. Accent colour and logo files.
3. Research contact email and general contact email.
4. Any named pilot partner, farm, equipment maker or simulator platform that can be featured?
5. What exactly is delivered to partners: model weights, API, SDK, fine-tuning service?
6. Which projects may be named publicly, and which must be anonymized?
7. Links to GitHub, Hugging Face, LinkedIn, X.
8. Demo videos, simulation clips and model-output images available for each pillar.
9. **Work Chips:** are they software skill modules (our assumption, since the company is software only) or physical chips? Which work chips exist or are planned (e.g. harvesting, sorting, loading, inspection)?
10. May the 2 government projects and 8 client projects be named, or must they stay anonymized? Any approved logos or testimonials?
11. Confirm the domain spelling (`dpulsai.com` vs `dpulseai.com`) for site and email.
12. Show CIN / GST / registration numbers in the footer? (Provide them if yes.)
13. Approve or reject showing any revenue figure publicly (default: do not show).


---

## 16. Robotics Brain Architecture: Work Chips + Router (NEW)

### The concept (owner's plan, in plain words)
We train models so robots can do labour work in any scenario. The system is **chip-based**: there are specific **work chips** for specific jobs. When a robot is given a particular task, a **router** selects the matching work chip and that chip performs the work.

### How to present it on the website
- **Brand term:** "Work Chips". Always explain it in one line: *"A Work Chip is a specialized skill module for one kind of job. A router picks the right chip for each task."*
- **Important:** the company is **software only**. Unless the owner confirms otherwise, a work chip is a **software module** (a trained skill pack), not physical silicon. Never imply the company manufactures chips or hardware. Open Question 9 must be answered; until then use the wording "skill modules (Work Chips)".
- Create page `/platform/work-chips` and add a "Work Chips" section to Home (after the pillar cards) and to `/physical-ai`.

### Page spec: `/platform/work-chips`
1. **Hero:** "One brain. Many Work Chips." + one-sentence explanation.
2. **Diagram (SVG, themeable):** `Task instruction + camera view -> Router -> [Chip: Harvest | Sort | Load | Inspect | ...] -> Robot action`. Show a shared base model underneath all chips.
3. **Why modular:** add a new skill without retraining everything; keep existing skills safe; choose the right specialist per job; swap or update one chip independently. (State only as design goals unless the owner supplies results.)
4. **Chip catalogue:** cards for each chip from owner content (`[TODO: owner list]`). Status badge: `available`, `in training`, `planned`.
5. **How routing works:** the router reads the task (language instruction and/or scene) and selects a chip. Mention both approaches from the literature (Section 17): routing inside the model vs an external router over lightweight adapters.
6. **Evaluation and safety:** how each chip is tested in simulation first, with safety checks. Use only owner-supplied facts.
7. **Related research:** auto-list papers from `/content/literature` tagged `skill-routing`.
8. **CTA:** "Request a pilot" / "Partner with us".

### Related research summary (to inform the page copy; verify before publishing)
The arXiv reading list shows two main design families that match our idea:
- **Router inside the model (mixture-of-experts):** a learned router activates skill-specific experts within one network.
- **External router over adapters:** a frozen base model plus a library of lightweight task-specific adapters; the instruction selects which adapter to load.
Both support adding a new skill by training only the new piece. Our Work Chips can be positioned as a product of the second family, with ideas from the first. **This is a design direction to evaluate, not a claim of results.**

---

## 17. Research Section: arXiv Reading List (seed content, NEW)

### Rules
1. These are **third-party papers**. Label every entry "Third-party research" so visitors never confuse them with our own work.
2. **Verify each entry against its arXiv abstract page** (`https://arxiv.org/abs/<id>`) before publishing: exact title, authors, date, category. IDs below came from search results and must be checked. If an ID does not resolve, remove that entry and log it in `CONTENT_GAPS.md`.
3. Write **your own** 1 to 3 sentence summary per paper. **Do not copy abstracts or sentences**. Link to arXiv for the source.
4. Add a short "Why it matters for us" line per paper.
5. Show our own results only where the owner supplies them.
6. Create the page `/research/literature` with filters by tag. Each paper also has an MDX file in `/content/literature/<arxivId>.mdx`.

### Content model for literature entries
```yaml
# /content/literature/<arxivId>.mdx
title: ""
authors: ""
arxivId: "2507.01843"
year: 2025
tags: ["skill-routing"]     # skill-routing | vla | world-models | continual-learning | foundations
ourTake: ""                  # why it matters for our Work Chips / platform (1 sentence)
summary: ""                  # our own words, 1-3 sentences
thirdParty: true
```

### A. Skill routing, mixture-of-experts and modular skills (core to Work Chips)

| arXiv ID | Paper (verify title on arXiv) | What it shows (paraphrase on site) | Why it matters for us |
|---|---|---|---|
| 2507.07818 | MoSE: Skill-by-Skill Mixture-of-Experts Learning for Embodied Autonomous Machines | A skill-oriented routing mechanism where experts learn scenario-specific skills step by step, aimed at small vision-language models (under 3B parameters) for driving and robot manipulation. | Shows skill routing works even with small models, which fits efficient deployment. |
| 2603.07648 | AtomicVLA (verify full title) | A VLA that builds a scalable library of atomic skills using a skill-guided mixture-of-experts with a skill router; adding a skill needs only the new expert and routing parameters to be trained. | Closest match to "add a new Work Chip without retraining the rest". |
| 2603.09298 | CORAL (verify full title) | A frozen pre-trained VLA backbone with an expandable library of lightweight task-specific LoRA experts, where the language instruction selects which expert to load on the fly, with no added inference overhead. | Very close to our idea: one base brain plus swappable chips chosen by the task. |
| 2507.01843 | MoIRA: Modular Instruction Routing Architecture for Multi-Task Robotics | An external zero-shot text router that coordinates separately trained experts (tested with GR00T N1 and pi0 using low-rank adapters); experts can be added or replaced without retraining the router. | Strong support for an external router design where chips are independent. |
| 2603.08476 | LAR-MoE: Latent-Aligned Routing for Mixture of Experts in Robotic Imitation Learning | A two-stage method that discovers skill decompositions without manual labels and uses them to route to experts in imitation learning. | Useful if we want chips discovered from data rather than hand-defined. |
| 2605.23477 | Semantically Structured Mixture-of-Experts for Compositional Robotic Manipulation (SMoDP) | Language-guided, skill-aware routing so similar skills go to the same expert in a diffusion policy, instead of load-balanced random routing. | Supports routing by meaning of the task, not by chance. |
| 2511.18085 | Continually Evolving Skill Knowledge in Vision Language Action Model (Stellar VLA) | A framework for continual learning of new manipulation skills that keeps old knowledge while adding new. | Relevant for growing the chip library over time without forgetting. |

### B. Foundation VLA models (the "brain" underneath)

| arXiv ID | Paper | Why it matters for us |
|---|---|---|
| 2410.24164 | pi0: A Vision-Language-Action Flow Model for General Robot Control | Defines the modern generalist VLA with a flow-matching action expert on top of a VLM. |
| 2503.14734 | GR00T N1: An Open Foundation Model for Generalist Humanoid Robots | Open dual-system VLA (reasoning module plus action module); an example of an open base model. |
| 2406.09246 | OpenVLA | Open-source VLA that smaller teams can fine-tune. |
| 2307.15818 | RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control | The paper that popularized the term "VLA". |

### C. World models for planning (our world-model pillar)

| arXiv ID | Paper | Why it matters for us |
|---|---|---|
| 2506.09985 | V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning | Self-supervised video world model post-trained on a small amount of robot video for zero-shot planning. |
| 2609.39235 | The Planning Limits of Latent World Models (verify ID and title; it appeared in search results) | Studies when latent world models can and cannot guide planning; useful for honest limitations. |
| `[verify]` | NVIDIA Cosmos world foundation model paper (agent: find the arXiv ID) | Reference for generative world foundation models used for simulation. |

### D. Original write-up to publish first (we author it)
Create the first research post **"Skill-routed VLAs: two ways to build a library of robot skills"** (draft, flagged `status: needs-owner-review`). Outline:
1. The problem: one model for every job vs specialists.
2. Family 1: router inside the model (MoSE, AtomicVLA, LAR-MoE, SMoDP).
3. Family 2: external router over adapters (CORAL, MoIRA).
4. Continual skill growth (Stellar VLA).
5. Our direction: Work Chips (design options we plan to evaluate; no results claimed).
6. References (links to arXiv).
Footer block: research contact email and hiring link, as on every research page.

### Presentation on `/research`
- The main research grid shows **our releases first**. A tab or section "Foundations / Reading list" links to `/research/literature`.
- If we have no own releases yet, show a clean "Our first releases are coming" state plus the reading list and the original write-up.

---

## 18. Contact, Footer and Structured Data (NEW)

- **Contact page and footer:** show legal name, full address, phone (clickable `tel:+919175790779`), `info@dpulseai.com` for general inquiries (clickable `mailto:`), `support@dpulseai.com` for support, and operating hours "Monday to Friday, 9:00 AM to 6:00 PM IST".
- **Form routing:** audience selector routes to `info@` by default; "Support" routes to `support@`; "Researcher" routes to the research email once provided (`[RESEARCH_EMAIL]`; fall back to `info@`).
- **Map:** optional static map or "Open in Maps" link for the Baner, Pune address. No third-party tracking embeds without consent.
- **JSON-LD `Organization`** on the home page: `name` and `legalName` "DPULSE AI PRIVATE LIMITED", `address` (streetAddress "Shubham Apt., Flat No. 6B, Sr. No. 23, Baner Gaon, Haveli", addressLocality "Pune", addressRegion "Maharashtra", postalCode "411045", addressCountry "IN"), `telephone` "+91 91 75 79 0779", `email` "info@dpulseai.com", `contactPoint` entries for general and support, and `openingHoursSpecification` Monday to Friday 09:00 to 18:00 (Asia/Kolkata).
- **Proof strip** on Home and About: "2 government projects delivered · 8 client projects · 20+ AI products and platforms". Anonymized wording only unless approved (Section 1).
- **Products and platforms:** create `/content/products/*.mdx` entries (name, one-liner, pillar, status) from the owner's scrape folder for the 20+ products, and show a "Products and platforms" grid on `/projects` (tab "Products"). Do not invent product names.
