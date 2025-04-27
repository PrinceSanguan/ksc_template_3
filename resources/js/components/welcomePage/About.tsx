"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Clock, Users, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const yearBadgeRef = useRef<HTMLDivElement>(null)
  const shapesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const overlay = overlayRef.current
    const content = contentRef.current
    const stats = statsRef.current
    const yearBadge = yearBadgeRef.current
    const shapes = shapesRef.current

    if (section && overlay && content && stats && yearBadge && shapes) {
      // Animate shapes
      gsap.to(shapes.querySelectorAll(".floating-shape"), {
        y: "random(-15, 15)",
        x: "random(-10, 10)",
        rotation: "random(-5, 5)",
        duration: "random(4, 7)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      })

      // Animate red overlay on scroll
      gsap.fromTo(
        overlay,
        { width: "0%" },
        {
          width: "100%",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      )

      // Year badge reveal with bounce
      gsap.fromTo(
        yearBadge,
        { opacity: 0, scale: 0.7, rotation: -5 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
        }
      )

      // Content animation with staggered reveal
      gsap.fromTo(
        content.querySelectorAll("h3, p"),
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
          },
        }
      )

      // Title animation with improved easing
      gsap.fromTo(
        content.querySelector(".title-container"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      )

      // Stats animation with bounce effect and stagger
      gsap.fromTo(
        stats.querySelectorAll(".stat-item"),
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: stats,
            start: "top 90%",
          },
        }
      )

      // Counter animation
      stats.querySelectorAll(".counter").forEach(counter => {
        const target = parseInt(counter.textContent || "0", 10)
        gsap.to({ value: 0 }, {
          value: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: function(this: gsap.core.Tween) {
            const val = Math.round(this.vars.value as number)
            if (counter instanceof HTMLElement) {
              counter.textContent = val.toString()
            }
          },
          scrollTrigger: {
            trigger: stats,
            start: "top 90%",
          }
        })
      })
    }
  }, [])

  return (
    <section
      id="about"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      ref={sectionRef}
    >
      {/* Background image that takes up the left half of the screen */}
      <div className="absolute left-0 top-0 h-full w-full md:w-1/2 overflow-hidden">
        <img
          src="Images/team/88A5D580-B43D-4916-92F9-2B8037264B27-rotated-e1724873881945.jpg"
          alt="Martial Arts Training"
          className="h-full w-full object-cover object-center"
        />

        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>

        {/* Red animated overlay that slides in */}
        <div
          ref={overlayRef}
          className="absolute bottom-0 left-0 w-0 h-1/3 bg-red-600/50 backdrop-blur-sm transform -skew-y-6 origin-bottom-left"
        ></div>

        {/* Animated floating shapes */}
        <div ref={shapesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="floating-shape absolute top-[20%] left-[20%] w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
          <div className="floating-shape absolute bottom-[30%] left-[10%] w-40 h-40 bg-red-600/5 rounded-full blur-xl"></div>
          <div className="floating-shape absolute top-[50%] left-[30%] w-24 h-24 bg-red-700/10 rounded-full blur-3xl"></div>
        </div>

        {/* Year badge with animation */}
        <div
          ref={yearBadgeRef}
          className="absolute top-10 right-10 bg-black/60 backdrop-blur-md rounded-xl px-6 py-3 border-2 border-red-500/50 shadow-[0_0_15px_rgba(220,38,38,0.3)] opacity-0"
        >
          <span className="text-xl font-bold text-white tracking-wider">Est. 1982</span>
        </div>
      </div>

      {/* Content on the right side */}
      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="ml-auto w-full md:w-1/2 md:pl-16" ref={contentRef}>
          <div className="title-container mb-10 opacity-0">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-px w-12 bg-red-500"></div>
              <span className="text-red-500 uppercase tracking-widest text-sm font-bold">Our Legacy</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">
              <span className="block mb-1">Empowering</span>
              <span className="text-red-600">Since 1982</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-400 rounded-full mt-6"></div>
          </div>

          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              Since 1982, Seigler's Karate Center has empowered kids, teens & adults through martial arts. We
              instill life skills like focus, discipline & respect, helping students achieve success on and off the
              mat.
            </p>
            <p className="text-lg leading-relaxed">
              Searching for the perfect martial arts school can feel like a challenge. At SKC, we make it easy for
              you and your family to find your best selves through martial arts. Our skilled instructors are
              committed to understanding your goals and guiding you towards success in a dynamic, engaging, and
              supportive atmosphere.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-12" ref={statsRef}>
            <div className="stat-item rounded-xl border border-gray-200 bg-white/90 p-5 shadow-lg backdrop-blur-sm hover:border-red-400 transition-all duration-300 group transform hover:-translate-y-1">
              <div className="flex flex-col items-center">
                <Clock
                  className="mb-2 text-red-600 group-hover:text-red-500 transition-colors duration-300"
                  size={28}
                />
                <span className="counter block text-3xl font-bold text-black mb-1 group-hover:text-red-600 transition-colors duration-300">
                  40
                </span>
                <span className="text-sm text-gray-600">Years Experience</span>
              </div>
            </div>
            <div className="stat-item rounded-xl border border-gray-200 bg-white/90 p-5 shadow-lg backdrop-blur-sm hover:border-red-400 transition-all duration-300 group transform hover:-translate-y-1">
              <div className="flex flex-col items-center">
                <Users
                  className="mb-2 text-red-600 group-hover:text-red-500 transition-colors duration-300"
                  size={28}
                />
                <span className="counter block text-3xl font-bold text-black mb-1 group-hover:text-red-600 transition-colors duration-300">
                  1000
                </span>
                <span className="text-sm text-gray-600">Happy Students</span>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Button
              variant="default"
              className="group bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 px-8 py-6 text-white font-medium shadow-lg rounded-lg text-lg transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Learn More About Our Story
                <ChevronRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  size={20}
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
