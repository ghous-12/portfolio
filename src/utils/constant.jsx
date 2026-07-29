import { FaGithub, FaLinkedinIn } from "react-icons/fa";

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
    title: "Spiegelmax Mirror Configurator (Shopify Plus)",
    association: "SolCoders",
    featured: true,
    category: "E-commerce",
    shortDescription:
      "Custom Shopify product configurator for Spiegelmax enabling made-to-measure mirrors and glass products with live preview, dynamic pricing, and cart checkout.",
    description:
      "A React-based product configurator embedded into the Spiegelmax Shopify storefront (spiegelmax.de). Customers configure bathroom mirrors, wall mirrors, folding mirrors, mirror cabinets, glass doors, shower walls, ESG/VSG glass panels, and related products with dimensions, lighting, extras, and finishes. The app loads inside the Shopify theme via a CDN-injected React bundle, fetches product option data from a backend API by product handle, renders the matching configurator template, calculates prices in real time, persists shareable configurations, and adds configured line items to the Shopify cart with full property payloads for fulfillment.",
    role: "Frontend Developer",
    client: "Spiegelmax",
    startDate: "",
    endDate: "",
    status: "Production",
    coverImage: "",
    coverAlt: "",
    liveUrl: "https://spiegelmax.de/",
    githubUrl:
      "https://github.com/SolCoders/shopify-product-configurator-spiegelmax-react",
    technologies: [
      "React 18",
      "Vite",
      "JavaScript (JSX)",
      "Tailwind CSS",
      "React Router",
      "TanStack React Query",
      "Axios",
      "i18next / react-i18next",
      "Shopify Ajax Cart API (cart/add.js)",
      "Fabric.js",
      "Lucide React",
      "SweetAlert2",
      "Lottie / DotLottie",
      "PostCSS / Autoprefixer",
      "ESLint",
    ],
    objectives: [
      "Replace static Shopify product pages with interactive made-to-measure configuration flows",
      "Support dozens of distinct glass/mirror product families under one embedded app",
      "Provide accurate, option-driven pricing before add-to-cart",
      "Deliver a responsive desktop and mobile UX aligned with the storefront",
      "Enable configuration save/share and multilingual shopping (DE, EN, FR, NL)",
      "Ship as a theme-injectable asset bundle with predictable CDN hashing for Shopify",
    ],
    responsibilities: [
      "Built and maintained modular configurator UIs for 70+ product templates",
      "Implemented template resolution from Shopify product handles and backend metadata",
      "Developed option pickers, modals, section navigation, and validation for complex extras",
      "Implemented live price aggregation from base product and selectable extras",
      "Integrated Shopify cart/add.js with translated line-item properties for order processing",
      "Built save/load configuration flows with session tokens and conflict handling",
      "Added multi-language support and locale synchronization tooling for DE/EN/FR/NL",
      "Created responsive laptop/mobile layouts and onboarding/tutorial experiences",
      "Maintained Vite build pipeline that syncs hashed JS/CSS URLs into the Shopify theme loader (solcoders.js)",
    ],
    features: [
      "70+ product-specific configurator modules (bathroom/LED/round/oval/folding/TV/wall mirrors, sloping-roof mirrors, cabinets, glass doors, shower walls, ESG/VSG/float/painted glass, kitchen backsplash, Instagram mirror, etc.)",
      "Dynamic template rendering based on product handle and attached Shopify template",
      "Live mirror/glass preview including 150+ light-strip visual variants",
      "Configurable extras: dimensions, LED strips, light color, sensors/switches, heating, Bluetooth, sockets, glass shelves, makeup mirrors, sealing, edges, RAL colors, drill holes, frames, side panels, and more",
      "Real-time total price calculation with per-option surcharges",
      "Add to cart and express checkout to Shopify cart/checkout",
      "Save, restore, and share configurations via tokenized backend APIs",
      "Configuration caching with TanStack Query",
      "Multilingual UI (German, English, French, Dutch)",
      "Mobile and desktop configurator layouts with progress/section navigation",
      "In-app tutorial and guided UI cues",
      "Theme bootstrapper that strips conflicting theme assets and mounts the React app on ?view=configurator",
    ],
    challenges: [
      "Scaling many near-similar product templates without breaking option/price rules unique to each SKU family",
      "Embedding a full SPA inside Shopify without theme CSS/JS conflicts",
      "Mapping rich configuration state into Shopify line-item properties that remain readable and fulfillable",
      "Keeping pricing, validation, and preview in sync as users change interdependent options",
      "Supporting save/share restore flows across sessions, resets, and multi-template products",
      "Maintaining consistent translations across a large German-first locale surface",
      "Deploying hashed Vite assets reliably into Shopify theme CDN paths",
    ],
    solutions: [
      "Used a template registry + HOC (`TemplateRendering`) to resolve and mount the correct module from backend/template keys",
      "Isolated the React app via `solcoders.js`, which clears conflicting theme styles/scripts and injects versioned CDN bundles",
      "Centralized cart property mapping in `CartContext`, with i18n-aware labels for checkout/order attributes",
      "Managed configuration state through React context plus per-template data hooks that recompute prices from extras",
      "Implemented token-based save/get APIs with reset/update modes and conflict UI",
      "Standardized i18n with DE as source of truth and agent-assisted EN/FR/NL sync plus literal checks",
      "Custom Vite plugin/scripts to keep JS/CSS hashes aligned and auto-update Shopify asset URLs after build",
    ],
    outcomes: [
      "Enabled Spiegelmax customers to configure complex made-to-measure glass and mirror products directly on Shopify",
      "Unified many product lines into one maintainable React configurator platform",
      "Improved purchase readiness with live pricing, visual preview, and express checkout",
      "Reduced configuration loss via shareable saved configurations",
      "Expanded store reach with DE/EN/FR/NL localization",
      "Established a repeatable Shopify deployment pipeline for hashed React assets",
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
      "An AST-based, Git-aware npm CLI that bulk-adds, merges, and deduplicates imports across JavaScript and TypeScript codebases.",
    description:
      "Published an AST-based, Git-aware developer tool for JavaScript and TypeScript that safely bulk-adds imports across many files—merging named imports, avoiding duplicates, supporting dry-run by default, and optionally limiting updates to changed Git files.",
    role: "Author",
    client: "",
    startDate: "",
    endDate: "",
    status: "Published npm package",
    coverImage: "",
    coverAlt: "",
    liveUrl: "https://www.npmjs.com/package/import-pilot",
    githubUrl: "",
    technologies: [
      "JavaScript",
      "TypeScript",
      "Babel AST",
      "Git",
      "Node.js",
      "npm",
      "CLI",
    ],
    objectives: [
      "Create a practical CLI for adding the same import across many JS/TS/JSX/TSX files.",
      "Use AST-based analysis instead of brittle regex or search-and-replace.",
      "Make bulk edits safer with dry-run defaults, duplicate detection, and Git-aware targeting.",
    ],
    responsibilities: [
      "Designed, built, and published the import-pilot npm package.",
      "Implemented Babel AST parsing and import merge/dedupe logic for default, named, namespace, type, and side-effect imports.",
      "Added Git-aware --changed mode, plan-file batch apply, and dry-run reporting.",
    ],
    features: [
      "AST-based bulk import insertion and named-import merging",
      "Duplicate detection across existing import declarations",
      "Git-aware workflow (--changed)",
      "Dry-run by default; --write to apply",
      "Plan-file mode for multi-import, multi-file batches",
      "JavaScript, TypeScript, JSX, and TSX support",
      "Published open-source npm package",
    ],
    challenges: [
      "Blind text insertion creates duplicate or conflicting imports across large file sets.",
      "Different import kinds (default, named, type, side-effect) need different merge rules.",
      "Bulk edits are risky without preview and scoped targeting.",
    ],
    solutions: [
      "Parse files with Babel and update ImportDeclaration nodes instead of string patching.",
      "Merge compatible named imports from the same source; report conflicts instead of guessing.",
      "Default to dry-run reports, support --changed for Git diffs, and apply multi-task plans via JSON.",
    ],
    outcomes: [
      "Published as an open-source npm package (import-pilot).",
      "Enables safe, repeatable bulk import updates without manual edits or fragile regex scripts.",
      "Demonstrates independent ownership of developer tooling beyond day-to-day feature work.",
    ],
    media: [
      {
        src: "https://res.cloudinary.com/twpyvygz/image/upload/v1785342979/import-pilot_bbnocy.png",
      },
    ],
  },
  {
    id: "mini-rte",
    title: "mini-rte",
    association: "Personal",
    featured: true,
    category: "React Package",
    shortDescription:
      "A minimal, zero-runtime-dependency rich text editor for React with bold, italic, underline, links, and lists — outputting constrained HTML or small-scope markdown.",
    description:
      "mini-rte is a lightweight React rich text editor built on contentEditable, Selection, and Range APIs. It targets the small formatting set most apps actually need, ships with no runtime dependencies, and exposes a controlled component that serializes to either sanitized HTML or limited markdown. Styling is Tailwind-based with no bundled CSS, so consumers stay in control of look and feel.",
    role: "Author",
    client: "",
    startDate: "",
    endDate: "",
    status: "Published npm package",
    coverImage: "",
    coverAlt: "",
    liveUrl: "https://www.npmjs.com/package/mini-rte",
    githubUrl: "https://github.com/ghous-12/mini-rte",
    technologies: [
      "React 18/19",
      "TypeScript",
      "contentEditable / DOM Selection & Range APIs",
      "Tailwind CSS (utility classes, no shipped CSS)",
      "Vite",
      "tsup",
      "Vitest",
      "Testing Library",
    ],
    objectives: [
      "Ship a tiny RTE that covers everyday formatting without dragging in a heavy editor framework",
      "Keep zero runtime dependencies beyond React peer deps",
      "Support controlled value flow with markdown or HTML as the public format",
      "Keep output safe and constrained (sanitized tags/URLs)",
      "Make styling easy to override via Tailwind class props",
    ],
    responsibilities: [
      "Design and implement the MiniRTE controlled component and toolbar UX",
      "Build custom formatting commands on top of Selection/Range instead of document.execCommand",
      "Implement bidirectional markdown ↔ HTML serialization for the supported subset",
      "Sanitize HTML output to an allowlist of tags and safe link URLs",
      "Preserve cursor/selection across external value updates when possible",
      "Package as a dual ESM/CJS library with TypeScript types",
      "Add unit/integration tests and a Vite demo for markdown vs HTML side-by-side",
    ],
    features: [
      "Bold, italic, underline, links, ordered lists, unordered lists",
      "Controlled `value` / `onChange` API",
      '`format="markdown" | "html"` output modes',
      "Sanitized HTML allowlist: strong, em, u, a, ul, ol, li, br, p",
      "Underline preserved as `<u>` inside markdown (no native MD syntax)",
      "Placeholder, autoFocus, and className / toolbarClassName / editorClassName overrides",
      "Active toolbar state reflecting current selection",
      "Zero runtime dependencies",
    ],
    challenges: [
      "contentEditable behavior is inconsistent across browsers and hard to keep deterministic",
      "Preserving caret position when syncing external controlled values into the DOM",
      "Implementing list toggle/unwrap and inline format wrap/unwrap without execCommand",
      "Round-tripping a small markdown subset (including underline-as-HTML) without data loss",
      "Sanitizing pasted/input HTML while keeping editing feel natural",
      "Shipping Tailwind-class UI from a package that consumers must include in purge/content config",
    ],
    solutions: [
      "Custom `useEditor` hook owning Selection/Range logic for format, lists, and breaks",
      "Normalize to a small internal node AST for serialize/deserialize and HTML sanitization",
      "Allowlisted tags + href sanitization on HTML normalize/render",
      "Controlled sync that updates internal HTML only when the external value actually diverges, with caret restoration",
      "Document Tailwind `content` scanning of the published `dist` so utilities are not purged",
      "tsup dual build (ESM/CJS) with generated `.d.ts` for clean library consumption",
    ],
    outcomes: [
      "Published npm package (`mini-rte`) usable with a few lines of React code",
      "Clear markdown and HTML contracts with constrained, safer output",
      "Test coverage for serialization and editor interactions",
      "Lightweight alternative to TipTap/Slate/Quill for apps that only need basic formatting",
    ],
    media: [
      {
        src: "https://res.cloudinary.com/twpyvygz/image/upload/v1785342980/mini-rte_ajvqnv.png",
      },
    ],
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
      {
        type: "video",
        src: "https://res.cloudinary.com/twpyvygz/video/upload/v1785344754/Home_page_Render_verse_kgdwk9.mp4",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/twpyvygz/video/upload/v1785344753/Portforlio_page_Render_verse_nuhqyp.mp4",
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

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/syed-ghous-dev/",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/ghous-12/",
    icon: FaGithub,
  },
];

export const contactDetails = {
  email: "sghous081@gmail.com",
  phone: "+92 333 279 7982",
  location: "Karachi, Pakistan",
  cta: "Let's talk",
};

export const formConfig = {
  endpoint: "https://formspree.io/f/mlgylkvq",
  serviceOptions: services.map((service) => service.title),
  budgetRanges: [
    "Not sure yet",
    "Under $500",
    "$500 - $1,000",
    "$1,000 - $2,000",
    "$2,000+",
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
