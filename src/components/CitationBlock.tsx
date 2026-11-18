"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CitationBlockProps {
  bibtex: string;
}

export default function CitationBlock({ bibtex }: CitationBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy citation:", err);
    }
  };

  return (
    <div className="bg-[#141414] text-white p-6 rounded-xl border border-white/10 relative">
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-[11px] text-gold uppercase tracking-wider">BibTeX Citation</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-[12px] font-sans transition-colors cursor-pointer"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          <span>{copied ? "Copied!" : "Copy Citation"}</span>
        </button>
      </div>
      <pre className="font-mono text-[13px] text-gray-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
        {bibtex}
      </pre>
    </div>
  );
}
