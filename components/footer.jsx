export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Md Samim Reza</h3>
            <p className="text-muted-foreground">
              A passionate software developer specializing in creating modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Connect</h3>
            <div className="flex space-x-4">
              {/* GitHub */}
              <a
                href="https://github.com/mdsamimrrza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  className="h-6 w-6"
                >
                  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 
                           9.8 8.205 11.387.6.113.82-.258.82-.577 
                           0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.73.084-.73 
                           1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 
                           2.807 1.304 3.492.997.108-.776.418-1.304.762-1.604-2.665-.3-5.466-1.334-5.466-5.93 
                           0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.116-3.176 
                           0 0 1.008-.322 3.3 1.23a11.51 11.51 0 0 1 3-.404 
                           11.5 11.5 0 0 1 3 .404c2.29-1.552 
                           3.296-1.23 3.296-1.23.654 1.653.242 2.873.118 3.176.77.84 
                           1.234 1.912 1.234 3.222 0 4.61-2.804 5.625-5.475 
                           5.92.43.372.823 1.102.823 2.222 
                           0 1.606-.014 2.896-.014 3.286 0 .32.216.694.825.576C20.565 
                           21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/samimrrza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  className="h-6 w-6"
                >
                  <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.039-1.852-3.039-1.853 
                           0-2.136 1.445-2.136 2.939v5.669H9.337V9h3.41v1.561h.049c.476-.9 
                           1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 
                           4.267 5.455v6.286zM5.337 7.433c-1.106 0-2-.896-2-2 
                           0-1.105.894-2 2-2 1.104 0 2 .895 2 
                           2 0 1.104-.896 2-2 2zm1.786 13.019H3.55V9h3.573v11.452zM22.225 
                           0H1.771C.792 0 0 .774 0 1.729v20.542C0 
                           23.226.792 24 1.771 24h20.451C23.2 24 24 
                           23.226 24 22.271V1.729C24 .774 23.2 0 
                           22.222 0z"/>
                </svg>
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/samimreza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LeetCode"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  className="h-6 w-6"
                >
                  <path d="M13.207 20.485a1 1 0 0 1-1.414 0l-7.778-7.778a1 1 0 0 1 
                           0-1.414l7.778-7.778a1 1 0 0 1 1.414 
                           1.414L6.828 12l6.379 6.379a1 1 0 0 1 0 
                           1.414zm6.364 0a1 1 0 0 1-1.414 
                           0l-5.657-5.657a1 1 0 1 1 1.414-1.414l5.657 
                           5.657a1 1 0 0 1 0 1.414z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/samimreza.1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  className="h-6 w-6"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 
                           5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 
                           1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 
                           2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 
                           4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 
                           0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 
                           3.5h-8.5zM12 7a5 5 0 1 1 0 
                           10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 
                           0 7 3.5 3.5 0 0 0 0-7zm5.25-.88a1.13 
                           1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 
                           0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>© {currentYear} Md Samim Reza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
