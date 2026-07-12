export const siteConfig = {
  name: "Syed Ghous Mohiuddin",
  initials: "SGM",
  title: "Frontend Software Engineer",
  location: "Karachi, Pakistan",
  email: "sghous081@gmail.com",
  phone: "+92 333 279 7982",
  resumeUrl: "/resume/Syed-Ghous-Mohiuddin-Resume.docx",
  resumeLabel: "Download resume",
  availability: "",
  description:
    "Frontend focused Software Engineer building production-grade React applications, Shopify Plus integrations, and complex state-driven interfaces.",
  footer: {
    eyebrow: "Available for thoughtful frontend work",
    ctaTitle: "Have a React or Shopify build that needs sharp execution?",
    credit: "Built with React and care.",
  },
};

export const navigationLinks = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Projects", href: "/projects", route: "/projects" },
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export const profile = {
  eyebrow: "Frontend Software Engineer",
  intro:
    "I design and ship production-grade React experiences, Shopify Plus integrations, and complex UI systems with thoughtful state, validation, and performance choices.",
  summary:
    "Frontend focused Software Engineer with hands-on experience building production-grade React applications, Shopify Plus integrations, and complex state-driven UIs. Architected and shipped complex systems. Published two open-source npm packages, demonstrating independent ownership of tooling beyond day-to-day feature work.",
  strengths: [
    "Production React architecture",
    "Shopify Plus theme integrations",
    "Complex state-driven UI systems",
    "Schema-led validation and form flows",
    "Open-source npm tooling",
  ],
  focus: "React, Shopify Plus, tooling",
  heroTechnologies: ["React", "Shopify Plus", "Zod", "Redux Toolkit", "npm"],
};

export const experience = [
  {
    company: "SolCoders",
    role: "Associate Software Engineer",
    startDate: "Nov 2024",
    endDate: "Present",
    location: "Karachi, Pakistan",
    summary:
      "Architects and ships React applications, Shopify Plus integrations, and production-grade configurator systems.",
    achievements: [
      "Architected and built HRMS and CRM systems from scratch using React, Zod, Redux Toolkit, and Context API.",
      "Designed multi-step form flows with progressive validation and full data-integrity checks before submission.",
      "Pioneered a React-in-Shopify Plus Liquid theme integration, mounting a full React application on a product page in place of the default Add to Cart flow.",
      "Built and maintains a production-grade Mirror Configurator supporting 71 templates, real-time pricing, live shape previews, and localization.",
      "Built a rich add-on feature system with nested sub-options, conditional disabling, contextual inline validation, and cart editing.",
      "Built a custom React admin panel for saved customer configurations, GDPR-compliant opt-in capture, and customer follow-up tracking.",
      "Delivered Shopify theme customizations using Shopify Liquid and Shopify Polaris.",
    ],
  },
  {
    company: "SolCoders",
    role: "Software Engineer Intern",
    startDate: "Aug 2024",
    endDate: "Nov 2024",
    location: "Karachi, Pakistan",
    summary:
      "Developed HRMS functionality, reusable frontend components, API integrations, and role-based access flows.",
    achievements: [
      "Developed key HR Management System functionality using React.js, TypeScript, Zod, ShadCN, and React Hook Form.",
      "Built reusable components and implemented routing and navigation for seamless application flows.",
      "Integrated schema validation with Zod across forms and API interactions.",
      "Designed dynamic forms with React Hook Form to improve usability and efficiency.",
      "Integrated REST APIs on the frontend to support core application functionality.",
      "Implemented role-based permissions and single user-level access control for granular data segregation.",
      "Translated business requirements into scalable technical solutions following Agile practices while optimizing application performance.",
    ],
  },
];

export const education = [
  {
    degree: "BS Computer Science",
    institution: "Iqra University",
    location: "Karachi",
    startDate: "2024",
    endDate: "Present",
    details: [],
  },
  {
    degree: "Pre-Engineering (Intermediate)",
    institution: "Commecs College",
    location: "Karachi",
    startDate: "2020",
    endDate: "2022",
    details: [],
  },
];

export const certifications = [
  "MERN Stack Development Course",
  "Shopify Theme Development Course",
];

