export type Lang = 'en' | 'fr';

export type AppCopy = {
  nav: { about: string; skills: string; projects: string; contact: string; openMenu: string; closeMenu: string };
  availability: string;
  hero: {
    role: string;
    specialty: string;
    headline: string;
    subheadline: string;
    viewProjects: string;
    getInTouch: string;
    focus: string;
    domain: string;
    basedIn: string;
    focusValue: string;
    domainValue: string;
    basedInValue: string;
    systems: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    paragraphs: string[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    categories: Record<string, { title: string; description: string }>;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    badge: string;
    github: string;
    live: string;
    items: Record<
      string,
      {
        title: string;
        subtitle: string;
        description: string;
        outcomes: string[];
        metrics: { label: string; value: string }[];
      }
    >;
  };
  philosophy: {
    eyebrow: string;
    title: string;
    description: string;
    tabs: Record<string, { label: string; lines: string[] }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    locationValue: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    lightMode: string;
    darkMode: string;
  };
  language: {
    title: string;
    english: string;
    french: string;
    dragHint: string;
  };
  nudge: {
    title: string;
    body: string;
    cta: string;
    dismiss: string;
    close: string;
  };
};

export const translations: Record<Lang, AppCopy> = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    availability: 'Available for FinTech & Software Engineering Roles',
    hero: {
      role: 'Software Engineer',
      specialty: 'FinTech & Banking Systems',
      headline: 'Engineering Scalable Architectures.',
      subheadline:
        'I design resilient system architectures, high-concurrency REST APIs, and backends built for stability, auditability, and long-term growth.',
      viewProjects: 'View Projects',
      getInTouch: 'Get in Touch',
      focus: 'Focus',
      domain: 'Domain',
      basedIn: 'Based in',
      focusValue: 'System Design',
      domainValue: 'FinTech',
      basedInValue: 'Kinshasa, RDC',
      systems: 'Systems',
    },
    about: {
      eyebrow: 'About',
      title: 'Engineering mindset first. Frameworks second.',
      description:
        'I build systems for financial products where correctness, observability, and API clarity matter as much as delivery speed.',
      paragraphs: [
        'I approach software as infrastructure: clear boundaries, deliberate contracts, and systems that remain predictable under load.',
        'My focus sits at the intersection of FinTech product needs and banking-grade backend discipline — payment flows, ledger integrity, authorization boundaries, and operational observability.',
        'Languages and frameworks are tools. The craft is architecture: modeling domains correctly, keeping APIs coherent, and designing for concurrency without sacrificing clarity.',
      ],
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Tools I use to build products',
      description:
        'Languages, frameworks, and platforms I work with across backend, frontend, and project delivery — especially around FinTech and banking apps.',
      categories: {
        backend: {
          title: 'Backend & APIs',
          description: 'Building REST APIs and backend services for web and banking workflows.',
        },
        'system-design': {
          title: 'System Design',
          description: 'Structuring apps with clear modules, data models, and maintainable API contracts.',
        },
        frontend: {
          title: 'Enterprise Frontend',
          description: 'Interfaces for dashboards, admin flows, and product screens.',
        },
        infra: {
          title: 'Infrastructure & Databases',
          description: 'Databases and version control tools I use day to day on projects.',
        },
      },
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Featured work',
      description:
        'A digital banking backend project focused on account self-boarding, agent decisions, and auditability.',
      badge: 'Digital Banking',
      github: 'GitHub',
      live: 'Live',
      items: {
        'first-bank-e-account': {
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
        },
      },
    },
    philosophy: {
      eyebrow: 'Philosophy',
      title: 'How I think about reliable software',
      description:
        'A compact terminal view into the principles that guide architecture decisions in high-stakes FinTech systems.',
      tabs: {
        principles: {
          label: 'Principles',
          lines: [
            '# Clean systems over clever shortcuts',
            '- Prefer explicit contracts over implicit magic',
            '- Keep domain language consistent across services',
            '- Optimize for operability: logs, metrics, recovery paths',
            '- Design for failure modes before happy paths',
          ],
        },
        dry: {
          label: 'DRY Architecture',
          lines: [
            '>>> DRY is not copy-paste avoidance alone',
            '>>> Extract shared policy, not accidental similarity',
            '>>> One source of truth for auth, money rules, and audit',
            '>>> Duplicate temporarily if coupling would be worse',
            '>>> Refactor once the boundary is proven',
          ],
        },
        scale: {
          label: 'Scalability',
          lines: [
            '[active] isolate write-heavy paths from read models',
            '[active] make concurrency intentional: queues, locks, retries',
            '[active] keep REST surfaces versioned and boring',
            '[active] measure p95 before guessing bottlenecks',
            '[ready] scale horizontally only after the model is sound',
          ],
        },
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's build resilient financial systems",
      description:
        'Open to FinTech and software engineering roles where system design, API architecture, and banking backend stability are first-class concerns.',
      location: 'Location',
      email: 'Email',
      phone: 'Phone',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      locationValue: 'Kinshasa, Democratic Republic of the Congo (RDC)',
    },
    footer: {
      tagline: 'Software Engineer · Kinshasa, RDC',
      copyright: 'Built for clarity, scale, and systems thinking.',
      lightMode: 'Switch to light mode',
      darkMode: 'Switch to dark mode',
    },
    language: {
      title: 'Language',
      english: 'English',
      french: 'French',
      dragHint: 'Drag to move · click to choose',
    },
    nudge: {
      title: 'Hey there',
      body: 'Looking for a developer, or want to talk about a project? I would love to hear from you.',
      cta: "Let's talk",
      dismiss: 'Maybe later',
      close: 'Close',
    },
  },
  fr: {
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
    },
    availability: 'Disponible pour des rôles FinTech & Software Engineering',
    hero: {
      role: 'Ingénieur logiciel',
      specialty: 'FinTech & systèmes bancaires',
      headline: 'Des architectures pensées pour scaler.',
      subheadline:
        'Je conçois des architectures résilientes, des APIs REST à forte concurrence, et des backends stables, auditables et durables.',
      viewProjects: 'Voir les projets',
      getInTouch: 'Me contacter',
      focus: 'Focus',
      domain: 'Domaine',
      basedIn: 'Basé à',
      focusValue: 'System Design',
      domainValue: 'FinTech',
      basedInValue: 'Kinshasa, RDC',
      systems: 'Systèmes',
    },
    about: {
      eyebrow: 'À propos',
      title: 'Le mindset d’abord. Les frameworks ensuite.',
      description:
        'Je construis des systèmes pour des produits financiers où la justesse, l’observabilité et la clarté des APIs comptent autant que la vitesse de livraison.',
      paragraphs: [
        'Je traite le logiciel comme une infrastructure : des frontières claires, des contrats explicites, et des systèmes prévisibles sous charge.',
        'Mon focus se situe entre les besoins produit FinTech et la discipline backend bancaire — flux de paiement, intégrité des ledgers, autorisations et observabilité.',
        'Les langages et frameworks sont des outils. Le vrai métier, c’est l’architecture : bien modéliser le domaine, garder des APIs cohérentes, et penser la concurrence sans perdre en clarté.',
      ],
    },
    skills: {
      eyebrow: 'Compétences',
      title: 'Les outils avec lesquels je construis',
      description:
        'Langages, frameworks et plateformes que j’utilise côté backend, frontend et livraison de projets — surtout autour de la FinTech et du bancaire.',
      categories: {
        backend: {
          title: 'Backend & APIs',
          description: 'Création d’APIs REST et de services backend pour le web et les flux bancaires.',
        },
        'system-design': {
          title: 'System Design',
          description: 'Structurer des apps avec des modules clairs, des modèles de données et des contrats d’API maintenables.',
        },
        frontend: {
          title: 'Frontend applicatif',
          description: 'Interfaces pour dashboards, parcours admin et écrans produit.',
        },
        infra: {
          title: 'Infrastructure & bases de données',
          description: 'Bases de données et outils de versioning que j’utilise au quotidien.',
        },
      },
    },
    projects: {
      eyebrow: 'Projets',
      title: 'Travail mis en avant',
      description:
        'Un backend de digital banking centré sur le self-boarding de comptes, les décisions agents et l’auditabilité.',
      badge: 'Digital Banking',
      github: 'GitHub',
      live: 'Live',
      items: {
        'first-bank-e-account': {
          title: 'First Bank e-Account API',
          subtitle: 'Backend de self-boarding bancaire digital',
          description:
            'API backend pour un parcours de self-boarding bancaire : les prospects soumettent leurs données et documents d’ouverture de compte, les agents traitent les demandes, et les administrateurs disposent d’une piste d’audit complète des décisions.',
          outcomes: [
            'Endpoints publics de self-boarding pour formulaires et documents',
            'Workflow de décision agent avec motivation obligatoire en cas de rejet',
            'Piste d’audit reliant chaque validation ou rejet à l’agent concerné',
            'Soft delete et relation one-to-one demande/décision pour une gestion sûre des données',
          ],
          metrics: [
            { label: 'Domaine', value: 'Digital banking' },
            { label: 'API', value: 'Django REST' },
            { label: 'Auth', value: 'SimpleJWT' },
          ],
        },
      },
    },
    philosophy: {
      eyebrow: 'Philosophie',
      title: 'Comment je pense un logiciel fiable',
      description:
        'Une vue terminal compacte des principes qui guident mes choix d’architecture sur des systèmes FinTech exigeants.',
      tabs: {
        principles: {
          label: 'Principes',
          lines: [
            '# Des systèmes propres plutôt que des raccourcis malins',
            '- Préférer des contrats explicites à la magie implicite',
            '- Garder un langage de domaine cohérent entre services',
            '- Optimiser pour l’opérabilité : logs, métriques, chemins de reprise',
            '- Concevoir les modes de panne avant le happy path',
          ],
        },
        dry: {
          label: 'Architecture DRY',
          lines: [
            '>>> DRY, ce n’est pas seulement éviter le copier-coller',
            '>>> Extraire une politique partagée, pas une similarité accidentelle',
            '>>> Une seule source de vérité pour auth, règles métier et audit',
            '>>> Dupliquer temporairement si le couplage serait pire',
            '>>> Refactorer une fois la frontière validée',
          ],
        },
        scale: {
          label: 'Scalabilité',
          lines: [
            '[active] isoler les chemins write-heavy des read models',
            '[active] rendre la concurrence intentionnelle : queues, locks, retries',
            '[active] garder des surfaces REST versionnées et sobres',
            '[active] mesurer le p95 avant de deviner les goulots',
            '[ready] scaler horizontalement seulement quand le modèle est solide',
          ],
        },
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Construisons des systèmes financiers solides',
      description:
        'Ouvert aux rôles FinTech et software engineering où le system design, l’architecture d’API et la stabilité des backends bancaires sont prioritaires.',
      location: 'Localisation',
      email: 'Email',
      phone: 'Téléphone',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      locationValue: 'Kinshasa, République démocratique du Congo (RDC)',
    },
    footer: {
      tagline: 'Ingénieur logiciel · Kinshasa, RDC',
      copyright: 'Conçu pour la clarté, l’échelle et la pensée système.',
      lightMode: 'Passer en mode clair',
      darkMode: 'Passer en mode sombre',
    },
    language: {
      title: 'Langue',
      english: 'Anglais',
      french: 'Français',
      dragHint: 'Glisser pour déplacer · cliquer pour choisir',
    },
    nudge: {
      title: 'Coucou',
      body: 'Tu cherches un développeur, ou tu veux parler d’un projet ? Écris-moi, on en discute.',
      cta: 'Parlons-en',
      dismiss: 'Plus tard',
      close: 'Fermer',
    },
  },
};
