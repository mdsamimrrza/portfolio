"use client"

import { useEffect, useRef, useState } from "react"

export default function Reveal({ children, delay = 0, className = "", direction = "up" }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(currentRef)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    observer.observe(currentRef)
    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  // Directions
  const translateClasses = {
    up: "translate-y-12",
    down: "-translate-y-12",
    left: "translate-x-12",
    right: "-translate-x-12",
    none: "scale-95"
  }

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: "700ms",
      }}
      className={`transition-all ease-out ${
        isVisible ? "opacity-100 translate-y-0 translate-x-0 scale-100" : `opacity-0 ${translateClasses[direction]}`
      } ${className}`}
    >
      {children}
    </div>
  )
}