export const skillCategories = [
  {
    id: "languages-frameworks",
    title: "Languages & Frameworks",
    icon: "code",
    skills: ["JavaScript", "TypeScript", "React.js (JSX & TSX)", "Node.js"],
  },
  {
    id: "state-management",
    title: "State Management",
    icon: "state",
    skills: ["Redux Toolkit", "Context API"],
  },
  {
    id: "validation-forms",
    title: "Validation & Forms",
    icon: "forms",
    skills: ["Zod", "Multi-step form architecture", "React Hook Form"],
  },
  {
    id: "styling-ui",
    title: "Styling & UI",
    icon: "design",
    skills: ["Tailwind CSS", "Shopify Polaris", "Framer Motion", "ShadCN"],
  },
  {
    id: "shopify",
    title: "Shopify",
    icon: "shopify",
    skills: [
      "Shopify Liquid",
      "Shopify Plus Theme Development",
      "React-in-Shopify Integration",
    ],
  },
  {
    id: "tooling-practices",
    title: "Tooling & Practices",
    icon: "tools",
    skills: [
      "Git",
      "REST API Integration",
      "AST-based tooling",
      "npm package publishing",
      "Agile/Scrum",
      "Jira",
      "Trello",
      "Slack",
    ],
  },
];

export const projects = [
  {
    id: "mirror-configurator",
    title: "Mirror Configurator",
    association: "SolCoders",
    featured: true,
    category: "E-commerce",
    shortDescription:
      "A production Shopify Plus configurator with live pricing, shape previews, localization, add-ons, cart editing, and saved configurations.",
    description:
      "Production-grade configurator mounted inside a Shopify Plus Liquid theme, replacing the default cart flow. Supports 71 templates, millimeter-precision dimension inputs, real-time pricing, live dynamic shape previews, add-on features, cart editing, localization, and a custom admin panel with GDPR-compliant saved configurations.",
    role: "Associate Software Engineer",
    client: "",
    startDate: "",
    endDate: "",
    status: "Production",
    coverImage: "",
    coverAlt: "",
    liveUrl: "",
    githubUrl: "",
    technologies: [
      "React",
      "Shopify Plus",
      "Shopify Liquid",
      "Redux Toolkit",
      "Context API",
      "Zod",
      "Localization",
    ],
    objectives: [
      "Mount a full React application inside a Shopify Plus Liquid product page.",
      "Replace the default cart flow with a configurable product experience.",
      "Support real-time configuration, pricing, preview, and cart editing behavior.",
    ],
    responsibilities: [
      "Architected the React configurator flow and frontend state model.",
      "Built dimension inputs, add-on options, conditional validation, and live previews.",
      "Implemented cart-editing behavior that re-populates and updates existing Shopify cart items.",
      "Built the React admin panel for saved configurations and customer follow-up tracking.",
    ],
    features: [
      "71 supported templates",
      "Millimeter-precision dimension inputs",
      "Real-time pricing",
      "Live dynamic shape previews",
      "Nested add-on features with sub-options",
      "Contextual inline validation",
      "Cart editing",
      "Saved customer configurations",
      "GDPR-compliant opt-in capture",
    ],
    challenges: [
      "Replacing a standard Shopify product flow with a React application mounted inside Liquid.",
      "Keeping complex add-on and dimension choices valid before cart submission.",
      "Supporting localized configurator behavior across the customer journey.",
    ],
    solutions: [
      "Mounted a full React application on the Shopify Plus product page.",
      "Used schema-led validation and guarded multi-step logic to prevent incomplete submissions.",
      "Built cart state rehydration so saved choices could be edited and updated.",
    ],
    outcomes: [
      "Shipped a production-grade configurator now maintained as part of the Shopify Plus storefront.",
      "Enabled saved configurations, customer follow-up tracking, and cart-editing flows.",
    ],
    media: [
      { src: "https://picsum.photos/800/600" },
      { src: "https://picsum.photos/1200/800" },
      { src: "https://picsum.photos/1920/1080" },
      { src: "https://placehold.co/800x600?text=Project+Screens" },
      { src: "https://placehold.co/1200x800/0f172a/ffffff?text=Coming+Soon" },
      {
        type: "video",
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      },
    ],
  },
  {
    id: "import-pilot",
    title: "import-pilot",
    association: "Personal",
    featured: true,
    category: "Developer Tooling",
    shortDescription:
      "An AST-based, Git-aware import cleanup npm package for JavaScript and TypeScript codebases.",
    description:
      "Published an AST-based, Git-aware import cleanup tool for JavaScript and TypeScript codebases that detects and safely removes import statements as part of a developer tooling workflow.",
    role: "Author",
    client: "",
    startDate: "",
    endDate: "",
    status: "Published npm package",
    coverImage: "",
    coverAlt: "",
    liveUrl: "",
    githubUrl: "",
    technologies: ["JavaScript", "TypeScript", "AST", "Git", "npm"],
    objectives: [
      "Create a practical cleanup tool for JavaScript and TypeScript imports.",
      "Use AST-based analysis instead of brittle text-only transformations.",
      "Make the workflow safer by accounting for Git state.",
    ],
    responsibilities: [
      "Designed and published the npm package.",
      "Built the AST-based import analysis workflow.",
      "Added Git-aware behavior for safer project cleanup.",
    ],
    features: [
      "AST-based import cleanup",
      "Git-aware workflow",
      "JavaScript and TypeScript support",
      "Published npm package",
    ],
    challenges: [],
    solutions: [],
    outcomes: [
      "Published as an open-source npm package.",
      "Demonstrates independent ownership of tooling beyond day-to-day feature work.",
    ],
    media: [],
  },
  {
    id: "mini-rte",
    title: "mini-rte",
    association: "Personal",
    featured: true,
    category: "React Package",
    shortDescription:
      "A minimal, zero-dependency rich text editor for React with Selection/Range editing and Markdown serialization.",
    description:
      "Built and published a minimal, zero-dependency rich text editor for React, using the Selection/Range API and a hand-rolled HTML-to-Markdown serializer for lightweight integration.",
    role: "Author",
    client: "",
    startDate: "",
    endDate: "",
    status: "Published npm package",
    coverImage: "",
    coverAlt: "",
    liveUrl: "",
    githubUrl: "",
    technologies: [
      "React",
      "JavaScript",
      "Selection API",
      "Range API",
      "Markdown",
    ],
    objectives: [
      "Create a lightweight rich text editor for React without runtime dependencies.",
      "Provide editing behavior through native browser selection primitives.",
      "Serialize authored content into Markdown with a custom implementation.",
    ],
    responsibilities: [
      "Built the editor interaction model using the Selection and Range APIs.",
      "Implemented the HTML-to-Markdown serializer.",
      "Published the package for lightweight React integration.",
    ],
    features: [
      "Zero-dependency React editor",
      "Selection/Range API editing",
      "Hand-rolled HTML-to-Markdown serializer",
      "Published npm package",
    ],
    challenges: [],
    solutions: [],
    outcomes: [
      "Published as an open-source npm package.",
      "Provides a dependency-free rich text editing option for React projects.",
    ],
    media: [],
  },
  {
    id: "render-verse",
    title: "Render Verse",
    association: "Personal",
    featured: true,
    category: "Architecture & Real Estate",
    shortDescription:
      "A premium portfolio website showcasing architectural visualizations through immersive galleries, animations, and category-driven browsing.",
    description:
      "Designed and developed a luxury-inspired portfolio website for an architectural visualization studio. The platform showcases over 500 architectural renders across multiple categories with immersive animations, custom parallax effects, and a refined browsing experience that emphasizes the studio's premium brand identity.",
    role: "Frontend Developer",
    client: "Render Verse",
    startDate: "",
    endDate: "",
    status: "Production",
    coverImage: "",
    coverAlt: "Render Verse portfolio homepage",
    liveUrl: "https://therenderverse.com",
    githubUrl: "",
    technologies: [
      "React",
      "ReactBits",
      "JavaScript",
      "CSS3",
      "HTML5",
      "Formspree",
      "Animate on Scroll (AOS)",
    ],
    objectives: [
      "Create a luxury-focused digital portfolio that reflects the client's premium brand.",
      "Present over 500 architectural renders in a visually engaging and intuitive gallery.",
      "Deliver smooth animations and interactions to elevate the browsing experience.",
    ],
    responsibilities: [
      "Designed and developed the complete frontend application in React.",
      "Built a categorized gallery system for browsing architectural renders.",
      "Implemented custom parallax effects and scroll-triggered animations.",
      "Developed responsive layouts optimized for desktop, tablet, and mobile devices.",
      "Integrated a contact form using Formspree for lead generation.",
    ],
    features: [
      "500+ architectural render showcase",
      "Category-based gallery navigation",
      "Interior, Exterior, Commercial, 3D Floor Plan, Virtual Tour, and Walk Through Animation categories",
      "Luxury-inspired UI and visual design",
      "Custom parallax scrolling effects",
      "Animate-on-scroll transitions",
      "Fully responsive design",
      "Integrated contact form",
    ],
    challenges: [
      "Designing a portfolio experience that felt premium while remaining intuitive to navigate.",
      "Presenting a large collection of architectural renders without overwhelming users.",
      "Creating smooth, visually engaging interactions that complemented the brand identity.",
    ],
    solutions: [
      "Developed a clean category-based gallery that allows users to quickly browse different visualization types.",
      "Implemented custom parallax effects and scroll-triggered animations to create a modern, immersive experience.",
      "Focused on a minimal, luxury-inspired interface that highlights the client's work rather than distracting from it.",
    ],
    outcomes: [
      "Delivered a production-ready portfolio website aligned with the client's premium branding.",
      "Successfully showcased more than 500 architectural visualization projects within an organized browsing experience.",
      "Created a distinctive online presence that effectively highlights the studio's capabilities and services.",
    ],
    media: [
      { src: "https://picsum.photos/1200/800?random=1" },
      { src: "https://picsum.photos/1200/800?random=2" },
      { src: "https://picsum.photos/1200/800?random=3" },
      {
        type: "video",
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      },
    ],
  },
];

