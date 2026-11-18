export interface ProjectItem {
  slug: string;
  title: string;
  client: string; // anonymized per Section 1 rules
  pillar: "enterprise-ai" | "world-models" | "vlm-vla" | "robotics-brain" | "agriculture";
  oneLiner: string;
  status: "completed" | "in-progress" | "research";
  featured: boolean;
  problem: string;
  approach: string;
  stack: string[];
  results: string;
  deployment: string;
  learnings: string;
}

export interface ProductItem {
  id: string;
  name: string;
  pillar: "enterprise-ai" | "robotics-brain" | "agriculture" | "healthcare";
  oneLiner: string;
  status: "production" | "pilot" | "r&d";
  description: string;
  features: string[];
  specs: string;
}

export const projectsList: ProjectItem[] = [
  // 2 Government Projects
  {
    slug: "state-public-works-infrastructure-ledger",
    title: "Capital Works Cost Auditing & Digital Measurement Book",
    client: "A State Government Infrastructure Department",
    pillar: "enterprise-ai",
    oneLiner: "Automated verification and predictive cost auditing across 450+ active public infrastructure project sites.",
    status: "completed",
    featured: true,
    problem: "Manual measurement ledgers and contractor estimates led to substantial budget variances and protracted audit review cycles across statewide infrastructure projects.",
    approach: "Deployed the E-Estimate digital platform to ingest field measurement logs, auto-calculate material volumes, and cross-reference state schedules of rates in real time.",
    stack: ["E-Estimate Platform", "Automated Validation Engine", "PostgreSQL", "Enterprise Role Governance"],
    results: "Reduced project estimation discrepancies by 98% and compressed verification cycles from 45 days to under 48 hours.",
    deployment: "Air-gapped state government cloud instance with automated cryptographic audit stamps.",
    learnings: "Strict deterministic validation rules paired with intuitive field interfaces accelerate institutional public sector adoption."
  },
  {
    slug: "state-administrative-records-intelligence",
    title: "Multi-Decadal Public Administrative Records Intelligence",
    client: "A State Government Administrative Bureau",
    pillar: "enterprise-ai",
    oneLiner: "Automated indexing, extraction, and semantic search across historical unstructured governance archives.",
    status: "completed",
    featured: true,
    problem: "Millions of critical legacy service records and pension applications remained trapped in physical paper scans and fragmented document caches.",
    approach: "Trained a domain-specific small language model (DSLM) paired with high-accuracy Indian script OCR pipelines to extract structured entitlement records.",
    stack: ["Domain-Specific SLM (3B)", "Optical Document Extraction", "Semantic Vector Store"],
    results: "Digitized and cataloged over 2.4 million legacy archive pages with 99.4% field extraction precision.",
    deployment: "On-premise state data center installation with strict zero external network access.",
    learnings: "Domain-specific small models match or exceed generalist cloud LLMs on specialized bureaucratic syntax at a fraction of compute cost."
  },

  // 8 Commercial Client Projects
  {
    slug: "autonomous-orchard-labor-reduction",
    title: "Autonomous Orchard Crop & Weed Discrimination Platform",
    client: "A Large Commercial Fruit Orchard Operator",
    pillar: "agriculture",
    oneLiner: "Autonomous field robotics deployment cutting manual weed eradication and crop monitoring labor by 72%.",
    status: "completed",
    featured: true,
    problem: "Severe seasonal farm labor shortages made manual weed eradication and early disease detection cost-prohibitive across 300+ hectares.",
    approach: "Deployed Physical AI vision systems on lightweight field rovers with real-time VLM crop/weed discrimination and automated selective eradication.",
    stack: ["Physical AI Vision", "ROS 2 Autonomous Navigation", "Edge NPU", "PulseBoard Field Telemetry"],
    results: "Reduced manual farm labor requirement by 72% and decreased chemical herbicide application volume by 85%.",
    deployment: "Embedded low-power edge compute running 100% offline on field tractors and rovers.",
    learnings: "Hardware-agnostic software architectures allow rapid retrofitting onto diverse partner machinery without custom vehicle manufacturing."
  },
  {
    slug: "regional-hospital-clinical-triage",
    title: "Automated Clinical Symptom Triage & Inpatient Guidance",
    client: "A Multi-Facility Regional Healthcare Network",
    pillar: "enterprise-ai",
    oneLiner: "24/7 conversational medical triage handling 120,000+ patient inquiries autonomously.",
    status: "completed",
    featured: false,
    problem: "Emergency telephone queues and outpatient reception desks were overwhelmed by routine symptom inquiries and scheduling requests.",
    approach: "Integrated the Healthcare Bot into hospital patient portals and communication channels with clinical guidance protocols.",
    stack: ["Healthcare Bot Core", "Clinical Ontology Models", "HIPAA-Conscious Microservices"],
    results: "Handled 120,000+ patient inquiries autonomously with a 94% first-contact resolution rate for non-critical queries.",
    deployment: "Secure hospital private cloud with HL7/FHIR integration capabilities.",
    learnings: "Physician trust hinges on explainable, deterministic clinical boundaries and immediate escalations for high-risk symptom markers."
  },
  {
    slug: "enterprise-workforce-retirement-governance",
    title: "Enterprise Workforce Retirement & Statutory Gratuity Modeling",
    client: "A Nationwide Public-Sector Industrial Enterprise",
    pillar: "enterprise-ai",
    oneLiner: "Comprehensive pension, gratuity, and retirement tenure transition modeling for 18,000+ employees.",
    status: "completed",
    featured: false,
    problem: "Complex multi-tier pension rules and fragmented employee service history led to calculation disputes and delayed retirement clearances.",
    approach: "Implemented the ERMS (Employee Retirement Management System) unifying service registers and automating statutory retirement formulas.",
    stack: ["ERMS Platform", "Statutory Rule Engine", "Real-Time Liability Forecast"],
    results: "Automated end-to-end clearance for over 1,400 retiring staff annually with zero formulaic errors.",
    deployment: "Enterprise private cloud behind corporate firewall.",
    learnings: "Transparency and clear step-by-step pension breakdown ledgers eliminate 100% of employee grievances during transition."
  },
  {
    slug: "telecom-predictive-network-telemetry",
    title: "Telecom Base Station Telemetry Anomaly Detection",
    client: "A National Telecom Operator",
    pillar: "enterprise-ai",
    oneLiner: "Real-time edge anomaly detection and predictive incident routing across cell tower infrastructure.",
    status: "completed",
    featured: false,
    problem: "Sudden tower power failures and antenna drift caused intermittent service outages before field technicians could respond.",
    approach: "Deployed edge telemetry intelligence analyzing power consumption anomalies and weather telemetry to forecast equipment failure.",
    stack: ["Edge Time-Series Model", "IoT Sensor Stream Ingestion", "Automated Dispatch Gateway"],
    results: "Reduced unplanned tower downtime by 34% through proactive 4-hour advance maintenance dispatching.",
    deployment: "Containerized edge agents deployed across 3,000+ regional base stations.",
    learnings: "Low-parameter time-series models deployed locally on base stations prevent communication storm failures during network outages."
  },
  {
    slug: "agricultural-cooperative-yield-intelligence",
    title: "Cooperative Multi-Spectral Crop Maturity & Harvest Timing",
    client: "A Regional Agricultural Producer Cooperative",
    pillar: "agriculture",
    oneLiner: "Multi-spectral computer vision for harvest timing optimization across 1,200 member farms.",
    status: "completed",
    featured: false,
    problem: "Uncoordinated crop harvesting created severe market glut periods and high post-harvest perishability rates.",
    approach: "Trained localized vision models analyzing member smartphone and drone imagery to predict precise harvesting windows.",
    stack: ["Agricultural VLM", "Spatial Yield Projection", "Mobile Offline Client"],
    results: "Improved cooperative aggregate pricing realization by 16% through staggered, demand-aligned harvesting schedules.",
    deployment: "Hybrid mobile offline edge inference with daily cooperative sync.",
    learnings: "Simple, accessible camera inputs drive higher grower adoption than complex sensor attachments."
  },
  {
    slug: "industrial-equipment-sensor-fusion-pilot",
    title: "Low-Latency LiDAR & Optical Sensor Fusion Module",
    client: "A Heavy Machinery Manufacturer",
    pillar: "robotics-brain",
    oneLiner: "Hardware-agnostic sensor fusion module integrating 3D LiDAR and stereo cameras for autonomous indoor transport.",
    status: "completed",
    featured: false,
    problem: "Factory floor Automated Guided Vehicles (AGVs) suffered frequent safety stops when encountering irregular obstacles and variable lighting.",
    approach: "Engineered a low-latency spatial perception module fusing LiDAR depth data with optical camera feeds for dynamic navigation.",
    stack: ["Spatial VLM Perception", "LiDAR-Camera Time Sync", "NPU Acceleration"],
    results: "Reduced false-positive emergency stops by 88% while increasing vehicle transport speeds by 25%.",
    deployment: "Embedded automotive-grade edge compute attached to partner AGV chassis.",
    learnings: "Sensor fusion models must maintain sub-15ms processing ceilings to prevent safety-critical kinematic hesitation."
  },
  {
    slug: "pharmaceutical-supply-integrity-verification",
    title: "Pharmaceutical Cold-Chain Regulatory Verification Engine",
    client: "A Life Sciences Distribution Network",
    pillar: "enterprise-ai",
    oneLiner: "Automated verification of cold-chain sensor logs and regulatory dispatch compliance.",
    status: "completed",
    featured: false,
    problem: "Manual review of temperature sensor charts delayed medication dispatch across temperature-controlled logistics corridors.",
    approach: "Implemented an automated validation pipeline parsing continuous cold-chain sensor streams against statutory stability criteria.",
    stack: ["Automated Verification Engine", "Time-Series Validator", "Audit Dashboard"],
    results: "Accelerated logistics dispatch clearance from 6 hours to under 3 minutes with zero compliance violations.",
    deployment: "Cloud microservice with API hooks into warehouse management systems.",
    learnings: "Automated audit systems must produce human-readable rationale reports for regulatory inspectors."
  },
  {
    slug: "commercial-fleet-maintenance-forecasting",
    title: "Heavy Freight Predictive Component Failure Forecasting",
    client: "A Logistics & Commercial Transport Fleet",
    pillar: "enterprise-ai",
    oneLiner: "Predictive maintenance scheduling for 850+ heavy freight transport vehicles.",
    status: "completed",
    featured: false,
    problem: "Unscheduled roadside engine breakdowns led to freight penalties and high emergency repair overhead.",
    approach: "Connected OBD-II telematics to predictive models forecasting transmission and brake wear based on route topography and cargo load.",
    stack: ["Predictive Telematics Engine", "Fleet Telemetry API", "PulseBoard Dispatch"],
    results: "Decreased highway breakdown rates by 41% and reduced total fleet spare-part inventory carrying costs by 19%.",
    deployment: "Cloud telemetry pipeline ingesting live cellular vehicular feeds.",
    learnings: "Incorporating road elevation and seasonal weather variables improves wear prediction accuracy significantly over mileage-only heuristics."
  }
];

