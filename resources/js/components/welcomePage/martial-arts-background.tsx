"use client"

import { useEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface MartialArtsBackgroundProps {
  children: ReactNode
}

const MartialArtsBackground = ({ children }: MartialArtsBackgroundProps) => {
  const decorativeElementsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Register GSAP plugins
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    // Animate decorative elements with subtle movement
    if (decorativeElementsRef.current) {
      gsap.to(decorativeElementsRef.current.querySelectorAll(".floating-element"), {
        y: -15,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      })
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* White base background */}
      <div className="fixed inset-0 bg-white z-0"></div>

      {/* Subtle light gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 z-0"></div>

      {/* Very subtle accent gradients */}
      <div className="fixed left-0 bottom-0 w-1/3 h-full bg-gradient-to-r from-blue-50/30 to-transparent z-0"></div>
      <div className="fixed right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-red-50/30 to-transparent z-0"></div>

      {/* Light pattern overlay */}
      <div className="fixed inset-0 opacity-5 mix-blend-overlay z-0 bg-[url('/subtle-pattern.png')]"></div>

      {/* Decorative elements - much more subtle */}
      <div ref={decorativeElementsRef} className="fixed inset-0 pointer-events-none z-2">
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 floating-element bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 floating-element bg-red-100/30 rounded-full blur-2xl"></div>
        <div className="absolute right-1/3 top-1/2 w-40 h-40 floating-element bg-yellow-100/30 rounded-full blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </div>
  )
}

export default MartialArtsBackground
