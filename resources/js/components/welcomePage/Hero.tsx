"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ChevronRight, Star, Calendar, Award, Users, ArrowRight, Shield, Trophy } from "lucide-react"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

interface AnimatedElementProps {
  children: React.ReactNode
  delay?: number
  className?: string
  animation?: string
  duration?: number
  threshold?: number
}

const AnimatedElement = ({
  children,
  delay = 0,
  className = "",
  animation = "fadeIn",
  duration = 0.8,
  threshold = 0.2,
}: AnimatedElementProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let animationProps = {}
    let toProps = { opacity: 1, y: 0, x: 0, scale: 1, rotation: 0, duration, delay, ease: "power2.out" }

    switch (animation) {
      case "fadeIn":
        animationProps = { opacity: 0, y: 0 }
        break
      case "slideUp":
        animationProps = { opacity: 0, y: 30 }
        break
      case "slideRight":
        animationProps = { opacity: 0, x: -30 }
        break
      case "slideLeft":
        animationProps = { opacity: 0, x: 30 }
        break
      case "scaleIn":
        animationProps = { opacity: 0, scale: 0.8 }
        break
      case "rotateIn":
        animationProps = { opacity: 0, rotation: -5 }
        break
      case "bounceIn":
        animationProps = { opacity: 0, scale: 0.5, y: 20 }
        toProps = { ...toProps, ease: "elastic.out(1, 0.5)" }
        break
      case "flipIn":
        animationProps = { opacity: 0, rotation: 90, transformPerspective: 600 }
        toProps = { ...toProps, rotation: 0 }
        break
      case "glideIn":
        animationProps = { opacity: 0, x: -50, rotation: -3 }
        toProps = { ...toProps, ease: "power3.out" }
        break
    }

    gsap.fromTo(el, animationProps, toProps)

    ScrollTrigger.create({
      trigger: el,
      start: `top bottom-=${threshold * 100}%`,
      onEnter: () => {
        gsap.fromTo(el, animationProps, { ...toProps, delay: delay * 0.5 })
      },
      once: true,
    })
  }, [delay, animation, duration, threshold])

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  )
}

const ParticleEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
    }[] = []

    const createParticles = () => {
      const particleCount = window.innerWidth < 768 ? 30 : 50 // Fewer particles on mobile
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: i % 3 === 0 ? "#ff4d4d" : "#ffffff",
          opacity: Math.random() * 0.5 + 0.2,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.speedX
        p.y += p.speedY

        if (p.x > canvas.width) p.x = 0
        if (p.x < 0) p.x = canvas.width
        if (p.y > canvas.height) p.y = 0
        if (p.y < 0) p.y = canvas.height
      }

      requestAnimationFrame(animate)
    }

    createParticles()
    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />
}

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showPromo, setShowPromo] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth > 768) { // Only apply on desktop
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
  }

  useEffect(() => {
    // Check if mobile on mount
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    const timer = setTimeout(() => {
      setShowPromo(true)
    }, 3000)

    gsap.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: "power2.inOut" })

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        delay: 0.3,
        ease: "power3.out",
      }
    )

    if (!isMobile) {
      gsap.to(".parallax-hero-element", {
        y: -50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })

      gsap.to(".diagonal-accent", {
        skewY: -8,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", checkIfMobile)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [isMobile])

  return (
    <div
      ref={heroRef}
      className="hero-section relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("Images/team/ADULTKEMPO.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: isMobile ? "60% center" : "center",
            transform: !isMobile ? `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` : "none",
            transition: "transform 0.1s ease-out",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-red-600/90 to-transparent"></div>
        <div className="diagonal-accent absolute bottom-0 left-0 w-full h-1/3 bg-red-600/70 transform -skew-y-6 origin-bottom-left"></div>
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.15' fillRule='evenodd'%3E%3Cpath d='M0 30L30 0h30v30L30 60H0z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>
      </div>

      <ParticleEffect />

      {/* Floating elements - Responsive positioning */}
      {!isMobile && (
        <>
          <div className="absolute bottom-12 left-8 rounded-lg bg-gradient-to-r from-red-600 to-red-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg flex items-center z-20 hover:scale-105 transition-transform duration-300">
            <span className="mr-2 animate-pulse">🔥</span>
            <span className="relative">
              LIMITED TIME OFFER
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/50"></span>
            </span>
          </div>

          {/* Cards container on right side - Hidden on mobile */}
          <div className="absolute right-8 bottom-12 flex flex-col gap-4 z-20">
            <div
              className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-2xl border border-gray-100 w-[220px] sm:w-[250px] transform hover:-translate-y-2 transition-all duration-300"
              style={{
                transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`,
              }}
            >
              <div className="flex items-center mb-2">
                <div className="bg-red-50 p-2 rounded-full mr-3">
                  <Users className="text-red-600 flex-shrink-0" size={18} />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">Classes For All Ages</h3>
              </div>
              <p className="text-sm text-gray-600">Kids, teens, and adults programs available</p>
              <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs text-gray-500">View Details</span>
                <ArrowRight size={14} className="text-red-500" />
              </div>
            </div>

            <div
              className="bg-black/80 backdrop-blur-sm rounded-lg p-4 shadow-2xl border border-red-500/20 w-[220px] sm:w-[250px] transform hover:-translate-y-2 transition-all duration-300"
              style={{
                transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`,
              }}
            >
              <div className="flex items-center mb-2">
                <div className="bg-red-900/50 p-2 rounded-full mr-3">
                  <Trophy className="text-red-400 flex-shrink-0" size={18} />
                </div>
                <h3 className="font-semibold text-white text-lg">Championship Dojo</h3>
              </div>
              <p className="text-sm text-gray-300">Multiple regional and national awards</p>
              <div className="mt-2 pt-2 border-t border-red-500/20 flex justify-between items-center">
                <span className="text-xs text-gray-400">Our Achievements</span>
                <ArrowRight size={14} className="text-red-400" />
              </div>
            </div>
          </div>
        </>
      )}

      {showPromo && (
        <div className={`fixed z-50 bg-white rounded-lg shadow-2xl p-5 w-[300px] animate-bounce-in ${
          isMobile ? "bottom-4 left-4 right-4 mx-auto" : "top-10 right-10"
        }`}>
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            onClick={() => setShowPromo(false)}
          >
            ✕
          </button>
          <div className="flex items-center mb-3">
            <Shield className="text-red-600 mr-3" size={24} />
            <h3 className="font-bold text-gray-900">Special Offer!</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Sign up today and get 50% off your first month of training!</p>
          <Button className="w-full bg-red-600 hover:bg-red-700">Claim Offer</Button>
        </div>
      )}

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-28 relative z-10">
        <div ref={contentRef} className="max-w-xl mx-auto lg:mx-0">
          <AnimatedElement delay={0.2} animation="glideIn">
            <div className="flex items-center space-x-2 mb-3">
              <div className="h-px w-8 bg-red-500"></div>
              <span className="text-red-400 uppercase tracking-widest text-xs sm:text-sm font-bold">Augusta's Premier Dojo</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight md:text-6xl lg:text-7xl text-white parallax-hero-element">
              Martial Arts{" "}
              <span className="block mt-2">
                &amp;{" "}
                <span className="text-red-400 relative inline-block">
                  Fitness
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-red-500/50"></span>
                </span>{" "}
                for All
              </span>
            </h1>
          </AnimatedElement>

          <AnimatedElement delay={0.4} animation="slideRight">
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-lg mt-4 sm:mt-6">
              At Seigler's Karate Center, we're passionate about using martial arts to help you live your best life. Our
              programs cater to all ages and skill levels.
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.6} animation="slideRight" className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Button
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              variant="default"
              className="btn-sleek bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-5 sm:px-8 sm:py-6 text-white font-medium shadow-xl rounded-lg text-base sm:text-lg transition-all duration-300 relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute -inset-px bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center">
                Select a Program
                <ChevronRight
                  className={`ml-2 transition-transform duration-300 ${isHovering ? "translate-x-1" : ""}`}
                  size={18}
                />
              </span>
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg text-white bg-black/30 hover:bg-black/40 hover:border-white transition-all duration-300 rounded-lg shadow-sm hover:shadow-md backdrop-blur-sm group"
            >
              <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg"></span>
              <Calendar
                className="mr-2 text-red-400 group-hover:scale-110 transition-transform duration-300"
                size={16}
              />
              View Schedule
            </Button>
          </AnimatedElement>

          {/* Mobile cards - Only shown on mobile */}
          {isMobile && (
            <AnimatedElement delay={0.8} animation="slideUp" className="mt-6 grid grid-cols-1 gap-3">
              <div className="bg-white/95 rounded-lg p-4 shadow-lg border border-gray-100">
                <div className="flex items-center mb-2">
                  <div className="bg-red-50 p-2 rounded-full mr-3">
                    <Users className="text-red-600 flex-shrink-0" size={18} />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">Classes For All Ages</h3>
                </div>
                <p className="text-sm text-gray-600">Kids, teens, and adults programs available</p>
                <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs text-gray-500">View Details</span>
                  <ArrowRight size={14} className="text-red-500" />
                </div>
              </div>

              <div className="bg-black/80 rounded-lg p-4 shadow-lg border border-red-500/20">
                <div className="flex items-center mb-2">
                  <div className="bg-red-900/50 p-2 rounded-full mr-3">
                    <Trophy className="text-red-400 flex-shrink-0" size={18} />
                  </div>
                  <h3 className="font-semibold text-white text-lg">Championship Dojo</h3>
                </div>
                <p className="text-sm text-gray-300">Multiple regional and national awards</p>
                <div className="mt-2 pt-2 border-t border-red-500/20 flex justify-between items-center">
                  <span className="text-xs text-gray-400">Our Achievements</span>
                  <ArrowRight size={14} className="text-red-400" />
                </div>
              </div>
            </AnimatedElement>
          )}

          <AnimatedElement delay={0.8} animation="slideRight">
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-sm p-4 sm:p-5 rounded-lg border border-white/10 shadow-md">
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <span className="text-gray-200 text-sm sm:text-base">
                  <span className="font-bold text-white">4.9</span> Rating (200+ reviews)
                </span>
              </div>
              <div className="flex items-center">
                <Award className="mr-2 text-red-400" size={16} />
                <span className="text-gray-200 text-sm sm:text-base">Award-winning instruction</span>
              </div>
            </div>
          </AnimatedElement>

          {/* Achievement metrics */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-10 pt-6 sm:pt-10 border-t border-white/20">
            <div className="relative pl-3 sm:pl-4 group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm p-2 sm:p-3 rounded-lg hover:bg-black/40 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500 rounded-l-lg group-hover:h-[85%] group-hover:top-[7.5%] transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="block text-2xl sm:text-3xl font-bold text-white">15+</span>
              <span className="text-gray-300 text-xs sm:text-sm">Years Experience</span>
            </div>
            <div className="relative pl-3 sm:pl-4 group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm p-2 sm:p-3 rounded-lg hover:bg-black/40 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500 rounded-l-lg group-hover:h-[85%] group-hover:top-[7.5%] transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="block text-2xl sm:text-3xl font-bold text-white">500+</span>
              <span className="text-gray-300 text-xs sm:text-sm">Students Trained</span>
            </div>
            <div className="relative pl-3 sm:pl-4 group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm p-2 sm:p-3 rounded-lg hover:bg-black/40 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500 rounded-l-lg group-hover:h-[85%] group-hover:top-[7.5%] transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="block text-2xl sm:text-3xl font-bold text-white">All</span>
              <span className="text-gray-300 text-xs sm:text-sm">Ages Welcome</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-in {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.95); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out forwards;
        }
        .bg-radial-gradient {
          background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%);
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .hero-section {
            min-height: 90vh;
          }
          .diagonal-accent {
            height: 20%;
            -skew-y: 4;
          }
        }
      `}</style>
    </div>
  )
}

export default Hero