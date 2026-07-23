export type ResumeLang = 'es' | 'en'

type ResumeContent = {
  title: string
  yearsLabel: string
  summary: string
  highlights: string[]
  skills: { label: string; items: string[] }[]
  experience: {
    company: string
    role: string
    period: string
    bullets: string[]
    stack: string[]
  }[]
  education: { degree: string; school: string; year: string }[]
  languages: { name: string; level: string }[]
  courses: string[]
  ui: {
    eyebrow: string
    stackEyebrow: string
    stackTitle: string
    experienceEyebrow: string
    experienceTitle: string
    educationEyebrow: string
    educationTitle: string
    languagesEyebrow: string
    languagesTitle: string
    coursesEyebrow: string
    ctaEyebrow: string
    ctaTitle: string
    contactMe: string
    messageForm: string
    mailSubject: string
  }
}

const shared = {
  name: 'Axel Laurent Obscura Sarzotti',
  years: '22+',
  location: 'Ciudad de México',
  email: 'axosar@gmail.com',
  phone: '+52 55 3220 6321',
}

const skillItems = {
  frontend: [
    'TypeScript',
    'React',
    'Next.js',
    'Angular',
    'Vue',
    'React Native',
    'Redux',
    'Tailwind',
    'SASS',
  ],
  backend: [
    'Node.js',
    'Express',
    'NestJS',
    'GraphQL',
    'Apollo',
    'REST',
    'Python',
    'Java',
    'PHP',
  ],
  data: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server', 'Oracle'],
  cloud: ['AWS', 'Azure', 'GCP', 'CI/CD', 'Git', 'GitLab', 'Docker'],
  ai: ['LangChain.js', 'RAG', 'TensorFlow.js', 'Agile', 'Mentoring'],
}

const stacks = {
  globant: [
    'Node.js',
    'GraphQL',
    'Apollo',
    'NestJS',
    'React',
    'Next.js',
    'Python',
    'AWS',
  ],
  imcyc: [
    'GraphQL',
    'Node.js',
    'React',
    'Next.js',
    'React Native',
    'Java',
    'AWS',
  ],
  nagarro: ['React', 'Angular', 'GraphQL', 'Node.js', 'MongoDB', 'AWS'],
  pengostores: ['PHP', 'Magento', 'AngularJS', 'MySQL', 'AWS', 'SASS'],
  renta: ['PHP', 'Joomla', 'Node.js', 'MySQL', 'Mocha'],
  ada: ['JavaScript', 'ASP.NET', 'C#', 'SQL Server', 'PHP'],
  galas: ['PHP', 'Zend', 'WordPress', 'MySQL', 'JavaScript'],
}

