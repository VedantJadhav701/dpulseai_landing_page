export interface ResearchArticle {
  slug: string;
  title: string;
  version: string;
  date: string;
  pillar: string[];
  type: string;
  summary: string;
  author: string;
  status: "published" | "draft" | "needs-owner-review";
  results?: { label: string; value: string; note: string }[];
  content: string;
  citationBibtex: string;
}

export const researchArticles: ResearchArticle[] = [
  {
    slug: "skill-routed-vlas-two-ways-to-build-robot-skills",
    title: "Skill-routed VLAs: Two Ways to Build a Library of Robot Skills",
    version: "v0.1-draft",
    date: "2026-03-15",
    pillar: ["vlm-vla", "robotics-brain", "agriculture"],
    type: "Research Note",
    status: "needs-owner-review",
    author: "DPULSE AI Research Group",
    summary: "An exploration of modular skill architectures for physical robotics, comparing in-model routing (Mixture-of-Experts) against external instruction routers over lightweight skill adapters.",
    results: [
      { label: "Target Execution Latency", value: "< 15ms", note: "Closed-loop on-device edge NPU inference target" },
      { label: "Skill Isolation", value: "100%", note: "Zero regression on existing tasks when appending new Work Chips" },
      { label: "Base Backbone Footprint", value: "3B - 7B", note: "Compact multimodal backbone suited for edge deployment" },
    ],
    citationBibtex: `@article{dpulseai2026skillroutedvlas,
  title={Skill-routed VLAs: Two Ways to Build a Library of Robot Skills},
  author={DPULSE AI Research Group},
  journal={DPULSE AI Technical Notes},
  year={2026},
  url={https://dpulseai.com/research/skill-routed-vlas-two-ways-to-build-robot-skills}
}`,
    content: `
### 1. The Core Tension: Generalist Backbones vs. Specialist Execution
General-purpose Vision-Language-Action (VLA) models excel at semantic task interpretation but struggle with the precision and dexterity demanded by specialized physical labor. Retraining an entire multi-billion parameter foundation model every time a robot must learn a new seasonal crop harvesting routine or complex warehouse manipulation primitive is computationally prohibitive and risks catastrophic forgetting.

### 2. Family 1: Router Inside the Model (Mixture-of-Experts)
The first architectural paradigm embeds the skill routing directly inside the neural network backbone. As demonstrated in literature such as MoSE (2025) and AtomicVLA (2026), specialized feed-forward or flow-matching layers act as domain experts. When a language or visual task token enters the transformer, an internal gating mechanism assigns the computation to the appropriate expert sub-network. This maintains end-to-end differentiability while partitioning skill knowledge.

### 3. Family 2: External Router over Lightweight Adapters
The second paradigm pairs a frozen generalist base VLA with an expandable external library of lightweight task adapters (such as low-rank adapters or diffusion policy heads). As explored in CORAL (2026) and MoIRA (2025), a lightweight semantic router examines the high-level task specification and sensor frame, selecting and dynamically loading the corresponding skill module ("Work Chip") into memory.

### 4. Continual Growth Without Catastrophic Forgetting
A key operational requirement for real-world robotics in agriculture and industrial plants is lifelong continual learning (Stellar VLA, 2025). Adding an autumn grape harvesting skill must not degrade spring weed-eradication reflexes. By isolating skill policies into modular units, engineers can benchmark, verify, and update individual Work Chips in simulation before edge deployment.

### 5. Architectural Direction: The DPULSE AI Work Chip Concept
Our ongoing research evaluates a hybrid design: a robust, frozen multimodal base model that extracts invariant spatial representations, coupled with specialized Work Chips orchestrated by a task router. This design direction aims to bring modular, hardware-agnostic cognitive capability to physical machines without requiring silicon re-design.
`
  }
];
