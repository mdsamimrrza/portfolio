"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const roles = ["Student", "Developer", "Java Developer", "React Enthusiast"]
  const typingSpeed = 150
  const deletingSpeed = 100
  const delayBetweenWords = 2000
  const cursorRef = useRef(null)

  useEffect(() => {
    // Blinking cursor animation
    const cursorInterval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = cursorRef.current.style.opacity === "0" ? "1" : "0"
      }
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    let timeout

    // Handle typing and deleting animation
    if (!isDeleting && displayText === roles[currentIndex]) {
      // Pause at the end of the word
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, delayBetweenWords)
    } else if (isDeleting && displayText === "") {
      // Move to the next word
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % roles.length)
    } else {
      // Handle typing or deleting
      const speed = isDeleting ? deletingSpeed : typingSpeed
      timeout = setTimeout(() => {
        setDisplayText((prev) => {
          if (isDeleting) {
            return prev.substring(0, prev.length - 1)
          } else {
            return roles[currentIndex].substring(0, prev.length + 1)
          }
        })
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, roles])

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      // For projects section, align section title to top of viewport
      if (id === '#projects') {
        const sectionTop = element.offsetTop;
        const headerHeight = 64; // Adjust this to match your header height
        window.scrollTo({
          top: sectionTop - headerHeight,
          behavior: 'smooth'
        });
      } else {
        // Default smooth scroll for other sections
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      
      // Update URL without reloading page
      window.history.pushState(null, "", id);
    }
  };
  

  return (
    <section id="home" className="container pt-2 pb-8 md:pt-8 md:pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center min-h-[calc(100vh-5rem)]">
        <div className="space-y-4 md:space-y-6 animate-fade-in -mt-4 md:-mt-8">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Hi, I'm <span className="text-primary">Md Samim Reza</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold flex flex-wrap items-center gap-1">
            I am a{" "}
            <span className="text-primary min-w-[150px] md:min-w-[180px] inline-flex">
              {displayText}
              <span ref={cursorRef} className="ml-1 animate-pulse">
                |
              </span>
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            A passionate third-year college student specializing in Java, Spring Boot, React, and JavaScript development. I build modern web applications with a focus on clean code and user experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="transition-all hover:scale-105"
              onClick={(e) => handleSmoothScroll(e, "#projects")}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="transition-all hover:scale-105"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
            >
              Contact Me
            </Button>
            <a
              href="/Md_Samim_Reza.pdf"
              download="Md_Samim_Reza_Resume"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary transition-transform hover:scale-105">
          <Image
              src="/profile.jpg"
              alt="Your Name"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

