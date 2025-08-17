'use client'

import dynamic from 'next/dynamic'
import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

// Dynamically import the ThemeProvider to avoid SSR issues
const ThemeProvider = dynamic(
  () => import('@/components/theme-provider').then((mod) => mod.ThemeProvider),
  { ssr: false }
)

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

