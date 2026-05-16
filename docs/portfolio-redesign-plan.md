# Portfolio Redesign Tracking Document

## Project Overview

This file is the working source of truth for the redesign of `portfolio-website`.

The redesign will move the current generic single-page portfolio toward a multi-page portfolio with a stronger personal brand, a clearer AI/backend engineering story, and reusable content/data structures that are easier to maintain.

### Working Direction

- Product shape: multi-page portfolio
- Brand direction: bold editorial
- Primary positioning: AI/backend engineer
- Secondary positioning: full-stack builder with strong implementation range
- Audience: recruiters, hiring managers, technical collaborators
- Stack baseline: keep Next.js App Router and Tailwind-based setup

### Status Legend

- `[ ] todo`
- `[-] in progress`
- `[x] done`
- `[!] blocked`

## Goals And Non-Goals

### Goals

- Build a portfolio that presents Md Samim Reza as an AI/backend-first engineer with credible project proof.
- Replace placeholder content with real, sourced, consistent profile data.
- Introduce a multi-page architecture that supports case-study depth for projects.
- Define a visual system before component rewrites so the redesign feels intentional rather than template-driven.
- Move content toward reusable data-driven structures instead of hardcoded arrays inside UI components.
- Keep this document current throughout implementation so progress, blockers, and completion state are visible.

### Non-Goals

- Do not change frameworks unless a hard blocker appears during implementation.
- Do not over-index on certifications at the expense of experience and projects.
- Do not keep placeholder cards, outdated student framing, or visually safe default template styling.
- Do not assume LinkedIn scraping will provide complete content; user-provided details remain primary.

## Current Repo Audit

### Current Architecture

- Framework: Next.js App Router
- Styling: Tailwind CSS
- Theme support: light/dark toggle via `next-themes`
- Entry page: `app/page.jsx`
- Current sections are assembled from separate components:
  - `components/header.jsx`
  - `components/hero.jsx`
  - `components/projects.jsx`
  - `components/skills.jsx`
  - `components/experience.jsx`
  - `components/contact.jsx`
  - `components/footer.jsx`

### Current State Findings

- The current site is single-page and section-anchor based.
- `components/projects.jsx` uses placeholder projects that do not match the real GitHub work.
- `components/hero.jsx` positions the portfolio as a student/full-stack developer and is outdated.
- `components/experience.jsx` contains stale and partly incorrect experience/education content.
- `app/layout.jsx` metadata contains encoding issues and outdated messaging.
- `components/contact.jsx` contains a working contact form pattern, but its value should be reassessed against simpler CTA-based contact options.
- Content is currently embedded directly in components, making future updates harder.
- The current visual language is clean but generic and does not strongly differentiate the portfolio.

### Required Cleanup

- Replace placeholder project cards with real GitHub-backed entries.
- Replace outdated student copy with graduated-professional positioning and AI/backend-first messaging.
- Remove incorrect or outdated experience and education items.
- Add incoming-role messaging for Canada Life starting July 1, 2026 where appropriate.
- Fix encoding issues in metadata and content copy.
- Decide whether the contact form remains, is simplified, or is replaced by direct contact actions.

## Content Source Of Truth

### Canonical Content Inventory