export const services = [
  {
    title: "React Frontend Development",
    description:
      "Production React interfaces with clean component architecture, routing, state management, and accessible interaction patterns.",
    deliverables: [
      "Reusable component systems",
      "Application routing and navigation",
      "State architecture with Redux Toolkit or Context API",
      "REST API integration",
    ],
    technologies: ["React", "Redux Toolkit", "Context API", "REST APIs"],
  },
  {
    title: "Shopify Plus Integrations",
    description:
      "Custom Shopify theme work, Liquid customization, and React applications mounted into Shopify Plus product experiences.",
    deliverables: [
      "Shopify Liquid customization",
      "React-in-Shopify product flows",
      "Shopify Polaris interfaces",
      "Cart editing and storefront interaction flows",
    ],
    technologies: ["Shopify Plus", "Shopify Liquid", "React", "Polaris"],
  },
  {
    title: "Custom Product Configurators",
    description:
      "State-driven configurators with live previews, pricing logic, add-on systems, validation, and customer configuration storage.",
    deliverables: [
      "Live shape and option previews",
      "Real-time pricing interfaces",
      "Nested add-on option systems",
      "Saved configuration admin views",
    ],
    technologies: ["React", "Zod", "Redux Toolkit", "Shopify"],
  },
  {
    title: "Form & Validation Architecture",
    description:
      "Multi-step form flows with schema validation, guarded progression, role-aware behavior, and clear user feedback.",
    deliverables: [
      "Progressive validation logic",
      "Schema-backed form flows",
      "Role-based permissions interfaces",
      "Accessible validation messages",
    ],
    technologies: ["Zod", "React Hook Form", "React", "TypeScript"],
  },
];

export const socialLinks = [];

export const contactDetails = {
  email: "sghous081@gmail.com",
  phone: "+92 333 279 7982",
  location: "Karachi, Pakistan",
  cta: "Let's talk",
};

export const formConfig = {
  endpoint: "https://formspree.io/f/REPLACE_WITH_FORM_ID",
  serviceOptions: services.map((service) => service.title),
  budgetRanges: [
    "Not sure yet",
    "Under $1,000",
    "$1,000 - $3,000",
    "$3,000 - $7,500",
    "$7,500+",
  ],
};

export const seo = {
  home: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
  },
  projects: {
    title: `Projects | ${siteConfig.name}`,
    description:
      "Selected React, Shopify Plus, and developer tooling projects by Syed Ghous Mohiuddin.",
  },
  notFound: {
    title: `Page not found | ${siteConfig.name}`,
    description: "The requested portfolio page could not be found.",
  },
};
