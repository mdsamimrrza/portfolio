import { Brain, Globe, Server, Database, Terminal, Smartphone, PenTool } from "lucide-react"
import Reveal from "./reveal"

const CATEGORIES = [
  {
    name: "AI & Intelligent Systems",
    Icon: Brain,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    skills: ["AI Model Integration", "Query Agents", "Article Retrieval", "AI Alignment", "Prompt Engineering"],
  },
  {
    name: "Frontend",
    Icon: Globe,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Redux", "Material UI", "Bootstrap"],
  },
  {
    name: "Backend",
    Icon: Server,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    skills: ["Java", "Spring Boot", "Node.js", "Express.js", "RESTful APIs", "Spring Framework"],
  },
  {
    name: "Database",
    Icon: Database,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    name: "DevOps & Tools",
    Icon: Terminal,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    skills: ["Git", "GitHub", "Docker", "VS Code", "IntelliJ IDEA", "Vite", "Webpack"],
  },
  {
    name: "Mobile & Design",
    Icon: Smartphone,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    skills: ["React Native", "Responsive Design", "Figma", "UI/UX Principles"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="container py-16 scroll-mt-2 space-y-10">

      <Reveal>
        <div className="text-center space-y-3">
          <p className="section-heading-kicker">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From AI systems to full-stack applications — a versatile, industry-ready tech stack.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CATEGORIES.map(({ name, Icon, color, bg, skills }, i) => (
          <Reveal key={name} delay={i * 100}>
            <div className="p-5 space-y-4 group border border-border/50 bg-white/90 dark:bg-card/30 rounded-xl hover:bg-primary/5 hover:border-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 active:bg-primary/5 active:border-primary transition-all duration-300 h-full shadow-sm dark:shadow-none">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${bg}`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <h3 className="font-semibold text-sm">{name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill}
                    className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs border border-border/60
                      hover:bg-primary/10 hover:text-primary hover:border-primary/25 transition-colors duration-200 cursor-default">
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
