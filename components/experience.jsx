import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Grab (Japan)",
      period: "Oct 2023 – Nov 2023",
      description:
        "Worked on backend services and internal tools to improve operational efficiency. Collaborated with senior developers to optimize APIs and enhance system performance.",
      type: "work",
      skills: ["Java", "Spring Boot", "REST APIs", "MySQL"],
    },
    {
      title: "Bachelor of Engineering in Computer Science",
      company: "Siddaganga Institute of Technology",
      period: "2022 – 2026 ",
      description:
        "Coursework includes Data Structures, Algorithms, Database Systems, and Web Development.",
      type: "education",
      skills: ["Java", "DSA", "Database Systems", "Spring Boot"],
    },
    {
      title: "Higher Secondary Education (12th)",
      company: "Nepal",
      period: "Completed 2022",
      description: "Focused on Mathematics, Physics, and Computer Science.",
      type: "education",
      skills: ["Mathematics", "Physics", "Computer Science"],
    },
  ]

  return (
    <section id="experience" className="container py-24 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Experience & Education</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          My professional journey and educational background.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <Card key={index} className="border-l-4 border-l-primary hover:shadow-md transition-shadow duration-300">
            <CardHeader className="flex flex-row items-start gap-4 pb-2">
              <div className="mt-1 bg-primary/10 p-2 rounded-full">
                {exp.type === "work" ? (
                  <Briefcase className="h-5 w-5 text-primary" />
                ) : (
                  <GraduationCap className="h-5 w-5 text-primary" />
                )}
              </div>
              <div className="space-y-1">
                <CardTitle className="text-xl">{exp.title}</CardTitle>
                <CardDescription className="text-base font-medium">
                  {exp.company} | {exp.period}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pl-16">
              <p className="mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="hover:bg-primary/10 transition-colors duration-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