| Area | Approved Content | Destination | Source | Notes |
| --- | --- | --- | --- | --- |
| Hero headline | `Md Samim Reza` with AI/backend engineer positioning | `/` | User-provided details | Final wording to emphasize intelligent systems, backend, and product execution |
| Hero subheadline | AI/backend-focused summary tied to intelligent query systems, backend systems, and production-oriented engineering | `/` | User-provided details | Should present a graduated professional, not a student |
| Short bio | Build around AI-driven systems, intelligent query processing, article retrieval, backend APIs, and collaboration | `/`, `/about` if created | User-provided details | Keep concise on homepage, fuller on secondary page if needed |
| Incoming role | `Software Engineer`, `Canada Life`, starting `July 1, 2026` | `/`, `/experience` | User-provided details | As of May 16, 2026 this is upcoming, so present as incoming/joining |
| Current role | `Superintelligent Evangelist`, `Chiac ASI`, `Feb 2026 - Present`, remote, Sheffield-linked | `/`, `/experience` | User-provided details | Highlight intelligent query processing and article retrieval work |
| Internship | `Student Intern`, `Japan Grab Technologies`, `Oct 2023`, Bangalore, hybrid | `/experience` | User-provided details | Keep concise unless more detail is later added |
| Education | `Siddaganga Institute Of Technology`, Computer Science and Engineering, graduated | `/experience` or `/about` | User-provided details | Present as completed education, not in-progress study |
| Project 1 | `PIMS` | `/projects`, `/projects/pims` | GitHub repo provided by user | Needs summary, stack, problem, contribution, outcomes |
| Project 2 | `Knowledge-Vault` | `/projects`, `/projects/knowledge-vault` | GitHub repo provided by user | Needs summary, stack, problem, contribution, outcomes |
| Project 3 | `knowledgeBase` | `/projects`, `/projects/knowledgebase` | GitHub repo provided by user | Needs summary, stack, problem, contribution, outcomes |
| Project 4 | `vishaltailor` | `/projects`, `/projects/vishaltailor` | GitHub repo provided by user | Needs summary, stack, problem, contribution, outcomes |
| Certification 1 | `Learn Git by Doing: A Step-by-Step Guide to Version Control` | `/experience` or `/about` | User-provided details | Keep compact |
| Certification 2 | `Docker - A Project-Based Approach to Learning` | `/experience` or `/about` | User-provided details | Keep compact |
| Certification 3 | `SpringBoot for Beginners` | `/experience` or `/about` | User-provided details | Normalize title formatting during implementation |
| Certification 4 | `8-week course on Advanced DSA Live Training Program` | `/experience` or `/about` | User-provided details | Keep compact |
| Contact email | `samimrrza1@gmail.com` | `/`, `/contact` if retained | Existing repo | Confirmed from current repo |
| Phone | `(+91) 9036980731` | `/contact` if retained | Existing repo | Keep only if user still wants it public |
| Location | Bangalore, Karnataka / remote-ready | `/`, `/contact` | Existing repo + user details | Copy should reconcile local base with remote work |
| LinkedIn | `https://www.linkedin.com/in/samimrrza/` | footer/contact/about | User-provided details | Canonical professional profile link |
| GitHub | `https://github.com/mdsamimrrza` | footer/contact/projects | User-provided details | Canonical code profile link |

### Source Links

- LinkedIn: <https://www.linkedin.com/in/samimrrza/>
- GitHub profile: <https://github.com/mdsamimrrza>
- PIMS: <https://github.com/mdsamimrrza/PIMS>
- Knowledge-Vault: <https://github.com/mdsamimrrza/Knowledge-Vault>
- knowledgeBase: <https://github.com/mdsamimrrza/knowledgeBase>
- vishaltailor: <https://github.com/mdsamimrrza/vishaltailor>

## Site Map And Page Responsibilities

### Planned Information Architecture

- `/`
  - high-impact hero
  - selected experience snapshot
  - selected projects teaser
  - skills/capabilities summary
  - CTA to project case studies and contact
- `/projects`
  - project index with filtering or grouped presentation if needed
  - real repository-backed summaries
- `/projects/[slug]`
  - case study pages for featured work
  - problem, solution, stack, role, implementation highlights, links
- `/experience`
  - timeline-style experience, education, and certifications
- `/about`
  - optional page only if content density or narrative needs justify it

### Page Responsibilities

| Page | Purpose | Must Include | Must Avoid |
| --- | --- | --- | --- |
| `/` | Establish identity and credibility fast | positioning, strongest work, strongest experience, clear CTAs | long dense resume dump |
| `/projects` | Show breadth of work | real projects, stacks, links, concise summaries | placeholder cards |
| `/projects/[slug]` | Show depth and technical thinking | project context, implementation details, role, outcomes | shallow one-paragraph descriptions |
| `/experience` | Present professional timeline cleanly | role history, incoming role, education, balanced certifications | student-first framing or unclear timeline |
| `/about` | Optional narrative page | fuller bio, approach, values | duplicate content without added value |

## Visual Direction And UI System

### Visual Intent

- Use bold editorial composition rather than a standard software-template layout.
- Favor strong typography, larger section rhythm, clearer contrast, and deliberate spacing.
- Keep the design professional enough for recruiters while making it recognizably personal.
- Present the portfolio as modern, technical, and confident without overusing "AI" cliches.

### UI System Requirements

