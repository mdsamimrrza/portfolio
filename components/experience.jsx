import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Tech Solutions Inc.",
      period: "May 2023 - August 2023",
      description:
        "Developed and maintained web applications using React and Java Spring Boot. Collaborated with senior developers to implement new features and fix bugs.",
      type: "work",
      skills: ["React", "Java", "Spring Boot", "Git"],
    },
    {
      title: "Frontend Developer (Part-time)",
      company: "Digital Creations",
      period: "January 2023 - Present",
      description:
        "Working on responsive web applications for various clients. Implementing UI designs and integrating with backend APIs.",
      type: "work",
      skills: ["JavaScript", "React", "CSS", "RESTful APIs"],
    },
    {
      title: "Bachelor of Science in Computer Science",
      company: "University of Technology",
      period: "September 2021 - Present (Expected graduation: 2025)",
      description:
        "Focusing on software engineering, web development, and database systems. Maintaining a GPA of 3.8/4.0.",
      type: "education",
      skills: ["Data Structures", "Algorithms", "Database Systems", "Web Development"],
    },
    {
      title: "Web Development Bootcamp",
      company: "Code Academy",
      period: "Summer 2021",
      description: "Intensive 12-week program covering full-stack web development fundamentals.",
      type: "education",
      skills: ["HTML/CSS", "JavaScript", "Node.js", "MongoDB"],
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

