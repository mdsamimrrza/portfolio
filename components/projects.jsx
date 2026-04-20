import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GitBranch, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with product catalog, shopping cart, and payment integration.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "Java", "Spring Boot", "MySQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team workspaces.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "JavaScript", "Firebase", "Material UI"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data from multiple locations.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["JavaScript", "HTML/CSS", "Weather API"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="container py-16 scroll-mt-16 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">My Projects</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Here are some of my recent projects. Each project showcases different skills and technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-base">{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button asChild variant="outline" size="sm" className="transition-colors hover:bg-primary/10">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <GitBranch className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button asChild size="sm" className="transition-transform hover:translate-y-[-2px]">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

