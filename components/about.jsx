import { Sparkles, Target, BookOpen, MapPin } from "lucide-react"
import Reveal from "./reveal"

const HIGHLIGHTS = [
  {
    Icon: Sparkles,
    title: "AI & Full Stack",
    desc: "Building production software at Canada Life while bringing hands-on AI, backend, Java, Spring Boot, and React experience.",
  },
  {
    Icon: Target,
    title: "Impact-Driven Code",
    desc: "I care about writing clean, purposeful code that solves real problems - whether it's a healthcare management system, a knowledge base, or a boutique business card.",
  },
  {
    Icon: BookOpen,
    title: "Perpetual Learner",
    desc: "Computer Science graduate certified in Git, Docker, Spring Boot, and Advanced DSA, with continued focus on AI system design and backend engineering.",
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
              A software engineer bridging enterprise development, backend systems, and full-stack product delivery.
            </p>
          </div>
        </Reveal>

        {/* Two-column layout: bio + highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Bio card */}
          <Reveal delay={100} className="lg:col-span-2">
            <div className="professional-card h-full rounded-xl p-6 space-y-5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium uppercase tracking-widest">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Bangalore, Karnataka - Hybrid
              </div>
              <p className="text-foreground leading-relaxed">
                I'm <span className="font-semibold text-primary">Md Samim Reza</span>, an{" "}
                <span className="font-semibold">Associate Software Engineer</span> at{" "}
                <span className="font-semibold text-primary">Canada Life</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                I work on production software and bring prior experience from AI-driven query systems,
                article retrieval agents, and backend API integrations.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                My internships, including Japan Grab Technologies, gave me real industry exposure early on.
                When I'm not coding, I'm exploring AI alignment, contributing to open-source projects,
                and sharpening my skills in DSA and system design.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Full Time", "Hybrid", "Software Engineer"].map(tag => (
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
                <div className="professional-card flex gap-4 rounded-xl p-5 group">
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
