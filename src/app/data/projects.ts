export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: 'payment-orchestration',
    title: 'Payment Orchestration Core',
    subtitle: 'FinTech transaction routing & settlement integrity',
    description:
      'Designed a modular payment orchestration layer that normalizes provider callbacks, enforces idempotent settlement paths, and exposes a stable REST contract for merchant and banking clients.',
    outcomes: [
      'Clear domain separation between authorization, capture, and reconciliation',
      'Idempotency keys and retry-safe webhook processing',
      'Operational dashboards for exception queues and settlement status',
    ],
    metrics: [
      { label: 'API latency target', value: '< 120ms p95' },
      { label: 'Concurrency model', value: 'Queue + locks' },
      { label: 'Contract style', value: 'Versioned REST' },
    ],
    stack: ['Laravel', 'MySQL', 'Docker', 'TypeScript'],
    github: 'https://github.com/alainkatayi',
  },
  {
    id: 'banking-ledger-api',
    title: 'Banking Ledger API',
    subtitle: 'Double-entry accounting service for internal products',
    description:
      'Built a ledger-oriented backend focused on immutable journal entries, balanced postings, and audit-friendly query surfaces suitable for internal banking product teams.',
    outcomes: [
      'Double-entry posting rules enforced at the service boundary',
      'Append-only journal with reconciliation endpoints',
      'Strict authentication and role-based access for financial operators',
    ],
    metrics: [
      { label: 'Integrity model', value: 'Double-entry' },
      { label: 'Audit trail', value: 'Immutable' },
      { label: 'API surface', value: 'Django REST' },
    ],
    stack: ['Django REST', 'Python', 'MySQL', 'Docker'],
    github: 'https://github.com/alainkatayi',
  },
  {
    id: 'ops-control-plane',
    title: 'Ops Control Plane',
    subtitle: 'Enterprise frontend for banking operations teams',
    description:
      'Delivered an Angular control plane for monitoring service health, reviewing failed financial jobs, and guiding operators through high-risk remediation workflows with clear state machines.',
    outcomes: [
      'Role-aware navigation for support, ops, and engineering roles',
      'Structured incident views wired to backend health endpoints',
      'Predictable UI states that mirror backend workflow transitions',
    ],
    metrics: [
      { label: 'UI framework', value: 'Angular' },
      { label: 'Workflow clarity', value: 'State-driven' },
      { label: 'Delivery', value: 'Component system' },
    ],
    stack: ['Angular', 'TypeScript', 'Tailwind CSS', 'REST'],
    github: 'https://github.com/alainkatayi',
    live: 'https://github.com/alainkatayi',
  },
];
