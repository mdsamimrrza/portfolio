export const portfolioContent = {
  seo: {
    title: "Md Samim Reza | AI & Backend Engineer",
    description:
      "Portfolio of Md Samim Reza, an AI and backend engineer working on intelligent query systems, retrieval workflows, and modern web applications.",
    keywords: [
      "Md Samim Reza",
      "AI Engineer",
      "Backend Engineer",
      "Java Developer",
      "Spring Boot",
      "React",
      "Portfolio",
    ],
    openGraphTitle: "Md Samim Reza | AI & Backend Engineer",
    openGraphDescription:
      "Md Samim Reza builds intelligent systems, backend APIs, and modern application experiences.",
  },
  brand: {
    logoText: "REZADev",
    name: "Md Samim Reza",
    shortBio:
      "AI and backend engineer focused on intelligent systems, API design, and modern web application development.",
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
  ],
  hero: {
    eyebrow: "AI systems, backend engineering, and product execution",
    heading: "Md Samim Reza",
    roles: ["AI Engineer", "Backend Developer", "Java & Spring Builder", "Problem Solver"],
    description:
      "Graduated in Computer Science and Engineering from Siddaganga Institute of Technology. Currently contributing at Chiac ASI on intelligent query processing and article retrieval systems, and joining Canada Life on July 1, 2026.",
    primaryCta: {
      label: "View My Work",
      href: "#projects",
    },
    secondaryCta: {
      label: "Contact Me",
      href: "#contact",
    },
    resumeHref: "/Md_Samim_Reza.pdf",
  },
  experience: {
    summary:
      "Professional experience across AI-driven systems, backend development, and applied engineering work, supported by a completed computer science degree.",
    items: [
      {
        title: "Incoming Associate Software Engineer",
        company: "Canada Life",
        period: "Starting July 1, 2026",
        description:
          "Joining Canada Life as a software engineer. The portfolio should present this as an upcoming role rather than an active position.",
        type: "work",
        skills: ["Backend Engineering", "Software Development", "Production Systems"],
      },
      {
        title: "Superintelligent Evangelist",
        company: "Chiac ASI",
        period: "Feb 2026 - Present",
        description:
          "Working on AI-driven systems focused on intelligent query processing and article retrieval, including a query-based article search agent that improves result relevance. Also coordinating workflows across development stages and gaining hands-on backend and API experience.",
        type: "work",
        skills: ["Artificial Intelligence", "Query Processing", "Article Retrieval", "APIs", "Team Leadership"],
      },
      {
        title: "Student Intern",
        company: "Japan Grab Technologies",
        period: "Oct 2023",
        description:
          "Internship exposure to software industry workflows in a hybrid environment in Bangalore.",
        type: "work",
        skills: ["Software Industry", "Internship Experience"],
      },
      {
        title: "Bachelor of Engineering in Computer Science and Engineering",
        company: "Siddaganga Institute of Technology",
        period: "Graduated in 2026",
        description:
          "Completed engineering studies with a focus on computer science and engineering, supporting work across software development, backend systems, and web applications.",
        type: "education",
        skills: ["Computer Science", "Web Development", "Software Engineering"],
      },
    ],
  },
  certifications: {
    summary:
      "Selected certifications that support the portfolio's backend, tooling, and problem-solving story without dominating the page.",
    items: [
      {
        title: "Learn Git by Doing: A Step-by-Step Guide to Version Control",
        issuer: "Udemy",
        issued: "Nov 2025",
        credentialId: "UC-57d53899-faa6-4704-8619-683adba5e717",
        skills: ["Git", "GitHub"],
      },
      {
        title: "Docker - A Project-Based Approach to Learning",
        issuer: "Udemy",
        issued: "Nov 2025",
        credentialId: "UC-2827526f-f5d3-45e7-a0a9-51756e87064f",
        skills: ["Docker", "Containerization"],
      },
      {
        title: "SpringBoot for Beginners",
        issuer: "Amigoscode",
        issued: "Aug 2025",
        credentialId: null,
        skills: ["Spring Boot", "REST APIs"],
      },
      {
        title: "8-week course on Advanced DSA Live Training Program",
        issuer: "GeeksforGeeks",
        issued: "Nov 2024",
        credentialId: null,
        skills: ["Data Structures", "Algorithms"],
      },
    ],
  },
  projects: {
    summary:
      "Selected work across healthcare systems, knowledge platforms, AI retrieval, and multilingual business applications.",
    featuredSlugs: ["pims", "neuralquery"],
    items: [
      {
        slug: "pims",
        title: "PIMS",
        subtitle: "Patient Information Management System",
        description:
          "A production-grade full-stack platform for managing prescriptions, patients, pharmacy inventory, and role-based healthcare workflows.",
        details:
          "Built as a multi-role system for doctors, pharmacists, admins, and patients, with real-time inventory enforcement, audit logging, PDF generation, and email notifications.",
        tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT"],
        highlights: ["4 user roles", "Inventory audit trail", "Prescription lifecycle controls"],
        caseStudy: {
          problem:
            "Pharmacy workflows involve multiple actors, state transitions, and stock constraints. The system needed to digitize prescriptions end to end while keeping inventory accurate, users role-scoped, and operational actions auditable.",
          architecture:
            "React and Redux Toolkit on the frontend communicate with an Express REST API over JWT-authenticated requests. The backend uses Mongoose with MongoDB Atlas, separates controllers and services, and exposes dedicated routes for auth, prescriptions, inventory, alerts, reports, and health checks.",
          implementation: [
            "Applied RBAC across routes, APIs, and UI flows for doctors, pharmacists, admins, and patients.",
            "Added inventory enforcement so prescriptions cannot be marked filled when stock is insufficient.",
            "Tracked inventory mutations in an immutable audit trail and supported operational reporting flows.",
          ],
          operations: [
            "Frontend deployed on Vercel and backend deployed on Render.",
            "MongoDB Atlas used as the cloud database.",
            "Includes seed scripts for production-like baseline data across users, medicines, inventory, and prescriptions.",
          ],
        },
        github: "https://github.com/mdsamimrrza/PIMS",
        demo: "https://pims-sys.vercel.app",
      },
      {
        slug: "knowledge-vault",
        title: "Knowledge Vault",
        subtitle: "Personal wiki and knowledge base",
        description:
          "A full-stack markdown knowledge platform with internal wiki links, version history, search, favorites, and an admin control panel.",
        details:
          "Supports private and public articles, session-based authentication, email OTP password reset, admin moderation workflows, and article restore history.",
        tags: ["React", "TypeScript", "Express", "MongoDB", "Tailwind CSS", "TanStack Query"],
        highlights: ["Markdown editor", "Version history", "Wiki link graph"],
        caseStudy: {
          problem:
            "Personal knowledge tools often struggle to balance fast writing, internal linking, revision history, and access control. This project needed to behave like a wiki while still supporting private content and administrative governance.",
          architecture:
            "The app uses a React and TypeScript frontend with Wouter, TanStack Query, Tailwind CSS, and shadcn-style components. The backend is an Express and TypeScript server backed by MongoDB and Mongoose, with shared schema and wiki-link logic.",
          implementation: [
            "Built Markdown authoring with live preview, article visibility controls, tags, and auto-generated slugs.",
            "Implemented internal wiki-link resolution with protection against leaking private article existence.",
            "Added version history, restore flows, admin moderation actions, and OTP-protected high-risk operations.",
          ],
          operations: [
            "Supports SMTP-backed OTP flows for password reset and admin confirmations.",
            "Uses session-based authentication with connect-mongo session storage.",
            "Includes test, coverage, and type-check scripts for ongoing maintenance.",
          ],
        },
        github: "https://github.com/mdsamimrrza/Knowledge-Vault",
        demo: null,
      },
      {
        slug: "neuralquery",
        title: "NeuralQuery",
        subtitle: "AI knowledge base agent",
        description:
          "A secure semantic retrieval system with a FastAPI backend and React frontend that ranks and explains results using Google Gemini.",
        details:
          "Designed with prompt-injection defenses, private audit logging, deterministic ID privacy, and structured validation for production-oriented AI retrieval.",
        tags: ["FastAPI", "Python", "React", "TypeScript", "MongoDB", "Google Gemini"],
        highlights: ["Semantic search", "Security guardrails", "Knowledge Vault integration"],
        caseStudy: {
          problem:
            "Semantic retrieval systems can be powerful, but they introduce risks around prompt injection, data leakage, and exposing internal identifiers or logs. The goal here was to build an agentic search system with stronger security constraints by default.",
          architecture:
            "A FastAPI backend handles retrieval, validation, and guarded AI interactions, while a React and TypeScript frontend provides the user experience. MongoDB Atlas stores the knowledge base, and Google Gemini is used for ranking and explanation generation.",
          implementation: [
            "Added semantic agentic search that ranks results and explains matches in natural language.",
            "Introduced prompt-sanitization, strict response filtering, and admin-gated protected endpoints.",
            "Mapped internal MongoDB ObjectIDs to safer public-facing integer identifiers.",
          ],
          operations: [
            "Designed for Docker-based deployment and Render or Cloud Run style hosting.",
            "Uses Pydantic validation with explicit length limits on key request and response fields.",
            "Combines rate limiting, JWT, bcrypt, and private audit logging to keep the retrieval flow safer.",
          ],
        },
        github: "https://github.com/mdsamimrrza/knowledgeBase",
        demo: null,
      },
      {
        slug: "new-vishal-tailors",
        title: "New Vishal Tailors",
        subtitle: "Multilingual bespoke tailoring website",
        description:
          "A multilingual business website for a tailoring brand in Janakpur Dham, Nepal, built as a pnpm workspace with separate web and API apps.",
        details:
          "Includes a React frontend, Express API, inquiry handling flow, shared schema packages, and translation support for multiple languages.",
        tags: ["React", "TypeScript", "Express", "Tailwind CSS", "pnpm Workspace", "Wouter"],
        highlights: ["Multilingual UX", "Inquiry workflow", "Monorepo structure"],
        caseStudy: {
          problem:
            "A local tailoring business needed a modern web presence that could serve multiple audiences, support multilingual content, and handle customer inquiries cleanly without becoming a one-off static site.",
          architecture:
            "The project is organized as a pnpm workspace with a React and Vite frontend in `apps/web`, an Express API in `apps/api`, and shared typed packages for schemas and client generation.",
          implementation: [
            "Built multilingual content support with structured translation keys and language-aware components.",
            "Added an inquiry flow backed by an API endpoint for submitting bookings or contact requests.",
            "Used shared packages and code generation to keep the frontend and API contract aligned.",
          ],
          operations: [
            "Configured a Vercel-oriented frontend deployment path with a dedicated build command and output directory.",
            "Separated web and API runtime responsibilities while keeping the workspace coordinated through pnpm.",
            "Documented i18n and component structure clearly for maintainability.",
          ],
        },
        github: "https://github.com/mdsamimrrza/vishaltailor",
        demo: null,
      },
    ],
  },
  skills: {
    summary:
      "Core tools and technologies I use across AI features, backend services, full-stack product work, and deployment workflows.",
    categories: [
      {
        name: "AI & Search",
        icon: "brain",
        skills: ["Artificial Intelligence", "Query Processing", "Semantic Retrieval", "Google Gemini"],
      },
      {
        name: "Frontend",
        icon: "globe",
        skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Redux Toolkit", "Vite"],
      },
      {
        name: "Backend",
        icon: "server",
        skills: ["Java", "Spring Boot", "Node.js", "Express", "FastAPI", "REST APIs"],
      },
      {
        name: "Data & Storage",
        icon: "database",
        skills: ["MongoDB", "MySQL", "PostgreSQL", "Mongoose"],
      },
      {
        name: "Tooling",
        icon: "terminal",
        skills: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "pnpm"],
      },
      {
        name: "Product Delivery",
        icon: "briefcase",
        skills: ["Team Leadership", "API Integration", "Responsive Design", "Deployment Workflows"],
      },
    ],
  },
  contact: {
    summary:
      "Open to software engineering roles, technical collaborations, and conversations around AI systems, backend engineering, and product implementation.",
    formTitle: "Send Me a Message",
    formDescription: "Fill out the form below and I will get back to you as soon as possible.",
    email: "samimrrza1@gmail.com",
    phone: "(+91) 9036980731",
    phoneHref: "tel:+919036980731",
    location: "Bangalore, Karnataka, India",
  },
  socialLinks: {
    github: "https://github.com/mdsamimrrza",
    linkedin: "https://www.linkedin.com/in/samimrrza/",
    leetcode: "https://leetcode.com/samimreza",
    instagram: "https://instagram.com/samimreza.1",
  },
}

export function getProjectBySlug(slug) {
  return portfolioContent.projects.items.find((project) => project.slug === slug)
}

export function getAllProjectSlugs() {
  return portfolioContent.projects.items.map((project) => project.slug)
}
