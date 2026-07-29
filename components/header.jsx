"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Moon, Sun, X, Home, Folder, Zap, Briefcase, Mail, Award } from "lucide-react"
import Logo from "@/components/logo"
import { portfolioContent } from "@/lib/portfolio-content"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export default function Header() {
  const { navigation } = portfolioContent
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "experience", "certifications", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  const handleNavClick = (event, href) => {
    setMobileMenuOpen(false)

    const isHashLink = href.startsWith("/#") || href.startsWith("#")
    if (!isHashLink) return

    event.preventDefault()
    const id = href.replace("/#", "#").replace("#", "")
    const element = document.getElementById(id)
    if (!element) return

    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })

    window.history.pushState(null, "", `#${id}`)
  }

  const isActive = (href) => {
    const sectionId = href.replace("/#", "").replace("#", "")
    if (!sectionId || sectionId === "/") return activeSection === "home"
    return activeSection === sectionId
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/85 backdrop-blur-xl transition-all">
      <div className="container flex h-16 md:h-18 items-center justify-between">
        {/* Left: Mobile trigger & Custom Logo */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle menu" className="md:hidden">
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-90 cursor-pointer"
            onClick={(e) => {
              setMobileMenuOpen(false)
              const el = document.getElementById("home")
              if (el) {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
                window.history.pushState(null, "", "/")
              }
            }}
          >
            <Logo size="default" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`rounded-full px-3.5 py-1.5 text-xs md:text-sm font-semibold transition-all ${
                isActive(item.href)
                  ? "bg-primary/10 text-primary border border-primary/20 shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
              onClick={(event) => handleNavClick(event, item.href)}
            >
              {item.name}
            </Link>
          ))}
          <div className="ml-2 border-l border-border/60 pl-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Theme Toggle */}
        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            {mounted && theme === "dark" ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 z-50 bg-black/50 backdrop-blur-md md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="h-[calc(100vh-4rem)] overflow-y-auto">
            <nav
              className="flex min-h-full w-[82%] max-w-xs flex-col gap-2 rounded-r-2xl border-r border-border/70 bg-card/98 px-5 py-6 shadow-2xl backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Navigation
              </div>
              {navigation.map((item) => {
                const Icon = {
                  Home: Home,
                  Projects: Folder,
                  Skills: Zap,
                  Experience: Briefcase,
                  Certifications: Award,
                  Contact: Mail
                }[item.name] || Folder

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      isActive(item.href)
                        ? "bg-primary/15 text-primary border border-primary/20"
                        : "text-foreground/80 hover:bg-muted"
                    }`}
                    onClick={(event) => handleNavClick(event, item.href)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
