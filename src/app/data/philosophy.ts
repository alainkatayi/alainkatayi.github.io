export type PhilosophyTab = {
  id: string;
  label: string;
  prompt: string;
  lines: string[];
};

export const philosophyTabs: PhilosophyTab[] = [
  {
    id: 'principles',
    label: 'Principles',
    prompt: 'cat principles.md',
    lines: [
      '# Clean systems over clever shortcuts',
      '- Prefer explicit contracts over implicit magic',
      '- Keep domain language consistent across services',
      '- Optimize for operability: logs, metrics, recovery paths',
      '- Design for failure modes before happy paths',
    ],
  },
  {
    id: 'dry',
    label: 'DRY Architecture',
    prompt: 'python -c "explain_dry()"',
    lines: [
      '>>> DRY is not copy-paste avoidance alone',
      '>>> Extract shared policy, not accidental similarity',
      '>>> One source of truth for auth, money rules, and audit',
      '>>> Duplicate temporarily if coupling would be worse',
      '>>> Refactor once the boundary is proven',
    ],
  },
  {
    id: 'scale',
    label: 'Scalability',
    prompt: 'systemctl status scalability',
    lines: [
      '[active] isolate write-heavy paths from read models',
      '[active] make concurrency intentional: queues, locks, retries',
      '[active] keep REST surfaces versioned and boring',
      '[active] measure p95 before guessing bottlenecks',
      '[ready] scale horizontally only after the model is sound',
    ],
  },
];
