import { Brain, Code2, Database, GitBranch, Server, ShieldCheck } from "lucide-react"
import Reveal from "./reveal"

const CAPABILITIES = [
  {
    name: "Backend Engineering",
    Icon: Server,
    summary: "REST APIs, service logic, authentication, data flow, and maintainable server-side structure.",
    skills: ["Java", "Spring Boot", "Node.js", "Express", "REST APIs", "JWT"],
  },
  {
    name: "Frontend Product Work",
    Icon: Code2,
    summary: "Responsive interfaces with component structure, state management, and clean user flows.",
    skills: ["React", "TypeScript", "JavaScript", "Redux Toolkit", "Tailwind CSS", "Vite"],
  },
  {
    name: "Data & Persistence",
    Icon: Database,
    summary: "Schema design, querying, and application storage patterns across SQL and document databases.",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Mongoose", "Firebase"],
  },
  {
    name: "AI & Search Systems",
    Icon: Brain,
    summary: "Practical AI retrieval workflows, query agents, semantic search, and model integration.",
    skills: ["AI Integration", "Query Agents", "Article Retrieval", "Google Gemini", "Prompt Safety"],
  },
  {
    name: "Engineering Workflow",
    Icon: GitBranch,
    summary: "Version control, containerization, API testing, and disciplined project delivery habits.",
    skills: ["Git", "GitHub", "Docker", "Postman", "pnpm", "CI Awareness"],
  },
  {
    name: "Production Mindset",
    Icon: ShieldCheck,
    summary: "Reliability, readable code, secure defaults, collaboration, and maintainable implementation choices.",
    skills: ["Clean Code", "RBAC", "Validation", "Documentation", "Collaboration"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="container scroll-mt-2 py-20">
      <Reveal>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="section-heading-kicker">Capabilities</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Engineering Strengths</h2>
          <p className="mt-3 text-lg leading-8 text-muted-foreground">
            A practical stack for building reliable backend services, full-stack products, and AI-assisted workflows.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {CAPABILITIES.map(({ name, Icon, summary, skills }, i) => (
          <Reveal key={name} delay={i * 90}>
            <div className="professional-card h-full rounded-xl p-6">
              <div className="mb-5 flex items-start gap-4">
                <div className="rounded-lg border border-primary/20 bg-primary/10 p-2.5 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold tracking-tight">{name}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{summary}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border/70 bg-background/65 px-2.5 py-1 text-xs font-semibold text-foreground/85"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
