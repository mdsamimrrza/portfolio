import { ExternalLink, Award } from "lucide-react"
import Reveal from "./reveal"

const CERTS = [
  {
    title: "Learn Git by Doing: A Step-by-Step Guide to Version Control",
    issuer: "Udemy",
    date: "November 2025",
    credentialId: "UC-57d53899-faa6-4704-8619-683adba5e717",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-57d53899-faa6-4704-86f9-683adb5e5717.pdf",
    skills: ["Git", "GitHub", "Version Control", "GitHub Copilot"],
    color: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  },
  {
    title: "Docker – A Project-Based Approach to Learning",
    issuer: "Udemy",
    date: "November 2025",
    credentialId: "UC-2827526f-f5d3-45e7-a0a9-51756e87064f",
    url: "https://www.udemy.com/certificate/UC-2827526f-f5d3-45e7-a0a9-51756e87064f/",
    skills: ["Docker", "Containerization"],
    color: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  },
  {
    title: "SpringBoot for Beginners",
    issuer: "Amigoscode",
    date: "August 2025",
    credentialId: null,
    url: "https://drive.google.com/file/d/1qs3uHMJlBYpbpBMt3Cx0wyMCR9eRYgTz/view?usp=sharing",
    skills: ["Spring Boot", "REST APIs", "Spring Framework", "Dependency Injection", "Backend Development"],
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  },
  {
    title: "8-Week Advanced DSA Live Training Program",
    issuer: "GeeksforGeeks",
    date: "November 2024",
    credentialId: null,
    url: "https://media.geeksforgeeks.org/courses/certificates/9dacc106ce66de3305a75c42f96ebd39.pdf",
    skills: ["Data Structures", "Algorithms", "DSA in Java"],
    color: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="container py-16 scroll-mt-2 space-y-10">

      <Reveal>
        <div className="text-center space-y-3">
          <p className="section-heading-kicker">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-bold">Licenses & Certifications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Industry-recognised certifications across DevOps, backend development, and data structures.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {CERTS.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 100}>
            <div className="p-5 flex flex-col gap-4 group border border-border/50 bg-white/90 dark:bg-card/30 rounded-xl hover:bg-primary/5 hover:border-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 active:bg-primary/5 active:border-primary transition-all duration-300 h-full shadow-sm dark:shadow-none">

              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 rounded-lg bg-primary/10 shrink-0">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1 min-w-0">
                  <h3 className="font-semibold text-sm leading-snug">{cert.title}</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${cert.color}`}>
                      {cert.issuer}
                    </span>
                    <span className="text-xs text-muted-foreground">{cert.date}</span>
                  </div>
                </div>
              </div>

              {cert.credentialId && (
                <p className="text-xs text-muted-foreground font-mono bg-muted/60 px-2.5 py-1.5 rounded-lg border border-border/50 break-all">
                  ID: {cert.credentialId}
                </p>
              )}

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {cert.skills.map(s => (
                  <span key={s}
                    className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs border border-border/60">
                    {s}
                  </span>
                ))}
              </div>

              <a href={cert.url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline">
                <ExternalLink className="h-3.5 w-3.5" />
                View Credential
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}