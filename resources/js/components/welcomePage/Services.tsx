"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Services = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const cards = cardsRef.current

    // Title animation
    if (section) {
      gsap.fromTo(
        section.querySelector(".title-container"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          }
        }
      )
    }

    // Cards animation
    if (cards) {
      const programCards = cards.querySelectorAll(".program-card")

      gsap.fromTo(
        programCards,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: cards,
            start: "top 80%",
          }
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const programs = [
    {
      id: 1,
      title: "Lil Dragons",
      ageRange: "4 – 5",
      description: "Empower your child with our Lil Dragons martial arts classes. Designed to channel their boundless curiosity and energy, our expert instructors provide vibrant, engaging lessons.",
      icon: (
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      image: "Images/team/TN-Lil-Dragons.jpg"
    },
    {
      id: 2,
      title: "Kids Karate",
      ageRange: "6 – 10",
      description: "Our kids martial arts classes provide children with valuable benefits such as increased confidence, discipline, resilience, and self-defense skills.",
      icon: (
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      image: "Images/team/TN-Kids-Karate.jpg"
    },
    {
      id: 3,
      title: "Teens Karate",
      ageRange: "11 – 13",
      description: "Ignite your teenager's journey from youth to adulthood with our martial arts classes. Enhance their emotional intelligence and empower them to unlock their full potential.",
      icon: (
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      image: "Images/team/TN-Teen-Karate.jpg"
    },
    {
      id: 4,
      title: "Adult Kempo Karate",
      ageRange: "14+",
      description: "Discover our adult martial arts classes—a dynamic fusion of fitness, self-defense, and fun. Join us to boost your health, learn practical self-defense skills.",
      icon: (
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      image: "Images/team/ADULTKEMPO.jpg"
    },
    {
      id: 5,
      title: "Kickboxing",
      ageRange: "14+",
      description: "Experience the transformative power of Kickboxing! Each class brings you closer to mastering techniques, building strength, and boosting confidence.",
      icon: (
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      ),
      image: "Images/team/88A5D580-B43D-4916-92F9-2B8037264B27-rotated-e1724873881945.jpg"
    },
    {
      id: 6,
      title: "Jiu Jitsu",
      ageRange: "14+",
      description: "Ready to enhance your life and well-being? Discover the physical, mental, and social benefits of Tetsu Shin Ryu Jiu-Jitsu and transform your fitness and resilience.",
      icon: (
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      image: "Images/team/JIU JITSU.jpg"
    },
  ]

  return (
    <section
      id="programs"
      className="relative py-24 overflow-hidden bg-white"
      ref={sectionRef}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-neutral-50 bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] bg-[size:20px_20px] opacity-50"></div>

      {/* Red accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="title-container max-w-3xl mx-auto text-center mb-16">
          {/* Header label */}
          <div className="inline-block mb-4">
            <span className="bg-red-600 text-white uppercase tracking-widest text-sm font-bold px-6 py-2 rounded-full">
              OUR PROGRAMS
            </span>
          </div>

          {/* Main heading with clean typography */}
          <h2 className="mb-6 text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
            Martial Arts Classes
          </h2>

          {/* Description with clean styling */}
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the perfect martial arts program at SKC! Our diverse classes cater to all ages and skill levels,
            ensuring everyone finds their path to excellence.
          </p>

          {/* Red divider */}
          <div className="flex justify-center mt-8 mb-4">
            <div className="h-px w-16 bg-red-600"></div>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {programs.map((program) => (
            <div
              key={program.id}
              className="program-card group relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:translate-y-[-8px] shadow-sm hover:shadow-md"
            >
              {/* Image with minimal overlay */}
              <div className="relative h-56 overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 z-10"></div>

                <img
                  src={program.image || "/placeholder.svg"}
                  alt={`${program.title} martial arts class`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Age badge */}
                <div className="absolute top-4 right-4 z-30">
                  <div className="bg-white text-neutral-900 text-xs font-medium px-3 py-1 rounded-full">
                    Ages {program.ageRange}
                  </div>
                </div>

                {/* Program title */}
                <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                  <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                </div>
              </div>

              {/* Content area */}
              <div className="p-6 border-t border-neutral-100">
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex-shrink-0 p-2 bg-red-600 text-white rounded-md">
                    {program.icon}
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mt-4 pt-4 border-t border-neutral-100">
                  <button className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center transition-all duration-300 group">
                    View Program Details
                    <svg
                      className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Bottom red accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-200 mb-8">
            <h3 className="text-neutral-900 text-xl font-semibold mb-3">Ready to Begin Your Martial Arts Journey?</h3>
            <p className="text-neutral-600 mb-6">
              Join our community of martial artists and experience the transformative power of discipline,
              respect, and self-improvement. All skill levels welcome!
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-md transition-all duration-300 flex items-center justify-center mx-auto">
              <span>Schedule Your Free Trial Class</span>
              <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button>
          </div>

          {/* Classes for all ages badge */}
          <div className="inline-flex items-center justify-center gap-3 py-3 px-6 bg-white rounded-full border border-neutral-200 shadow-sm">
            <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14.5C15.3137 14.5 18 11.8137 18 8.5C18 5.18629 15.3137 2.5 12 2.5C8.68629 2.5 6 5.18629 6 8.5C6 11.8137 8.68629 14.5 12 14.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 21.5C16 19.8431 14.2091 18.5 12 18.5C9.79086 18.5 8 19.8431 8 21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 16.95C20.0172 16.8025 20.0333 16.6522 20.0333 16.5C20.0333 14.0147 16.4153 12 12 12C7.58467 12 4 14.0147 4 16.5C4 16.6522 4.01601 16.8025 4.03333 16.95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-neutral-800 font-medium">Classes For All Ages</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