- Define design tokens before broad component rewrites:
  - typography
  - color palette
  - spacing scale
  - surface treatments
  - border/radius rules
  - motion guidelines
- Rework navigation for multi-page routing on desktop and mobile.
- Establish page-specific layout patterns rather than cloning one section style everywhere.
- Prefer reusable content configuration objects over hardcoded arrays inside components.
- Review font choices; avoid default-feeling typography if the redesign introduces a stronger brand fit.

### Experience Principles

- Homepage should explain value in under one screen.
- Project browsing should feel structured and scannable.
- Case studies should reward deeper reading without feeling academic.
- Mobile layout must remain first-class, not a compressed desktop layout.
- Contact options should reduce friction and feel intentional.

## Implementation Phases

### Phase 1: Planning And Content Foundation

- `[x]` Audit current repo structure and current content quality
- `[x]` Choose direction: multi-page, bold editorial, AI/backend-first
- `[x]` Create living redesign tracking document
- `[x]` Normalize canonical content copy for hero, experience, education, certifications, and contact
- `[x]` Extract real project facts from the four GitHub repositories

Done when:
- this file exists and is complete enough to guide execution
- core positioning and structure decisions are documented
- content inventory exists with source links

### Phase 2: Information Architecture And Data Modeling

- `[x]` Define shared content/data structure for projects, experience, certifications, social links, skills, and contact
- `[x]` Decide whether to store portfolio content in plain JS objects, JSON, or colocated modules
- `[x]` Split homepage teaser content from full-page detailed content
- `[x]` Prepare route structure for `/projects`, `/projects/[slug]`, and `/experience`

Done when:
- implementer can build pages without guessing data shape
- content lives in a model suitable for reuse across pages

### Phase 3: Visual System

- `[x]` Replace current generic visual style with a documented editorial design direction
- `[x]` Define updated tokens for type, spacing, colors, surfaces, and motion
- `[x]` Rework header/navigation for multi-page behavior
- `[x]` Define homepage layout, project-card system, timeline system, and case-study layout

Done when:
- redesign direction is visible in tokens and shared UI patterns
- major page templates no longer depend on the current one-style-fits-all section look

### Phase 4: Page Implementation

- `[x]` Rebuild homepage around positioning, selected work, and strong CTAs
- `[x]` Build `/projects` project listing page
- `[x]` Build `/projects/[slug]` case-study route(s)
- `[x]` Build `/experience` page
- `[x]` Build `/about` only if content density warrants it

Done when:
- key routes exist and are navigable
- project pages contain real content
- no placeholder portfolio content remains

### Phase 5: Polish And Validation

- `[x]` Update metadata and remove encoding issues
- `[-]` Review responsive behavior across mobile and desktop
- `[x]` Reassess contact experience: form vs direct CTAs
- `[x]` Check consistency of tone, spacing, typography, and CTA hierarchy
- `[x]` Run build/lint validation and note any unresolved issues

Done when:
- site feels coherent and production-ready
- copy, metadata, and navigation are consistent
- design and content meet the definition of done

## Task Board

| Task | Status | Owner | Priority | Dependencies | Notes | Done when |
| --- | --- | --- | --- | --- | --- | --- |
| Create redesign tracking doc | `done` | Codex | High | repo audit | Initial source-of-truth file created in `docs/` | file exists and is usable |
| Replace outdated positioning copy | `done` | Samim/Codex | High | content normalization | Hero, footer, and metadata now use updated professional positioning | homepage and metadata reflect AI/backend story |
| Replace placeholder projects | `done` | Samim/Codex | High | project repo review | Homepage project cards now use real repo-backed content for PIMS, Knowledge Vault, NeuralQuery, and New Vishal Tailors | homepage and projects pages use real work |
| Fix experience and education data | `done` | Samim/Codex | High | content normalization | Experience section now reflects graduation and the incoming Canada Life role dated July 1, 2026 | timeline reflects approved data |
| Fix metadata encoding and messaging | `done` | Codex | Medium | copy refresh | Metadata now reads from the shared content source and no longer contains encoding artifacts | metadata reads cleanly |
| Define reusable content model | `done` | Codex | High | architecture setup | Shared content source now covers metadata, navigation, hero, projects, skills, experience, certifications, contact, and social links | pages read from shared content source |
| Build multi-page navigation | `done` | Codex | High | route setup | Header/footer navigation now supports real routes and homepage anchors appropriately | nav works across pages and mobile |
| Build project case study pages | `done` | Codex | High | content model, repo facts | `/projects/[slug]` is live for all featured projects with repo-backed sections for problem, architecture, implementation, and delivery | each slug page is complete |
| Define shared visual system | `done` | Codex | High | route/page templates | Global page-shell, section-frame, shared page-intro patterns, and upgraded section/page layouts are in place | pages feel intentionally related |
| Reassess contact form strategy | `done` | Samim/Codex | Medium | UX review | Kept the form, but promoted direct email and phone actions so contact is lower-friction | contact pattern is intentionally chosen |
| Final responsive/design validation | `in progress` | Codex | High | implementation complete | Build validation is complete; a true browser/manual responsive pass is still the only remaining non-code check | passes manual QA |

