import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star } from "lucide-react"
import Reveal from "./reveal"

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.73.084-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.762-1.604-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 013-.404 11.5 11.5 0 013 .404c2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.242 2.873.118 3.176.77.84 1.234 1.912 1.234 3.222 0 4.61-2.804 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.014 2.896-.014 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const PROJECTS = [
  {
    featured: false,
    title: "PIMS — Pharmacy Information Management System",
    desc: "A comprehensive hospital management system built for real-world clinical workflows. Features patient registration, appointment scheduling, prescription management, role-based access (Doctor, Admin, Patient), and automated email notifications.",
    tags: ["Java", "Spring Boot", "MySQL", "React", "REST APIs", "Nodemailer"],
    github: "https://github.com/mdsamimrrza/PIMS",
    demo: "https://pims-sys.vercel.app/",
    image: "/pims.png",
  },
  {
    featured: false,
    title: "Knowledge Vault",
    desc: "A personal knowledge management platform designed to store, search, and retrieve articles and notes efficiently. Built to solve the problem of information overload for developers and researchers.",
    tags: ["React", "JavaScript", "Firebase", "REST APIs"],
    github: "https://github.com/mdsamimrrza/Knowledge-Vault",
    demo: "https://knowledge-vault.up.railway.app/",
    image: "/knowledge.png",
  },
  {
    featured: false,
    title: "Knowledge Base",
    desc: "A structured knowledge base application providing query-based search and intelligent article retrieval. Inspired by real-world work on AI query systems at Chiac ASI.",
    tags: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/mdsamimrrza/knowledgeBase",
    demo: "https://knowledgebase-wdt5.onrender.com/",
    image: "/query.png",
  },
  {
    featured: false,
    title: "Vishal Tailor — Business Web App",
    desc: "A premium digital identity project for a local boutique tailoring business. Includes a luxury business card generator with QR code integration, print-ready PDF export, and a brand-consistent design system.",
    tags: ["React", "HTML/CSS", "JavaScript", "html2canvas"],
    github: "https://github.com/mdsamimrrza/vishaltailor",
    demo: "https://newvishaltailor.vercel.app/",
    image: "/vishaltailor.png",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="container py-16 scroll-mt-2 space-y-10">

      {/* Heading */}
      <Reveal>
        <div className="text-center space-y-3">
          <p className="section-heading-kicker">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world applications built across healthcare, AI, knowledge management and local business.
          </p>
        </div>
      </Reveal>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 100}>
            <div className="flex flex-col group border border-border/50 bg-white/90 dark:bg-card/30 rounded-xl hover:bg-primary/5 hover:border-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 h-full shadow-sm dark:shadow-none overflow-hidden">
              <div className="relative h-48 w-full bg-muted border-b border-border/50">
                <img src={project.image} alt={project.title} className="object-cover object-top w-full h-full" />
              </div>
              <div className="p-5 flex flex-col gap-4 flex-grow justify-between">
                <div>
                  <h3 className="text-base font-bold leading-snug mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag}
                        className="px-2 py-0.5 rounded-full bg-primary/8 text-primary text-xs border border-primary/15 hover:bg-primary/15 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 pt-1">
                  <Button variant="outline" size="sm" asChild className="flex-1 gap-1.5">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="h-3.5 w-3.5" /> Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button size="sm" asChild className="flex-1 gap-1.5">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5" /> Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* GitHub CTA */}
      <Reveal delay={200}>
        <div className="text-center">
          <a href="https://github.com/mdsamimrrza" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
            <GithubIcon className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
            See all projects on GitHub
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </Reveal>

    </section>
  )
}
