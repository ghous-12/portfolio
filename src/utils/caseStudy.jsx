export const spiegelmaxCaseStudy = {
  id: "spiegelmax",
  eyebrow: "Featured case study · Shopify Plus + React",
  titleBefore: "From ~14 templates to ",
  titleAccent: "72 live in production.",
  lead: "How I independently engineered the React frontend of Spiegelmax's made-to-measure mirror and glass configurator — without a Figma handoff, through four UI generations, and across a continuously expanding product catalog.",
  tags: [
    "Sole frontend engineer",
    "Complex product logic",
    "Shopify integration",
    "Ongoing retainer",
  ],
  heroImage: {
    src: "/case-studies/spiegelmax/new.webp",
    alt: "Fourth UI redesign of the Spiegelmax configurator showing a live-preview stage and categorized configuration menu",
    overlayLabel: "Spiegelmax configurator · Fourth UI direction",
    overlayStatus: "Redesign in progress",
  },
  stats: [
    { value: "~14 → 72", label: "Growth in product templates" },
    { value: "72", label: "Templates live in production" },
    { value: "4", label: "Major UI stages" },
    { value: "4", label: "Supported languages" },
  ],
  toc: [
    { href: "#challenge", label: "The problem & my role" },
    { href: "#evolution", label: "Four-stage UI evolution" },
    { href: "#engineering", label: "Engineering deep dives" },
    { href: "#architecture", label: "System architecture" },
    { href: "#outcomes", label: "Outcomes & takeaways" },
  ],
  facts: [
    { label: "Client", value: "Spiegelmax · Germany" },
    { label: "Engagement", value: "SolCoders · Ongoing retainer" },
    { label: "Responsibility", value: "Sole Frontend Developer" },
    { label: "Primary stack", value: "React · JavaScript · Vite · Tailwind" },
  ],
  factNote:
    "This case study describes my frontend engineering contributions, not ownership of the existing backend.",
  challenge: {
    kicker: "01 / Context & ownership",
    title:
      "The challenge: turning complex physical products into an intuitive digital experience",
    paragraphs: [
      "Buying a custom mirror is not like selecting a standard product variant. Different products support different dimensions, glass thicknesses, shapes, lighting patterns, mounting systems, and accessories. A change to one choice can invalidate another. Prices vary with the product's size and selected add-ons. Even when a combination is logically selectable, the physical accessories still need to fit on the mirror.",
      "Spiegelmax needed a storefront experience that could translate those constraints into an understandable configuration journey — without forcing customers or the business to manage every possible combination as a conventional Shopify variant.",
      "The project started with approximately 13–14 product templates. As the product scope expanded to 72 live templates, the frontend needed to support more product families, more complex rules, more visual representations, and repeated changes to the overall purchasing experience.",
    ],
    constraintHighlight:
      "we had no Figma designs and no dedicated UI/UX designer, even at launch.",
    constraintAfter:
      " I worked directly with the client through frequent discussions to understand what each feature should do, propose interface approaches, implement them, and iterate on feedback. Much of the design process happened through conversation and working software rather than a formal handoff.",
    roleTitle: "My role: end-to-end ownership of the frontend",
    roleIntro:
      "I was the sole frontend developer on the configurator. I was responsible for translating evolving product requirements into React components and interactions, integrating backend responses into the configuration experience, managing state and pricing calculations, and making the experience usable across desktop and mobile.",
    responsibilitiesIntro: "My responsibilities included:",
    responsibilities: [
      "Designing and implementing the customer-facing interface in close collaboration with the client, without a pre-existing design system or Figma handoff.",
      "Building frontend modules for multiple mirror and glass product families, each with distinct dimension models, available features, and validation requirements.",
      "Integrating the existing backend API to retrieve product details, template assignments, starting prices, option catalogs, and constraints.",
      "Implementing client-side configuration state, dependent feature behavior, price aggregation, visual previews, guided validation, and cart payloads.",
      "Integrating configuration save/restore and Shopify Ajax Cart workflows.",
      "Iterating on UI architecture and UX as the project expanded and the client requested new workflows.",
      "Introducing multilingual frontend support later in the project lifecycle.",
    ],
    ownershipNoteBefore: "I did ",
    ownershipNoteStrong: "not",
    ownershipNoteAfter:
      " build the backend. Product names, assigned templates, and base prices originate from Shopify Admin and are made available to the frontend through the backend API. Add-on option data is predefined and supplied in the API response. The frontend interprets that data, applies its own selection, pricing, dimension, and validation logic, and renders the result.",
  },
  evolution: {
    kicker: "02 / Four generations of one product",
    title: "Designed in production.",
    titleLine2: "Refined through real conversations.",
    intro:
      "No Figma files, no dedicated designer, and multiple substantial changes to the user experience. These screenshots show how the frontend evolved over time.",
    chronologyStart: "INITIAL",
    chronologyEnd: "FOURTH DESIGN · IN PROGRESS",
    stages: [
      {
        id: "initial",
        index: "01 / 04",
        eyebrow: "The first working direction",
        title: "Initial UI",
        description:
          "A functional split-screen journey: large preview, visible dimensions, sequential selections, and a running total.",
        image: "/case-studies/spiegelmax/initial.webp",
        alt: "Initial UI screenshot",
      },
      {
        id: "redesign",
        index: "02 / 04",
        eyebrow: "A clearer hierarchy",
        title: "Redesign",
        description:
          "More deliberate inputs, card styling, accessory indicators, and progress navigation.",
        image: "/case-studies/spiegelmax/redesign.webp",
        alt: "Redesign screenshot",
      },
      {
        id: "production",
        index: "03 / 04",
        eyebrow: "The shipped guided flow",
        title: "Production UI",
        description:
          "A floating panel, German-first interface, support actions, and a more refined step-by-step experience.",
        image: "/case-studies/spiegelmax/production.webp",
        alt: "Production UI screenshot",
      },
      {
        id: "new",
        index: "04 / 04",
        eyebrow: "Fourth iteration · in progress",
        title: "New UI",
        description:
          "A section-based overview, immersive preview stage, live summaries, and a persistent review action.",
        image: "/case-studies/spiegelmax/new.webp",
        alt: "New UI screenshot",
      },
    ],
  },
  engineering: {
    kicker: "03 / The engineering",
    title: "Engineering the configurator",
    topics: [
      {
        title: "1. Supporting 72 different product templates",
        paragraphs: [
          "The application must resolve which configuration experience belongs to a Shopify product. The frontend reads the product handle from the URL and requests configuration data from the existing backend. The response includes a template identifier, product information, dimensions or limits, and available extras. The frontend maps that identifier to the appropriate React module.",
          "This makes it possible to serve distinct product families through one storefront experience, including bathroom LED mirrors, round and oval mirrors, framed and arched mirrors, sloping-roof mirrors, mirror cabinets, and various ESG/VSG and glass products.",
        ],
        highlightLabel: "The complication:",
        highlightText:
          " these families do not share a single set of inputs. A rectangular mirror can use free width and height; a round mirror may use predefined diameter choices; a sloping-roof product requires top and bottom widths plus left and right heights. Each path affects pricing, visuals, compatibility, and the data sent to the cart.",
        closing:
          "The solution is a combination of template-specific frontend modules and common infrastructure for configuration state, navigation, shared UI, persistence, and cart operations. It is not a fully generic schema-driven form engine: some template implementations have separate hooks and duplicated rules. That tradeoff supported rapid product expansion, but also made later consolidation of UI and validation especially important.",
      },
      {
        title: "2. Keeping dependent features consistent",
        paragraphs: [
          "A mirror can offer lighting modes, sensors, clocks, sockets, heating, shelves, and makeup mirrors. These aren't independent checkboxes: changing an upstream choice can invalidate or require new downstream selections.",
          "For example, in the bathroom-mirror workflow, changing a makeup-mirror option can require resetting its type, placement, distances, lighting choices, and separate-switch settings. Changing certain lighting modes can clear previously selected LED-strip or sensor options. Changing mirror dimensions can invalidate saved shelf lengths or accessory positions.",
          "I implemented these relationships in the frontend so the interface updates the available inputs, clears stale selections where necessary, adjusts their price contributions, and directs the customer toward a valid configuration. The goal wasn't merely to hide irrelevant UI; it was to keep the actual configuration data coherent as customers changed their minds.",
        ],
      },
      {
        title: "3. Recalculating prices as the configuration changes",
        paragraphs: [
          "The backend provides the Shopify-derived base price and predefined option catalogs with prices. The React frontend calculates the selected configuration's displayed total.",
          "For supported templates, pricing combines:",
        ],
        formula:
          "Base product price + dimension-based adjustments + selected add-on prices + applicable custom/shipping surcharges.",
        closingParagraphs: [
          "Some dimension calculations use progressive millimeter thresholds rather than simple area-based pricing; other geometries require different calculations. Template-specific hooks aggregate the relevant price components, round the total to currency precision, and synchronize what the customer sees in the interface and summary. Discount data may also be fetched and displayed where applicable.",
          "Crucially, an API call is not needed every time the customer changes an option: much of the price recalculation is done client-side after the initial configuration data is loaded. Shopify checkout price enforcement is a separate server-side concern and is outside the scope of my frontend ownership.",
        ],
      },
      {
        title: "4. Accounting for real-world physical constraints",
        paragraphs: [
          "Not every combination of accessories fits on every mirror. The frontend includes compatibility logic that considers dimensions and the space required by accessories such as makeup mirrors, controls, clocks, and sockets. Additional rules account for dimension limits and shipping constraints.",
          "This was a shift from treating validation as a collection of required fields to treating it as a product compatibility problem.",
          "For supported templates, the interface can surface specific issues, navigate customers to the relevant input, and propose adjustments. This makes the configurator more than a visual option picker: it helps customers avoid combinations the product cannot reasonably support.",
        ],
      },
      {
        title: "5. Representing real products visually",
        paragraphs: [
          "The hardest challenge early in development was making the configurator resemble the actual products Spiegelmax sells. A mirror's geometry, lighting pattern, sandblasted zones, and accessory placement are central to understanding what is being ordered; a generic rectangle would not communicate enough.",
          "The frontend grew a visual system with product-type-driven sandblasting catalogs, dedicated light-strip variants, overlays, and specialized previews for shapes such as sloping-roof mirrors. The audited codebase includes 155 dedicated light-strip/sandblasting preview variant components.",
          "This is also where my practical understanding grew most over time. Early product visualization demanded extensive experimentation and client feedback. As those patterns became familiar, implementing new representations became substantially faster. The stage remains a visual reference, not a guarantee of exact physical material appearance.",
        ],
      },
      {
        title: "6. Connecting React to an existing Shopify ecosystem",
        paragraphs: [
          "The configurator is a React application embedded into the Shopify storefront, rather than a conventional Shopify theme form. The storefront loads the React assets for configurator product views and mounts the application into a dedicated page container.",
          "From there, the frontend retrieves configuration data through the existing backend API. When customers complete their selections, the frontend prepares a Shopify-compatible cart payload, including dimensions and selected options as line-item properties, and uses the Shopify Ajax Cart API to add the item. Additional frontend flows support configuration persistence, restoring saved configurations, and editing an existing cart configuration.",
          "The frontend passes a calculated total as metadata, but the repository alone does not establish how that value is enforced as the actual checkout price. I would not claim authorship of Shopify's server-side pricing or backend GraphQL work.",
        ],
      },
      {
        title: "7. Adding localization to a moving system",
        paragraphs: [
          "Multilingual support arrived later, roughly four to five months before this case study was prepared; it was not part of the launch experience. The frontend now includes German, English, French, and Dutch locale resources.",
          "The challenge extended beyond translating static buttons. The application also needed to present configurable features, selected option labels, validation messages, and cart-related descriptions consistently across languages. This became another layer of complexity added to a product already growing in templates and UI features.",
        ],
      },
    ],
  },
  architecture: {
    kicker: "04 / Architecture & responsibility",
    title: "How the pieces connect",
    intro:
      "Shopify and the existing backend supply product context; the React frontend brings it together into an interactive customer experience.",
    nodes: [
      {
        variant: "outside",
        eyebrow: "External storefront",
        title: "Shopify product page",
        detail: "Product URL and configurator entry",
      },
      {
        variant: "outside",
        eyebrow: "Existing backend API",
        title: "Product configuration response",
        detail:
          "Shopify-derived product name, template and base price · predefined extras and limits",
      },
      {
        variant: "owned",
        eyebrow: "My frontend ownership",
        title: "React configurator",
        detail:
          "Template renderer · state management · custom hooks · product preview",
        pills: [
          "Feature dependencies",
          "Dimension rules",
          "Dynamic displayed pricing",
          "Guided validation",
        ],
      },
      {
        variant: "outside",
        eyebrow: "External commerce",
        title: "Shopify Ajax Cart API",
        detail: "Variant ID and selected properties · cart and checkout flow",
      },
    ],
    note: "The frontend integrates backend services; it does not implement the backend's Shopify Admin access or server-side checkout price enforcement.",
  },
  outcomes: {
    kicker: "05 / Results & lessons",
    title: "Outcomes and impact",
    paragraphs: [
      {
        before:
          "The strongest outcome is an observable delivery result, not an invented analytics number: ",
        strong:
          "the project expanded from approximately 14 templates to 72, and all 72 are live in production.",
        after:
          " It supports several kinds of product geometry, conditional add-ons, dynamic displayed pricing, visual previews, and configuration persistence within the existing Shopify experience.",
      },
      {
        text: "The frontend also underwent three major redesign stages beyond the initial interface, including an active fourth UI direction. The ongoing retainer means the work continues as a production product: improving the experience, accommodating new requirements, and maintaining existing functionality rather than stopping at launch.",
      },
      {
        before:
          "I can verify scope, deployment status, code features, and the UI evolution from the project itself. I am ",
        strong: "not",
        after:
          " claiming specific conversion-rate lifts, revenue increases, page-speed gains, or reduced support tickets without corresponding data.",
      },
    ],
    lessonsTitle: "What I learned",
    lessons: [
      {
        title: "1. Product engineering starts before the code.",
        text: " With no Figma handoff, asking the right questions, challenging assumptions, and showing working alternatives became part of daily development.",
      },
      {
        title: "2. Configuration state is a domain problem.",
        text: " When selections affect one another, pricing and validation cannot be afterthoughts. They need to respond coherently to every change.",
      },
      {
        title: "3. The visual stage is part of the product.",
        text: " Faithfully representing custom physical items required more care than building the forms themselves, especially before patterns and reusable variants existed.",
      },
      {
        title: "4. Shipping is not the end of the design process.",
        text: " Working on a retainer taught me how to evolve the interface of a live application while respecting the rules and integrations underneath.",
      },
      {
        title: "5. Scalability involves tradeoffs.",
        text: " Template-specific modules helped move quickly, but the growth from 14 to 72 templates also revealed duplication and opportunities for better shared architecture and testing.",
      },
    ],
    closingTitle: "Closing",
    closing: [
      "Spiegelmax is the most complete example of how I approach complex frontend engineering: start with an imperfect and evolving problem, collaborate closely with the people using and owning the product, translate business constraints into reliable UI behavior, and keep improving after production launch.",
    ],
    closingStrong:
      "The result is not just a configurable storefront interface. It is a long-running React product built to make highly customized physical products easier to explore, validate, price, and purchase.",
  },
  cta: {
    kicker: "Featured project / Spiegelmax",
    title: "Engineering beyond the interface.",
    text: "Product visualization, conditional business rules, responsive UX, and real commerce integrations — built and evolved in production.",
    smallprint:
      "Illustrative UI screenshots supplied by the developer · Business analytics not asserted",
  },
};
