import { Sparkles, Target, BookOpen, MapPin } from "lucide-react"
import Reveal from "./reveal"

const HIGHLIGHTS = [
  {
    Icon: Sparkles,
    title: "AI & Full Stack",
    desc: "Building intelligent query systems and AI-driven search agents at Chiac ASI while mastering full-stack engineering with Java, Spring Boot, and React.",
  },
  {
    Icon: Target,
    title: "Impact-Driven Code",
    desc: "I care about writing clean, purposeful code that solves real problems — whether it's a healthcare management system, a knowledge base, or a boutique business card.",
  },
  {
    Icon: BookOpen,
    title: "Perpetual Learner",
    desc: "Certified in Git, Docker, Spring Boot, and Advanced DSA. Currently deepening expertise in AI system design, API integration, and responsible AI development.",
  },
]

export default function About() {
  return (
    <section id="about" className="container py-16 scroll-mt-2">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <Reveal>
          <div className="text-center space-y-3 mb-14">
            <p className="section-heading-kicker">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold">Who I Am</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              A developer bridging AI and full-stack engineering, currently working remotely from Bangalore
              while pursuing a degree in Computer Science.
            </p>
          </div>
        </Reveal>

        {/* Two-column layout: bio + highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Bio card */}
          <Reveal delay={100} className="lg:col-span-2">
            <div className="p-6 space-y-5 border border-border/50 bg-white/90 dark:bg-card/30 rounded-xl hover:bg-primary/5 hover:border-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 h-full shadow-sm dark:shadow-none">
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium uppercase tracking-widest">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Bangalore, Karnataka — Remote
              </div>
              <p className="text-foreground leading-relaxed">
                I'm <span className="font-semibold text-primary">Md Samim Reza</span>, a Computer Science graduate from
                Siddaganga Institute of Technology and an intern{" "}
                <span className="font-semibold">Superintelligent Evangelist</span> at{" "}
                <span className="font-semibold text-primary">Chiac ASI</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                I work on AI-driven query systems, article retrieval agents, and backend API integrations.
                My internship at Japan Grab Technologies gave me real industry exposure early on.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                When I'm not coding, I'm exploring AI alignment, contributing to open-source projects,
                and sharpening my skills in DSA and system design.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Open to Work", "Remote", "Intern"].map(tag => (
                  <span key={tag}
                    className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Highlights */}
          <div className="lg:col-span-3 space-y-4">
            {HIGHLIGHTS.map(({ Icon, title, desc }, i) => (
              <Reveal key={title} delay={200 + (i * 100)}>
                <div className="flex gap-4 p-5 border border-border/50 bg-white/90 dark:bg-card/30 rounded-xl hover:bg-primary/5 hover:border-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group shadow-sm dark:shadow-none">
                  <div className="shrink-0 mt-0.5 p-2.5 rounded-xl bg-primary/10 text-primary
                    group-hover:bg-primary/15 transition-colors h-fit">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
