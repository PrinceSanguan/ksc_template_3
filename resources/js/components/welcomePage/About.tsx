"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Trophy, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Simple fade-in animations
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelector(".title-section"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      )

      gsap.fromTo(
        sectionRef.current.querySelector(".content-section"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      )
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-16">
      <div className="container mx-auto px-6">
        {/* Title section */}
        <div className="title-section text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-px w-8 bg-red-500"></div>
            <span className="text-red-500 uppercase tracking-wider text-sm font-semibold">Our Story</span>
            <div className="h-px w-8 bg-red-500"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Augusta's Premier Martial Arts Academy Since 1982
          </h2>
          <div className="mx-auto h-1 w-20 bg-red-500 rounded-full"></div>
        </div>

        {/* Main content */}
        <div className="content-section grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Image column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="/Images/team/88A5D580-B43D-4916-92F9-2B8037264B27-rotated-e1724873881945.jpg"
                alt="Martial Arts Training"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg px-3 py-2 shadow-md">
                <div className="flex">
                  <Trophy className="text-red-500 mr-2" size={20} />
                  <span className="font-bold text-gray-900">40+ Years of Excellence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="text-lg text-gray-700 mb-6">
              Founded in 1982 by Master John Seigler, Seigler's Karate Center has been the cornerstone of martial arts training in Augusta for over four decades. What began as a small dojo has grown into the region's premier martial arts academy.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Our philosophy extends beyond physical training - we cultivate discipline, confidence, and respect that students carry into all aspects of their lives.
            </p>

            {/* Core values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center p-4 bg-red-50 rounded-lg">
                <Award className="text-red-500 mb-2" size={24} />
                <h3 className="font-bold text-gray-900 mb-1">Traditional Karate</h3>
                <p className="text-sm text-gray-600">Authentic Shotokan techniques</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-red-50 rounded-lg">
                <Clock className="text-red-500 mb-2" size={24} />
                <h3 className="font-bold text-gray-900 mb-1">Modern Methods</h3>
                <p className="text-sm text-gray-600">Scientific training approach</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-red-50 rounded-lg">
                <Trophy className="text-red-500 mb-2" size={24} />
                <h3 className="font-bold text-gray-900 mb-1">Championship Spirit</h3>
                <p className="text-sm text-gray-600">Discipline and respect</p>
              </div>
            </div>

            <Button className="bg-red-500 hover:bg-red-600 text-white">
              Explore Our Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About