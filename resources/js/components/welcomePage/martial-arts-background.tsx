"use client"

import { useEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"

const WhiteRedGradient = ({ children }: { children: ReactNode }) => {
  const gradientRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to(gradientRef.current, {
      backgroundPositionX: "+=100%",
      duration: 30,
      repeat: -1,
      ease: "none"
    })
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Subtle white-red gradient */}
      <div 
        ref={gradientRef}
        className="fixed inset-0 z-0"
        style={{
          background: `linear-gradient(
            90deg,
            rgba(255,255,255,1) 0%,
            rgba(255,240,240,1) 20%,
            rgba(255,255,255,1) 40%,
            rgba(240,240,255,1) 60%,
            rgba(255,255,255,1) 80%,
            rgba(255,240,240,1) 100%
          )`,
          backgroundSize: "300% 100%",
          opacity: 0.95
        }}
      ></div>

      {/* Content container */}
      <div className="relative z-10 bg-white bg-opacity-80">
        {children}
      </div>
    </div>
  )
}

export default WhiteRedGradient