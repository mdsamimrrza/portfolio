import { Card, CardContent } from "@/components/ui/card"
import { Database, Globe, PenTool, Server, Terminal, Smartphone } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      icon: <Globe className="h-8 w-8 text-primary" />,
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Redux", "Material UI", "Bootstrap"],
    },
    {
      name: "Backend",
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: ["Java", "Spring Boot", "Node.js", "Express.js", "RESTful APIs"],
    },
    {
      name: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
    },
    {
      name: "Tools & DevOps",
      icon: <Terminal className="h-8 w-8 text-primary" />,
      skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Webpack", "Vite"],
    },
    {
      name: "Mobile",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      skills: ["React Native", "Responsive Design"],
    },
    {
      name: "Design",
      icon: <PenTool className="h-8 w-8 text-primary" />,
      skills: ["Figma", "UI/UX Principles"],
    },
  ]

  return (
    <section id="skills" className="container py-24 space-y-8 bg-muted/50">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">My Skills</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          I've worked with a variety of technologies and tools throughout my projects and studies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                {category.icon}
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

