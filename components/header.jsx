"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Moon, Sun, X, Home, Folder, Zap, Briefcase, Mail } from "lucide-react"
import { portfolioContent } from "@/lib/portfolio-content"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export default function Header() {
  const { brand, navigation } = portfolioContent
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  const handleNavClick = (event, href) => {
    setMobileMenuOpen(false)

    const isHashLink = href.startsWith("/#")
    if (!isHashLink || pathname !== "/") {
      return
    }

    event.preventDefault()

    const id = href.replace("/", "")
    const element = document.querySelector(id)
    if (!element) {
      return
    }

    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })

    window.history.pushState(null, "", id)
  }

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/"
    }

    if (href.startsWith("/#")) {
      return false
    }

    return pathname === href
  }

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-all duration-300 bg-background/50 backdrop-blur-3xl`}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Mobile Menu Trigger on Left */}
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle menu" className="md:hidden">
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <Link href="/" className="flex flex-col leading-none" onClick={() => setMobileMenuOpen(false)}>
            <span className="text-xl font-bold">
              <span className="text-primary">{brand.logoText.replace("Dev", "")}</span>Dev
            </span>
            <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              AI and Backend Engineer
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${isActive(item.href) ? "bg-primary/12 text-primary hover:bg-primary hover:text-primary-foreground" : "text-foreground/75 hover:text-primary-foreground hover:bg-primary"
                }`}
              onClick={(event) => handleNavClick(event, item.href)}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="transition-all duration-300 hover:scale-105 hover:text-primary-foreground hover:bg-primary rounded-full">
            {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-20 z-50 bg-black/40 backdrop-blur-md md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="h-[calc(100vh-5rem)] overflow-y-auto">
            <nav 
              className="flex w-[75%] h-full flex-col gap-4 rounded-r-2xl border-r border-border/50 bg-white/80 dark:bg-card/80 px-4 py-6 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                Navigation
              </div>
              {navigation.map((item) => {
                const Icon = {
                  Home: Home,
                  Projects: Folder,
                  Skills: Zap,
                  Experience: Briefcase,
                  Contact: Mail
                }[item.name] || Folder;
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`w-full rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 flex items-center gap-3 ${isActive(item.href) ? "bg-primary/15 text-primary" : "text-foreground/80 hover:bg-white/5 hover:text-primary"
                      }`}
                    onClick={(event) => handleNavClick(event, item.href)}
                  >
                    <Icon className="h-5 w-5" />
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
