export const profile = {
  name: 'Alain Katayi',
  role: 'Software Engineer',
  specialty: 'FinTech & Banking Systems',
  location: 'Kinshasa, Democratic Republic of the Congo (RDC)',
  email: 'alainkatayi01@gmail.com',
  phone: '+243 850842237',
  linkedin: 'https://www.linkedin.com/in/alain-katayi/?isSelfProfile=true',
  github: 'https://github.com/alainkatayi',
  availability: 'Available for FinTech & Software Engineering Roles',
  headline: 'Engineering Scalable Architectures.',
  subheadline:
    'I design resilient system architectures, high-concurrency REST APIs, and backends built for stability, auditability, and long-term growth.',
  about: [
    'I approach software as infrastructure: clear boundaries, deliberate contracts, and systems that remain predictable under load.',
    'My focus sits at the intersection of FinTech product needs and banking-grade backend discipline — payment flows, ledger integrity, authorization boundaries, and operational observability.',
    'Languages and frameworks are tools. The craft is architecture: modeling domains correctly, keeping APIs coherent, and designing for concurrency without sacrificing clarity.',
  ],
} as const;

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const;