export const resumes: Record<ResumeLang, ResumeContent> = {
  en: {
    title: 'Senior Full Stack Developer',
    yearsLabel: 'years',
    summary:
      'Senior Full Stack Developer with 22+ years designing and shipping scalable web and mobile products. Specialized in GraphQL (Apollo, NestJS), Node.js, React/Next.js, and cloud platforms (AWS, Azure, GCP). Proven track record leading architecture migrations, AI/ML integrations, and mentoring engineering teams through the full delivery lifecycle.',
    highlights: [
      'GraphQL APIs at scale — Apollo, NestJS, federation, Dataloader',
      'Full-stack product delivery — React, Next.js, Angular, React Native',
      'Cloud & AI platforms — AWS, Azure, GCP, RAG / LangChain.js',
    ],
    skills: [
      { label: 'Frontend', items: skillItems.frontend },
      { label: 'Backend', items: skillItems.backend },
      { label: 'Data', items: skillItems.data },
      { label: 'Cloud & DevOps', items: skillItems.cloud },
      { label: 'AI & Product', items: skillItems.ai },
    ],
    experience: [
      {
        company: 'Globant Technologies',
        role: 'Sr. Full Stack Developer',
        period: 'Apr 2022 — 2026',
        bullets: [
          'Architected high-performance GraphQL APIs with Node.js (Apollo Server / NestJS) to orchestrate data for machine learning microservices.',
          'Solved N+1 query issues with Dataloader and custom directives for field-level authorization and caching.',
          'Built React / Next.js / Angular interfaces with AI-powered components and GraphQL Subscriptions for real-time model status.',
          'Shipped RAG systems with LangChain.js and vector databases (Pinecone, Milvus) to improve chatbot retrieval quality.',
          'Deployed AI services, serverless functions, and containers across AWS, Azure, and GCP; mentored juniors through code reviews.',
        ],
        stack: stacks.globant,
      },
      {
        company: 'Instituto Mexicano del Cemento y del Concreto',
        role: 'Sr. Full Stack Developer · Team Lead',
        period: 'Apr 2011 — 2022',
        bullets: [
          'Led the migration from monolithic REST to a federated GraphQL gateway — cutting mobile data usage ~40% and improving frontend velocity.',
          'Migrated systems to AWS (EC2, auto-scaling, VPNs, security groups, load balancers, CloudFormation).',
          'Delivered full-stack React Native apps with Redux/Context and GraphQL for efficient mobile sync.',
          'Partnered with UX on HTML5 / CSS3 / React / Next.js experiences; owned architecture docs and automation details.',
        ],
        stack: stacks.imcyc,
      },
      {
        company: 'Nagarro Solutions',
        role: 'Full Stack Developer',
        period: 'Apr 2016 — Jan 2017',
        bullets: [
          'Built MEAN-stack features and GraphQL endpoints powering dynamic Angular experiences.',
          'Delivered responsive SPAs with Angular and React Native; REST APIs with Node.js / Express.',
          'Practiced TDD and clean code with Git-based collaboration and Chrome DevTools debugging.',
        ],
        stack: stacks.nagarro,
      },
      {
        company: 'Pengostores',
        role: 'Full Stack Developer',
        period: 'Jan 2009 — Mar 2011',
        bullets: [
          'Shipped Magento / Zend / PHP storefronts with AngularJS, HTML5, CSS3, and SASS.',
          'Built fault-tolerant WordPress sites on AWS and interactive UI with jQuery / Polymer components.',
          'Maintained high-availability LAMP stacks and SQL procedures for reporting and validation flows.',
        ],
        stack: stacks.pengostores,
      },
      {
        company: 'RentaOpciones',
        role: 'Full Stack Developer',
        period: 'Jul 2008 — Jan 2011',
        bullets: [
          'Delivered a full Joomla CMS for real estate with PHP, MySQL, and jQuery modules.',
          'Designed REST APIs with Node.js / Express; practiced TDD and BDD with Mocha / Chai.',
        ],
        stack: stacks.renta,
      },
      {
        company: 'ADA Networks',
        role: 'Full Stack Developer',
        period: 'Jan 2005 — Feb 2008',
        bullets: [
          'Built portal UIs with HTML, CSS, JavaScript, and jQuery; applied OOP and design patterns.',
          'Developed SQL Server procedures, triggers, and tables; collaborated onsite with clients on business flows.',
        ],
        stack: stacks.ada,
      },
      {
        company: 'Editorial Galas de México',
        role: 'Full Stack Developer',
        period: 'Jun 2003 — Dec 2004',
        bullets: [
          'Developed entertainment, e-commerce, and corporate sites with Zend, WordPress, PHP, and MySQL.',
          'Built frontend experiences and mini-games with HTML5, CSS3, and JavaScript.',
        ],
        stack: stacks.galas,
      },
    ],
    education: [
      {
        degree: 'Master’s in Visual Arts — Web Design & Development',
        school: 'Universidad Nacional Autónoma de México (UNAM)',
        year: '2008',
      },
      {
        degree: 'Bachelor’s in Graphic & Digital Communications',
        school: 'Universidad Autónoma Metropolitana (UAM)',
        year: '2004',
      },
      {
        degree: 'Master’s in System Engineering',
        school: 'Universidad Internacional de La Rioja (UNIR)',
        year: 'In progress',
      },
    ],
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Professional (C90 / R97 / S93)' },
      { name: 'French', level: 'Advanced (C85 / R72 / S87)' },
    ],
    courses: [
      'GraphQL with React — Stephen Grider',
      'Node.js, Express, MongoDB Bootcamp — Jonas Schmedtmann',
      'Modern React & React Native with Redux — Stephen Grider',
      'Angular — The Complete Guide — Maximilian Schwarzmüller',
      'JavaScript: Understanding the Weird Parts — Anthony Alicea',
      'Object Oriented Design in Java — Imtiaz Ahmad',
    ],
    ui: {
      eyebrow: 'Curriculum · Sr Full Stack',
      stackEyebrow: 'Stack',
      stackTitle: 'Technical expertise',
      experienceEyebrow: 'Experience',
      experienceTitle: 'Professional timeline',
      educationEyebrow: 'Education',
      educationTitle: 'Academic path',
      languagesEyebrow: 'Languages',
      languagesTitle: 'Communication',
      coursesEyebrow: 'Selected coursework',
      ctaEyebrow: 'Next step',
      ctaTitle:
        'Open to senior full-stack roles and architecture collaborations.',
      contactMe: 'Contact me',
      messageForm: 'Message form',
      mailSubject: 'Opportunity — Senior Full Stack',
    },
  },
  es: {
    title: 'Desarrollador Full Stack Senior',
    yearsLabel: 'años',
    summary:
      'Desarrollador Full Stack Senior con más de 22 años diseñando y entregando productos web y móviles escalables. Especializado en GraphQL (Apollo, NestJS), Node.js, React/Next.js y plataformas cloud (AWS, Azure, GCP). Trayectoria comprobada liderando migraciones de arquitectura, integraciones de IA/ML y mentoría de equipos de ingeniería en todo el ciclo de entrega.',
    highlights: [
      'APIs GraphQL a escala — Apollo, NestJS, federación, Dataloader',
      'Entrega full-stack de producto — React, Next.js, Angular, React Native',
      'Plataformas cloud e IA — AWS, Azure, GCP, RAG / LangChain.js',
    ],
    skills: [
      { label: 'Frontend', items: skillItems.frontend },
      { label: 'Backend', items: skillItems.backend },
      { label: 'Datos', items: skillItems.data },
      { label: 'Cloud y DevOps', items: skillItems.cloud },
      { label: 'IA y producto', items: skillItems.ai },
    ],
    experience: [
      {
        company: 'Globant Technologies',
        role: 'Desarrollador Full Stack Sr.',
        period: 'Abr 2022 — 2026',
        bullets: [
          'Arquitecté APIs GraphQL de alto rendimiento con Node.js (Apollo Server / NestJS) para orquestar datos de microservicios de machine learning.',
          'Resolví problemas N+1 con Dataloader y directivas personalizadas para autorización y caché a nivel de campo.',
          'Construí interfaces en React / Next.js / Angular con componentes impulsados por IA y GraphQL Subscriptions para el estado de modelos en tiempo real.',
          'Implementé sistemas RAG con LangChain.js y bases de datos vectoriales (Pinecone, Milvus) para mejorar la recuperación en chatbots.',
          'Desplegué servicios de IA, funciones serverless y contenedores en AWS, Azure y GCP; mentoré juniors mediante code reviews.',
        ],
        stack: stacks.globant,
      },
      {
        company: 'Instituto Mexicano del Cemento y del Concreto',
        role: 'Desarrollador Full Stack Sr. · Team Lead',
        period: 'Abr 2011 — 2022',
        bullets: [
          'Lideré la migración de REST monolítico a un gateway GraphQL federado — reduciendo ~40% el uso de datos móviles y acelerando al equipo frontend.',
          'Migré sistemas a AWS (EC2, auto-scaling, VPNs, security groups, balanceadores y CloudFormation).',
          'Entregué apps full-stack en React Native con Redux/Context y GraphQL para sincronización móvil eficiente.',
          'Colaboré con UX en experiencias HTML5 / CSS3 / React / Next.js; documenté arquitectura y automatización.',
        ],
        stack: stacks.imcyc,
      },
      {
        company: 'Nagarro Solutions',
        role: 'Desarrollador Full Stack',
        period: 'Abr 2016 — Ene 2017',
        bullets: [
          'Desarrollé features MEAN stack y endpoints GraphQL para experiencias dinámicas en Angular.',
          'Entregué SPAs responsivas con Angular y React Native; APIs REST con Node.js / Express.',
          'Apliqué TDD y clean code con colaboración en Git y debugging con Chrome DevTools.',
        ],
        stack: stacks.nagarro,
      },
      {
        company: 'Pengostores',
        role: 'Desarrollador Full Stack',
        period: 'Ene 2009 — Mar 2011',
        bullets: [
          'Entregué tiendas Magento / Zend / PHP con AngularJS, HTML5, CSS3 y SASS.',
          'Construí sitios WordPress tolerantes a fallos en AWS e interfaces interactivas con jQuery / Polymer.',
          'Mantuve stacks LAMP de alta disponibilidad y procedimientos SQL para reportes y validación.',
        ],
        stack: stacks.pengostores,
      },
      {
        company: 'RentaOpciones',
        role: 'Desarrollador Full Stack',
        period: 'Jul 2008 — Ene 2011',
        bullets: [
          'Entregué un CMS Joomla completo para inmobiliaria con módulos PHP, MySQL y jQuery.',
          'Diseñé APIs REST con Node.js / Express; practiqué TDD y BDD con Mocha / Chai.',
        ],
        stack: stacks.renta,
      },
      {
        company: 'ADA Networks',
        role: 'Desarrollador Full Stack',
        period: 'Ene 2005 — Feb 2008',
        bullets: [
          'Construí UIs de portal con HTML, CSS, JavaScript y jQuery; apliqué OOP y patrones de diseño.',
          'Desarrollé procedimientos, triggers y tablas en SQL Server; colaboré onsite con clientes en flujos de negocio.',
        ],
        stack: stacks.ada,
      },
      {
        company: 'Editorial Galas de México',
        role: 'Desarrollador Full Stack',
        period: 'Jun 2003 — Dic 2004',
        bullets: [
          'Desarrollé sitios de entretenimiento, e-commerce y corporativos con Zend, WordPress, PHP y MySQL.',
          'Construí experiencias frontend y minijuegos con HTML5, CSS3 y JavaScript.',
        ],
        stack: stacks.galas,
      },
    ],
    education: [
      {
        degree: 'Maestría en Artes Visuales — Diseño y Desarrollo Web',
        school: 'Universidad Nacional Autónoma de México (UNAM)',
        year: '2008',
      },
      {
        degree: 'Licenciatura en Comunicación Gráfica y Digital',
        school: 'Universidad Autónoma Metropolitana (UAM)',
        year: '2004',
      },
      {
        degree: 'Maestría en Ingeniería de Sistemas',
        school: 'Universidad Internacional de La Rioja (UNIR)',
        year: 'En curso',
      },
    ],
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Profesional (C90 / R97 / S93)' },
      { name: 'Francés', level: 'Avanzado (C85 / R72 / S87)' },
    ],
    courses: [
      'GraphQL with React — Stephen Grider',
      'Node.js, Express, MongoDB Bootcamp — Jonas Schmedtmann',
      'Modern React & React Native with Redux — Stephen Grider',
      'Angular — The Complete Guide — Maximilian Schwarzmüller',
      'JavaScript: Understanding the Weird Parts — Anthony Alicea',
      'Object Oriented Design in Java — Imtiaz Ahmad',
    ],
    ui: {
      eyebrow: 'Currículum · Full Stack Sr.',
      stackEyebrow: 'Stack',
      stackTitle: 'Experiencia técnica',
      experienceEyebrow: 'Experiencia',
      experienceTitle: 'Trayectoria profesional',
      educationEyebrow: 'Educación',
      educationTitle: 'Formación académica',
      languagesEyebrow: 'Idiomas',
      languagesTitle: 'Comunicación',
      coursesEyebrow: 'Cursos seleccionados',
      ctaEyebrow: 'Siguiente paso',
      ctaTitle:
        'Abierto a roles senior full-stack y colaboraciones de arquitectura.',
      contactMe: 'Contáctame',
      messageForm: 'Formulario',
      mailSubject: 'Oportunidad — Full Stack Senior',
    },
  },
}

export function getResume(lang: ResumeLang = 'es') {
  return {
    ...shared,
    ...resumes[lang],
    lang,
  }
}

export function resolveResumeLang(value?: string): ResumeLang {
  return value === 'en' ? 'en' : 'es'
}
