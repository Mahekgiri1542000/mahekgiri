// data.js — all portfolio content. Edit freely to make it yours.
const BASE = import.meta.env.BASE_URL; // handles subpath deploys (GitHub Pages etc.)

const PORTFOLIO = {
  identity: {
    name: "Mahekgiri Gosai",
    initials: "MG",
    role: "WordPress Developer",
    role2: "React Front-End Developer",
    years: "5+ Years Experience",
    intro:
      "I build high-performance WordPress platforms, custom plugins and SaaS-like systems for businesses across the US and international markets. From legal-tech course platforms to automated data-sync engines and high-conversion booking sites, I engineer scalable solutions that drive real business outcomes.",
    location: "Available worldwide · Remote",
    email: "Mahekgiri1542000@gmail.com",
    whatsapp: "8780902689",
    whatsappIntl: "918780902689",
    // ── EMAIL SETUP ──────────────────────────────────────────────
    // Connected to Formspree form mvzyydek — submissions arrive in your inbox.
    formspree: "https://formspree.io/f/mvzyydek",
    linkedin: "https://linkedin.com/in/mahekgiri",
    github: "https://github.com/mahekgiri",
    resume: BASE + "assets/Mahekgiri-Resume.pdf",
    photo: BASE + "assets/mahekgiri.jpg",
  },

  stats: [
    { value: 120, suffix: "+", label: "Projects delivered" },
    { value: 60, suffix: "+", label: "Happy clients" },
    { value: 5, suffix: "+", label: "Years experience" },
    { value: 40, suffix: "+", label: "WordPress plugins built" },
  ],

  about: {
    summary: [
      "I'm a WordPress engineer with 5+ years building high-impact web platforms and custom-engineered solutions for businesses across the US and international markets — service businesses, SaaS platforms, eCommerce and B2B.",
      "My work goes beyond websites: custom plugins in PHP (OOP), API integrations (Klaviyo, BigQuery, booking systems), membership & LMS systems, and automation that runs with zero manual maintenance. Every build is engineered for performance, scalability and measurable business outcomes.",
    ],
    highlights: [
      { k: "Code-first", t: "Clean, maintainable code", d: "Reusable blocks, modular themes & version-controlled workflows." },
      { k: "Performance", t: "90+ Lighthouse scores", d: "Optimised assets, caching & Core Web Vitals tuning." },
      { k: "Conversion", t: "Built to convert", d: "Structure & UX engineered for leads and sales." },
    ],
    industries: ["Legal-Tech & SaaS", "Automation & Data", "B2B & Manufacturing", "Booking & Transport", "Local Services", "eCommerce"],
  },

  services: [
    { icon: "wordpress", title: "Custom WordPress Development", d: "Bespoke, hand-coded WordPress sites built for speed, security and scale — not bloated page builders." },
    { icon: "layers", title: "Theme Development", d: "Custom & child themes with reusable Gutenberg blocks and a clean, maintainable structure." },
    { icon: "plug", title: "Plugin Development", d: "Tailored plugins and custom functionality that extend WordPress exactly to your needs." },
    { icon: "cart", title: "WooCommerce Development", d: "High-converting stores: custom checkout, subscriptions, payments and product logic." },
    { icon: "blocks", title: "ACF / Flexible Content", d: "Powerful, editor-friendly page builders powered by Advanced Custom Fields." },
    { icon: "rocket", title: "Landing Pages", d: "Fast, beautiful, conversion-focused landing pages that load in under a second." },
    { icon: "api", title: "API Integrations", d: "REST & third-party integrations — CRMs, payments, headless front-ends and more." },
    { icon: "gauge", title: "Website Optimization", d: "Core Web Vitals, caching, image & database tuning for 90+ performance scores." },
    { icon: "wrench", title: "Maintenance & Bug Fixing", d: "Ongoing care, security hardening, backups and rapid bug resolution." },
  ],

  projects: [
    {
      title: "Jointly", client: "jointly.ca", url: "https://jointly.ca/", tag: "Legal-Tech SaaS", metric: "9 provinces",
      d: "A fully custom WordPress LMS plugin guiding users through province-specific prenuptial & cohabitation agreements, with gated membership access.",
      tech: ["WordPress", "PHP (OOP)", "MemberPress", "AJAX", "Google OAuth"],
      hue: "linear-gradient(135deg, #1e3a8a, #6d28d9)",
      study: {
        context: "A Canadian legal-tech platform required a custom-built course system to guide users through prenuptial and cohabitation agreements across multiple provinces.",
        challenge: ["No existing LMS plugin could support province-specific logic", "Required gated access, structured learning flow, and scalable architecture", "Needed seamless integration with the membership system"],
        solution: "Developed a fully custom WordPress plugin using PHP (OOP), integrated with MemberPress for access control.",
        points: ["Custom course/lesson system with admin controls", "Province-based filtering and onboarding logic", "AJAX-powered dynamic course interface", "Membership-based gated access with tiered pricing", "Google OAuth login integration"],
        outcome: ["Eliminated dependency on third-party LMS tools", "Delivered a lightweight, scalable system", "Enabled structured onboarding across 9 provinces", "Built a foundation for long-term SaaS scalability"],
      },
    },
    {
      title: "Wheelchair Getaways", client: "wheelchairgetaways.com", url: "https://wheelchairgetaways.com/", tag: "Automation · API", metric: "200+ locations",
      d: "An automated WordPress plugin syncing 200+ accessible-van rental locations in real time across Klaviyo and Google BigQuery with zero manual work.",
      tech: ["WordPress", "PHP", "Klaviyo API", "BigQuery", "WP Cron"],
      hue: "linear-gradient(135deg, #0f766e, #2563eb)",
      study: {
        context: "A US-based accessible van rental network managing 200+ locations required a real-time, automated system to sync operational data.",
        challenge: ["Manual updates caused inconsistencies", "Data existed across Klaviyo and BigQuery", "Required automated reconciliation and frontend accuracy"],
        solution: "Engineered a custom WordPress plugin integrating Klaviyo API (location data), Google BigQuery (operational data) and WP Cron (automated scheduled sync).",
        points: ["Data comparison and reconciliation engine", "Custom database table for structured storage", "Automated sync with zero manual intervention", "Dynamic frontend location directory"],
        outcome: ["Fully automated data synchronization", "100% data accuracy across systems", "Zero manual maintenance required", "Scalable system supporting future expansion"],
      },
    },
    {
      title: "MagnumStone", client: "magnumstone.com", url: "https://magnumstone.com/", tag: "B2B Platform", metric: "3D product viz",
      d: "A structured B2B product platform for a global retaining-wall manufacturer — CAD docs, a filterable case-study library and interactive 3D models.",
      tech: ["WordPress", "ACF", "Custom Post Types", "3D Embeds"],
      hue: "linear-gradient(135deg, #4338ca, #0ea5e9)",
      study: {
        context: "A global retaining wall manufacturer required a technical product platform to support engineers, contractors, and partners.",
        challenge: ["Complex product specifications and documentation", "Need for technical resources and case studies", "Requirement for interactive product visualization"],
        solution: "Built a structured WordPress system with custom post types, document integration and interactive 3D embedding.",
        points: ["Custom post types for products and case studies", "CAD and engineering document integration", "Interactive 3D model embedding", "Filterable case study library"],
        outcome: ["Reduced sales friction through self-serve technical data", "Improved buyer confidence with real-world case studies", "Enhanced product understanding via 3D visualization"],
      },
    },
    {
      title: "Gotham Ride", client: "gothamride.com", url: "https://gothamride.com/", tag: "Booking · SEO", metric: "90+ PageSpeed",
      d: "A conversion-focused booking platform for a NYC luxury chauffeur service — SEO landing pages per airport and a streamlined, mobile-first booking flow.",
      tech: ["WordPress", "Booking System", "SEO", "Performance"],
      hue: "linear-gradient(135deg, #7c3aed, #db2777)",
      study: {
        context: "A luxury transport company required a conversion-focused booking platform for airport transfers and city rides.",
        challenge: ["High drop-off rates in booking flow", "Need for SEO-driven landing pages for airports", "Mobile-first user behavior"],
        solution: "Built optimized landing pages for multiple airports, integrated a booking system with clear CTA hierarchy and implemented 90+ performance optimizations.",
        points: ["Optimized landing pages for multiple airports", "Booking system with clear CTA hierarchy", "Performance optimizations (90+ scores)", "Mobile-first responsive design"],
        outcome: ["Reduced bounce rate", "Improved booking conversions", "Scalable structure for expanding service areas"],
      },
    },
    {
      title: "Estevez Electric", client: "estevezelectricllc.com", url: "https://estevezelectricllc.com/", tag: "Local SEO", metric: "10+ SEO pages",
      d: "A local-SEO lead-generation system for an electrical services provider — 10+ optimized service pages, schema markup and click-to-call CTAs.",
      tech: ["WordPress", "Schema Markup", "Local SEO", "Mobile-first"],
      hue: "linear-gradient(135deg, #be123c, #7c3aed)",
      study: {
        context: "Local electrical service providers required strong local search visibility and lead generation systems.",
        challenge: ["Needed visibility across many local service queries", "Required strong on-page local SEO foundations", "Mobile-first users expecting click-to-call"],
        solution: "Delivered a mobile-first, SEO-driven structure focused on local search visibility and inbound calls.",
        points: ["10+ SEO-focused service pages", "Schema markup and local SEO optimization", "Mobile-first design with click-to-call CTA"],
        outcome: ["Increased local search visibility", "Improved inbound call conversions", "Strong performance across all pages"],
      },
    },
  ],

  skills: [
    { name: "WordPress", level: 96 },
    { name: "PHP", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "React", level: 85 },
    { name: "WooCommerce", level: 92 },
    { name: "ACF", level: 94 },
    { name: "HTML & CSS", level: 95 },
    { name: "Git", level: 88 },
  ],
  tools: ["WordPress", "PHP", "JavaScript", "React", "HTML5", "CSS3", "WooCommerce", "ACF Pro", "Git", "Elementor", "Gutenberg", "REST API"],

  process: [
    { n: "01", title: "Discovery", d: "We align on goals, audience and scope — I audit references and map requirements." },
    { n: "02", title: "Planning", d: "Architecture, sitemap, tech stack and a clear timeline with milestones." },
    { n: "03", title: "Development", d: "Clean, modular code built in stages with regular previews and feedback." },
    { n: "04", title: "QA Testing", d: "Cross-browser, responsive, performance & security testing before launch." },
    { n: "05", title: "Launch", d: "Smooth deployment, DNS, SSL, analytics and a go-live checklist." },
    { n: "06", title: "Support", d: "Ongoing maintenance, updates and improvements to keep you growing." },
  ],

  testimonials: [
    { quote: "Mahekgiri rebuilt our WooCommerce store from scratch. It's faster, cleaner and our sales jumped within weeks. Easily the best developer we've worked with.", name: "Sarah Lindqvist", role: "Founder, Lumen", company: "Lumen Commerce", rating: 5 },
    { quote: "He took our messy ACF setup and turned it into a flexible system our whole team can edit. Communication and code quality were exceptional.", name: "Daniel Okoro", role: "Creative Director", company: "Northwind Agency", rating: 5 },
    { quote: "A rare developer who understands both clean code and business goals. Delivered ahead of schedule and the Lighthouse scores speak for themselves.", name: "Priya Sharma", role: "Product Lead", company: "Vault Finance", rating: 5 },
    { quote: "Reliable, communicative and genuinely talented. Our headless React + WordPress build has been rock solid since launch.", name: "Marco Bianchi", role: "CTO", company: "EduFlow", rating: 5 },
  ],

  experience: [
    { period: "2023 — Present", role: "Senior WordPress & React Developer", org: "Freelance / Contract", d: "Leading custom WordPress, headless and React builds for agencies and direct clients worldwide.", points: ["Shipped 50+ production sites", "Headless WordPress + React front-ends", "Mentored junior developers"] },
    { period: "2021 — 2023", role: "WordPress Developer", org: "Pixel Forge Studio", d: "Built custom themes, plugins and WooCommerce stores for agency clients across industries.", points: ["Built reusable ACF block library", "Average 95+ Lighthouse on launch", "Led performance optimisation"] },
    { period: "2019 — 2021", role: "Front-End Developer", org: "Webcrafters Inc.", d: "Developed responsive, pixel-perfect marketing sites and converted designs into WordPress.", points: ["Figma → WordPress conversions", "Introduced Git-based workflow", "Cross-browser & accessibility focus"] },
  ],

  faq: [
    { q: "What's your typical project timeline?", a: "A landing page takes 1–2 weeks, a full custom WordPress site 3–6 weeks, and larger WooCommerce or headless builds 6–10 weeks. I share a detailed timeline with milestones before we start." },
    { q: "Do you work with agencies as a white-label developer?", a: "Yes — a large part of my work is white-label development for design agencies. I integrate with your team, follow your processes and stay invisible to your clients." },
    { q: "Will my website be fast and SEO-friendly?", a: "Always. I build for 90+ Lighthouse scores with optimised assets, clean semantic markup, schema and Core Web Vitals tuning baked in from day one." },
    { q: "Do you offer ongoing maintenance?", a: "Yes. I offer monthly care plans covering updates, backups, security, uptime monitoring and a set number of support hours each month." },
    { q: "Can you take over an existing WordPress site?", a: "Absolutely. I regularly audit, fix, optimise and extend existing sites — including untangling messy page-builder or legacy code." },
    { q: "How do payments and contracts work?", a: "I work on a clear scope with a 40% deposit and milestone-based payments. Everything is covered by a simple contract so you always know what to expect." },
  ],
};

export default PORTFOLIO;