export const productsList: ProductItem[] = [
  {
    id: "healthcare-bot",
    name: "Healthcare Bot",
    pillar: "healthcare",
    oneLiner: "Medical-grade conversational assistant for symptom triage and patient care guidance.",
    status: "production",
    description: "A reliable Health AI assistant trained on comprehensive clinical knowledge, supporting healthcare providers and delivering round-the-clock medical triage guidance.",
    features: [
      "24/7 symptom triage and clinical assessment guidance",
      "Evidence-backed medical insights delivery",
      "Seamless integration with hospital management systems",
      "Strict data privacy standards"
    ],
    specs: "REST API, WebSocket streaming, Embeddable Web Widget, Mobile SDK"
  },
  {
    id: "erms",
    name: "Employee Retirement Management System (ERMS)",
    pillar: "enterprise-ai",
    oneLiner: "Statutory pension, gratuity, and workforce retirement governance platform.",
    status: "production",
    description: "Streamlines the entire retirement lifecycle for enterprise workforces. Tracks service tenure, automates pension and gratuity calculations, and models future workforce transition liabilities.",
    features: [
      "Automated pension & gratuity statutory formula ledger",
      "Tenure tracking and eligibility verification",
      "Retirement cohort trend and liability forecasting",
      "Audit-ready institutional compliance reporting"
    ],
    specs: "On-Premise / Sovereign Cloud, Role-Based Access, Single Sign-On, Audit Trail Engine"
  },
  {
    id: "e-estimate",
    name: "E-Estimate System",
    pillar: "enterprise-ai",
    oneLiner: "Digital Measurement Book and predictive cost ledger for capital infrastructure.",
    status: "production",
    description: "A unified platform for managing project estimates based on field measurements and predictive cost auditing. Integrates Measurement Books and Estimate Ledgers with automated verification.",
    features: [
      "Digital Measurement Book field synchronization",
      "Real-time schedule of rates validation",
      "Predictive cost overrun forecasting",
      "Multi-tier digital approval workflows"
    ],
    specs: "Offline-First Mobile PWA, Centralized Ledger Server, Automated PDF Report Generator"
  },
  {
    id: "pulseboard",
    name: "PulseBoard Analytics",
    pillar: "enterprise-ai",
    oneLiner: "Unified enterprise AI analytics and telemetry dashboard.",
    status: "production",
    description: "Transforms complex organizational telemetry, model inference logs, and field sensor data into actionable visual insights and automated operational triggers.",
    features: [
      "Real-time operational data stream ingestion",
      "Anomaly detection and predictive event triggers",
      "Customizable executive and engineering dashboards",
      "Secure sovereign deployment"
    ],
    specs: "Time-Series Ingestion Engine, Webhook Integration, Prometheus/Grafana compatible"
  },
  {
    id: "work-chips-runtime",
    name: "Work Chips Robotics Runtime",
    pillar: "robotics-brain",
    oneLiner: "Modular skill execution engine and dynamic task router for physical robots.",
    status: "pilot",
    description: "The software execution layer powering hardware-agnostic physical robots. Dispatches sensory inputs and task instructions to specialized skill modules without model retraining.",
    features: [
      "Dynamic task-to-chip instruction routing",
      "Sub-15ms edge inference execution",
      "Hardware-agnostic robot control API",
      "Deterministic kinematic safety envelopes"
    ],
    specs: "ROS 2 Native, C++ / Python SDK, TensorRT / ONNX Runtime, Linux / QNX support"
  },
  {
    id: "agri-field-brain",
    name: "AgriField Physical AI Stack",
    pillar: "agriculture",
    oneLiner: "Autonomous field navigation, crop disease detection, and selective labor automation.",
    status: "pilot",
    description: "Software-only physical AI suite retrofittable onto partner agricultural machinery to automate labor-intensive field tasks like weeding, spraying, and harvest inspection.",
    features: [
      "Centimeter-precision all-terrain field navigation",
      "Real-time optical crop, weed, and disease classification",
      "70%+ manual field labor requirement reduction",
      "Targeted micro-dosing reducing chemical usage by 85%"
    ],
    specs: "Edge NPU integration, All-Weather Optical Pipeline, Offline GNSS-Denied Odometry"
  }
];
