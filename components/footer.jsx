import Link from "next/link"

const SOCIAL = [
  {
    label: "GitHub",
    href: "https://github.com/mdsamimrrza",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.73.084-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.762-1.604-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 013-.404 11.5 11.5 0 013 .404c2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.242 2.873.118 3.176.77.84 1.234 1.912 1.234 3.222 0 4.61-2.804 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.014 2.896-.014 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/samimrrza",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
        <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.939v5.669H9.337V9h3.41v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.106 0-2-.896-2-2 0-1.105.894-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zm1.786 13.019H3.55V9h3.573v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/samimreza",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/samimreza.1",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z" />
      </svg>
    ),
  },
]

const NAV = ["Home", "About", "Projects", "Skills", "Experience", "Certifications", "Contact"]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div className="space-y-3">
            <p className="font-bold text-xl">
              <span className="gradient-text">Samim</span>
              <span className="text-foreground">.dev</span>
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Full Stack Developer & AI Systems Builder. Currently working at Chiac ASI, Bangalore.
            </p>
            <div className="flex gap-3 pt-1">
              {SOCIAL.map(({ label, href, svg }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <p className="font-semibold text-sm uppercase tracking-widest text-muted-foreground">Navigation</p>
            <nav className="grid grid-cols-2 gap-1">
              {NAV.map(name => (
                <a key={name} href={`#${name.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors py-0.5">
                  {name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div className="space-y-3">
            <p className="font-semibold text-sm uppercase tracking-widest text-muted-foreground">Contact</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="mailto:samimrrza1@gmail.com" className="block hover:text-primary transition-colors">
                samimrrza1@gmail.com
              </a>
              <a href="tel:+919036980731" className="block hover:text-primary transition-colors">
                (+91) 9036980731
              </a>
              <p>Bangalore, Karnataka</p>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {year} Md Samim Reza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
