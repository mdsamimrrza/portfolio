"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const roles = ["Student", "Developer", "Java Expert", "React Enthusiast"]
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
    e.preventDefault()
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      // Update URL without page reload
      window.history.pushState(null, "", id)
    }
  }

  return (
    <section id="home" className="container py-24 md:py-32 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-primary">John Doe</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold flex items-center">
            I am a{" "}
            <span className="text-primary ml-2 min-w-[180px] inline-flex">
              {displayText}
              <span ref={cursorRef} className="ml-1 animate-pulse">
                |
              </span>
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A passionate third-year college student specializing in Java, React, and JavaScript development. I build
            modern web applications with a focus on clean code and user experience.
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
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary transition-transform hover:scale-105">
            <Image
              src="/placeholder.svg?height=320&width=320"
              alt="Developer Portrait"
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