## Blockers And Open Questions

### Current Blockers

- `[x]` Detailed summaries, stacks, and outcomes for each featured GitHub project have been extracted and normalized into shared project content and case-study sections.
- `[x]` Contact pattern chosen: keep the form, but prioritize direct email and phone actions alongside it.
- `[ ]` Public phone visibility should be confirmed before final publication.

### Working Defaults Until Changed

- Keep certifications compact and secondary.
- Keep `/about` optional rather than mandatory.
- Treat user-provided profile details as canonical if external public profile pages are incomplete.
- Keep the existing stack unless implementation reveals a real blocker.

## Definition Of Done

The redesign is complete when all of the following are true:

- landing page clearly positions Samim as AI/backend-first
- homepage no longer uses generic or placeholder content
- projects page and case-study pages use real project content and links
- mobile and desktop navigation support the multi-page structure
- metadata and copy are updated and free of encoding issues
- experience, education, and certifications are accurate and consistently presented
- the final contact experience is intentional and low-friction
- visual system feels distinct, coherent, and not template-derived
- this file reflects actual completion state and major decisions made during the work

## Validation Checklist

- `[x]` No unresolved architecture decisions are left to the implementer
- `[x]` Every major redesign phase has explicit completion criteria
- `[x]` Every content area has a source and target destination
- `[x]` Landing page positions Samim as AI/backend-first
- `[x]` Project pages contain real content with no placeholders
- `[x]` Navigation reflects multi-page structure on mobile and desktop
- `[x]` Metadata and visible page copy are free of encoding issues
- `[-]` Final site has a clear done state for design, content, responsiveness, and contact flow

## Change Log

### 2026-05-16

- Created the initial redesign tracking document.
- Recorded current repo audit findings based on the existing Next.js portfolio.
- Locked working direction: multi-page, bold editorial, AI/backend engineer positioning.
- Added content inventory, route plan, task board, blockers, and definition of done.
- Added a shared portfolio content source in `lib/portfolio-content.js`.
- Rewired metadata, hero, experience, and footer content to the shared source.
- Updated the experience timeline to reflect graduation and the incoming Canada Life role on July 1, 2026.
- Replaced the Google `Inter` font import with installed `geist` font usage so `pnpm build` succeeds without external font fetches.
- Replaced placeholder project cards with repo-backed project content extracted from PIMS, Knowledge Vault, NeuralQuery, and New Vishal Tailors.
- Moved skills and contact content into the shared portfolio content source and removed more homepage hardcoding.
- Added shared route navigation data, refactored header/footer navigation away from pure anchor-only assumptions, and created the first dedicated page route at `/projects`.
- Added a dedicated `/experience` page and promoted the navigation Experience link from a homepage anchor to a real route.
- Added statically generated project detail pages at `/projects/[slug]` and linked the homepage/project index cards to internal case-study routes.
- Introduced a stronger visual system with global page-shell and section-frame styles, a reusable page-intro component, and upgraded hero/page templates for a more editorial multi-page presentation.
- Polished the header, footer, and experience timeline styling, and shifted the contact section to a hybrid direct-contact-plus-form layout.
- Enriched every project case-study page with repo-backed problem, architecture, implementation, and delivery sections instead of leaving them as summary-only detail pages.
- Added a dedicated certifications section to `/experience`, completed the homepage teaser/full-page split, and aligned the tracker status with the finished implementation state.
