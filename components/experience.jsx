import { Briefcase, GraduationCap, MapPin, CalendarDays } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Reveal from "./reveal"

const ITEMS = [
  {
    type: "work",
    title: "Superintelligent Evangelist",
    org: "Chiac ASI",
    period: "Feb 2026 – Present",
    location: "Sheffield, UK · Remote",
    current: true,
    bullets: [
      "Building AI-driven query processing systems and intelligent article retrieval agents using advanced AI models.",
      "Acting as facilitator — coordinating development workflows and ensuring smooth cross-team collaboration.",
      "Gaining hands-on experience in backend development, API integration, and responsible AI (AI alignment).",
    ],
    skills: ["AI", "Team Leadership", "Backend Development", "API Integration", "AI Alignment"],
  },
  {
    type: "work",
    title: "Student Intern",
    org: "Japan Grab Technologies",
    period: "Oct 2023 · 1 month",
    location: "Bangalore · Hybrid",
    current: false,
    bullets: [
      "Gained real-world software industry exposure through an intensive short-term internship.",
      "Worked within a professional engineering team, practicing collaborative development workflows.",
    ],
    skills: ["Software Industry", "Collaboration"],
  },
  {
    type: "education",
    title: "Bachelor of Engineering — Computer Science",
    org: "Siddaganga Institute of Technology",
    period: "Nov 2022 – Aug 2026",
    location: "Bangalore, Karnataka",
    current: true,
    bullets: [
      "Specialization in Web Development and Computer Science fundamentals.",
      "Coursework: Data Structures & Algorithms, Database Systems, Operating Systems, Web Development, Computer Networks.",
    ],
    skills: ["Java", "DSA", "Database Systems", "Web Development"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="container py-16 scroll-mt-2 space-y-10">

      <Reveal>
        <div className="text-center space-y-3">
          <p className="section-heading-kicker">Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience & Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional path from classroom to AI company — building real things at every step.
          </p>
        </div>
      </Reveal>

      <div className="max-w-3xl mx-auto space-y-0">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 150}>
            <div className="relative pl-10 pb-14 last:pb-0">

              {/* Timeline line */}
              {i < ITEMS.length - 1 && (
                <div className="timeline-line" />
              )}

              {/* Timeline dot */}
              <div className={`absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center
              ${item.current ? "bg-primary border-primary" : "bg-background border-border"}`}>
                {item.type === "work"
                  ? <Briefcase className="h-2.5 w-2.5 text-white" />
                  : <GraduationCap className="h-2.5 w-2.5 text-muted-foreground" />}
              </div>

              {/* Card */}
              <div className="p-5 space-y-3 border border-border/50 bg-white/90 dark:bg-card/30 rounded-xl hover:bg-primary/5 hover:border-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 active:bg-primary/5 active:border-primary transition-all duration-300 shadow-sm dark:shadow-none">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-base">{item.title}</h3>
                      {item.current && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-semibold text-sm mt-0.5">{item.org}</p>
                  </div>
                  <div className="text-right text-xs text-muted-foreground space-y-1">
                    <div className="flex items-center gap-1 justify-end">
                      <CalendarDays className="h-3 w-3" />{item.period}
                    </div>
                    <div className="flex items-center gap-1 justify-end">
                      <MapPin className="h-3 w-3" />{item.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-1.5">
                  {item.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-primary/60" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.skills.map(s => (
                    <Badge key={s} variant="outline"
                      className="text-xs hover:bg-primary/8 hover:text-primary hover:border-primary/30 transition-colors">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>

            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
