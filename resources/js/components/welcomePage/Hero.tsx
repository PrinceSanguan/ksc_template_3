"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, type ReactNode, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronRight, Star, Calendar, Award, Users } from "lucide-react"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Animated component wrapper
interface AnimatedElementProps {
  children: ReactNode
  delay?: number
  className?: string
  animation?: "fadeIn" | "slideUp" | "slideRight" | "slideLeft" | "scaleIn" | "rotateIn"
}

const AnimatedElement = ({ children, delay = 0, className = "", animation = "fadeIn" }: AnimatedElementProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let animationProps = {}

    switch (animation) {
      case "fadeIn":
        animationProps = { opacity: 0, y: 0 }
        break
      case "slideUp":
        animationProps = { opacity: 0, y: 30 }
        break
      case "slideRight":
        animationProps = { opacity: 0, x: -20 }
        break
      case "slideLeft":
        animationProps = { opacity: 0, x: 20 }
        break
      case "scaleIn":
        animationProps = { opacity: 0, scale: 0.8 }
        break
      case "rotateIn":
        animationProps = { opacity: 0, rotation: -5 }
        break
    }

    gsap.fromTo(el, animationProps, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotation: 0,
      duration: 0.8,
      delay,
      ease: "power2.out",
    })
  }, [delay, animation])

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  )
}

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Fade in the hero section
    gsap.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: "power2.inOut" })

    // Fade in the content with delay
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        delay: 0.3,
        ease: "power3.out"
      },
    )

    // Animate hero elements on scroll
    gsap.to(".parallax-hero-element", {
      y: -30,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      }
    })
  }, [])

  return (
    <div ref={heroRef} className="hero-section relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlays */}
      <div className="absolute inset-0 z-0">
        {/* Main background image */}
        <img
          src="Images/team/ADULTKEMPO.jpg"
          alt="Martial Arts Training"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

        {/* Red accent overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-red-600/90 to-transparent"></div>

        {/* Additional diagonal red accent */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-red-600/70 transform -skew-y-6 origin-bottom-left"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0h20v20L20 40H0z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating badge */}
      <div className="absolute bottom-12 left-8 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg flex items-center z-20 animate-pulse">
        <span className="mr-2">🔥</span>
        LIMITED TIME OFFER
      </div>

      {/* Classes For All Ages card */}
      <div className="absolute right-8 bottom-12 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-2xl border border-gray-100 w-[220px] sm:w-[250px] z-20 transform hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center mb-2">
          <Users className="text-red-600 mr-2 flex-shrink-0" size={18} />
          <h3 className="font-semibold text-gray-900 text-lg">Classes For All Ages</h3>
        </div>
        <p className="text-sm text-gray-600">Kids, teens, and adults programs available</p>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
        <div ref={contentRef} className="max-w-xl">
          <AnimatedElement delay={0.2} animation="slideRight">
            <div className="flex items-center space-x-2 mb-3">
              <div className="h-px w-12 bg-red-500"></div>
              <span className="text-red-400 uppercase tracking-widest text-sm font-bold">
                  Augusta's Premier Dojo
                </span>
              </div>
            <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl text-white parallax-hero-element">
                Martial Arts{" "}
              <span className="block mt-2">
                &amp; <span className="text-red-400 relative inline-block">
                  Fitness
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-red-500/50"></span>
                </span> for All
                </span>
              </h1>
            </AnimatedElement>

          <AnimatedElement delay={0.4} animation="slideRight">
            <p className="text-xl text-gray-200 leading-relaxed max-w-lg mt-6">
                At Seigler's Karate Center, we're passionate about using martial arts to help you live your best life.
                Our programs cater to all ages and skill levels.
              </p>
            </AnimatedElement>

          {/* Buttons with enhanced styling */}
          <AnimatedElement delay={0.6} animation="slideRight" className="flex flex-wrap gap-4 mt-8">
              <Button
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                variant="default"
              className="btn-sleek bg-red-600 hover:bg-red-700 px-8 py-6 text-white font-medium shadow-xl rounded-lg text-lg transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Select a Program
                  <ChevronRight
                    className={`ml-2 transition-transform duration-300 ${isHovering ? "translate-x-1" : ""}`}
                    size={20}
                  />
                </span>
              </Button>
              <Button
                variant="outline"
              className="border-gray-300 px-8 py-6 text-lg text-white bg-black/30 hover:bg-black/40 hover:border-white transition-all duration-300 rounded-lg shadow-sm hover:shadow backdrop-blur-sm"
              >
              <Calendar className="mr-2 text-red-400" size={18} />
                View Schedule & Pricing
              </Button>
            </AnimatedElement>

          {/* Review stats and award with enhanced styling */}
          <AnimatedElement delay={0.8} animation="slideRight">
            <div className="mt-10 flex flex-col sm:flex-row gap-6 bg-black/40 backdrop-blur-sm p-5 rounded-lg border border-white/10 shadow-md">
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                <span className="text-gray-200">
                  <span className="font-bold text-white">4.9</span> Rating (200+ reviews)
                  </span>
                </div>
                <div className="flex items-center">
                <Award className="mr-2 text-red-400" size={20} />
                <span className="text-gray-200">Award-winning instruction</span>
                </div>
              </div>
            </AnimatedElement>

          {/* Achievement metrics with enhanced styling */}
          <AnimatedElement delay={1} animation="scaleIn">
            <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-white/20">
              <div className="relative pl-4 group bg-black/30 backdrop-blur-sm p-3 rounded-lg hover:bg-black/40 transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500 rounded-l-lg group-hover:h-[85%] group-hover:top-[7.5%] transition-all duration-500"></div>
                <span className="block text-3xl font-bold text-white">15+</span>
                <span className="text-gray-300">Years Experience</span>
                </div>
              <div className="relative pl-4 group bg-black/30 backdrop-blur-sm p-3 rounded-lg hover:bg-black/40 transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500 rounded-l-lg group-hover:h-[85%] group-hover:top-[7.5%] transition-all duration-500"></div>
                <span className="block text-3xl font-bold text-white">500+</span>
                <span className="text-gray-300">Students Trained</span>
              </div>
              <div className="relative pl-4 group bg-black/30 backdrop-blur-sm p-3 rounded-lg hover:bg-black/40 transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500 rounded-l-lg group-hover:h-[85%] group-hover:top-[7.5%] transition-all duration-500"></div>
                <span className="block text-3xl font-bold text-white">All</span>
                <span className="text-gray-300">Ages Welcome</span>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  )
}

export default Hero
