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
    id: 'first-bank-e-account',
    title: 'First Bank e-Account API',
    subtitle: 'Digital banking self-boarding backend',
    description:
      'Backend API for a digital banking self-boarding flow: prospects submit account-opening data and documents, agents review requests, and administrators keep a full audit trail of decisions.',
    outcomes: [
      'Public self-boarding endpoints for form and document submission',
      'Agent decision workflow with required rejection motivations',
      'Audit trail linking each validation or rejection to the acting agent',
      'Soft delete and one-to-one request/decision relationships for safe data handling',
    ],
    metrics: [
      { label: 'Domain', value: 'Digital banking' },
      { label: 'API', value: 'Django REST' },
      { label: 'Auth', value: 'SimpleJWT' },
    ],
    stack: ['Django REST', 'Python', 'MySQL', 'Git'],
    github: 'https://github.com/alainkatayi/First-Bank-e-Account-back',
  },
];
