"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Mail, ExternalLink } from "lucide-react"

const ROLES = ["Associate Software Engineer", "Spring Boot Developer", "Full Stack Builder", "React Developer", ".NET Developer", "SQL Expert"]

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4">
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.73.084-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.762-1.604-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 013-.404 11.5 11.5 0 013 .404c2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.242 2.873.118 3.176.77.84 1.234 1.912 1.234 3.222 0 4.61-2.804 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.014 2.896-.014 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4">
    <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.939v5.669H9.337V9h3.41v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.106 0-2-.896-2-2 0-1.105.894-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zm1.786 13.019H3.55V9h3.573v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const LeetcodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
)

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-4 w-4 transition-transform group-hover:translate-y-0.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
)

const SOCIAL = [
  { href: "https://github.com/mdsamimrrza", label: "GitHub", Icon: GithubIcon },
  { href: "https://linkedin.com/in/samimrrza", label: "LinkedIn", Icon: LinkedinIcon },
  { href: "https://leetcode.com/samimreza", label: "LeetCode", Icon: LeetcodeIcon },
  { href: "mailto:samimrrza1@gmail.com", label: "Email", Icon: Mail },
]

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [idx, setIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const cursorRef = useRef(null)

  /* Blinking cursor */
  useEffect(() => {
    const id = setInterval(() => {
      if (cursorRef.current)
        cursorRef.current.style.opacity = cursorRef.current.style.opacity === "0" ? "1" : "0"
    }, 520)
    return () => clearInterval(id)
  }, [])

  /* Typewriter */
  useEffect(() => {
    let t
    const word = ROLES[idx]
    if (!deleting && displayText === word) {
      t = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayText === "") {
      setDeleting(false)
      setIdx(p => (p + 1) % ROLES.length)
    } else {
      t = setTimeout(() => {
        setDisplayText(p => deleting ? p.slice(0, -1) : word.slice(0, p.length + 1))
      }, deleting ? 70 : 110)
    }
    return () => clearTimeout(t)
  }, [displayText, idx, deleting])

  const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80
    window.scrollTo({ top, behavior: "smooth" })
    window.history.pushState(null, "", id)
  }

  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] hero-gradient overflow-hidden">

      {/* Background orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[32rem] h-[32rem] rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-primary/4 blur-3xl" />

      <div className="container relative z-10 flex items-center min-h-[calc(100vh-4rem)] py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

          {/* ── Left: Text ── */}
          <div className="space-y-6 animate-fade-in order-2 md:order-1">

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-sm text-primary font-medium">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Open to opportunities
            </div>

            {/* Name */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
                <span className="text-primary">Md Samim</span>

                <span className="text-foreground"> Reza</span>
              </h1>
            </div>

            {/* Typewriter */}
            <h2 className="text-xl sm:text-2xl font-semibold text-muted-foreground flex flex-wrap items-center gap-x-2">
              I build as a
              <span className="text-foreground inline-flex items-center min-w-[180px]">
                {displayText}
                <span ref={cursorRef} className="ml-0.5 text-primary font-light">|</span>
              </span>
            </h2>

            {/* Bio */}
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
              I'm <span className="text-foreground font-medium">Md Samim Reza</span>, an{" "}
              <span className="text-foreground font-medium">Associate Software Engineer</span> at{" "}
              <span className="text-primary font-medium">Canada Life</span>.
              Building production software with expertise in Spring Boot, .NET, React, Vue, and SQL.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <Button size="lg"
                className="shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-0.5 transition-all"
                onClick={e => scrollTo(e, "#projects")}>
                View My Work
              </Button>
              <Button variant="outline" size="lg"
                className="hover:-translate-y-0.5 transition-all"
                onClick={e => scrollTo(e, "#contact")}>
                Contact Me
              </Button>
              <a href="/Md_Samim_Reza.pdf" download="Md_Samim_Reza_Resume"
                className="group inline-flex items-center justify-center gap-2 rounded-[var(--radius)] border border-primary/30 bg-background text-foreground text-sm font-medium h-11 px-6 hover:bg-primary/5 hover:border-primary hover:-translate-y-0.5 transition-all duration-300">
                <DownloadIcon />
                Download CV
              </a>
            </div>

            {/* Social row */}
            <div className="flex items-center gap-2 pt-1">
              {SOCIAL.map(({ href, label, Icon }) => (
                <div key={label} className="relative group">
                  <a href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer" aria-label={label} title={label}
                    className="p-2 rounded-full border border-border bg-card/60 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200 block">
                    <Icon className="h-4 w-4" />
                  </a>
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-popover text-popover-foreground border border-border shadow-md whitespace-nowrap z-20">
                    {label}
                  </span>
                </div>
              ))}
              <span className="text-xs text-muted-foreground ml-1">Find me online</span>
            </div>
          </div>

          {/* ── Right: Photo ── */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-[1.12] animate-ring-pulse" />
              <div className="absolute inset-0 rounded-full border border-accent/20 scale-[1.25] animate-float" />
              {/* Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/15 animate-float">
                <Image
                  src="/profile.jpg"
                  alt="Md Samim Reza — Associate Software Engineer"
                  fill className="object-cover" priority
                />
              </div>
              {/* Floating badge — experience */}
              <div className="absolute -bottom-3 -right-3 glass-card px-3 py-2 shadow-xl text-center">
                <p className="text-primary font-bold text-sm leading-none">2+</p>
                <p className="text-muted-foreground text-xs">yrs exp</p>
              </div>
              {/* Floating badge — location */}
              <div className="absolute -top-3 -left-3 glass-card px-3 py-2 shadow-xl text-xs font-medium flex items-center gap-1.5">
                <span className="text-base">📍</span>
                <span className="text-muted-foreground">Bangalore</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
