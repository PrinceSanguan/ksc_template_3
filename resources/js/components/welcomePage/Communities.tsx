"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Communities = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)
  const highlightRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const cards = cardsRef.current
    const highlight = highlightRef.current

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
          },
        },
      )
    }

    // Cards animation
    if (cards) {
      gsap.fromTo(
        cards.querySelectorAll(".location-card"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cards,
            start: "top 85%",
          },
        },
      )
    }

    // Moving highlight effect
    if (highlight) {
      gsap.to(highlight, {
        x: "100%",
        duration: 8,
        repeat: -1,
        ease: "linear",
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const locations = [
    {
      id: 1,
      title: "Augusta",
      subtitle: "Georgia",
      description:
        "Our flagship location serving the Augusta area with comprehensive martial arts programs for all ages and skill levels.",
      status: "Core Location",
      image: "/Images/team/Augusta-Riverwalk-Best-Things-to-do-in-Augusta.jpg",
      address: "123 Main Street, Augusta, GA 30901",
    },
    {
      id: 2,
      title: "Martinez",
      subtitle: "Georgia",
      description:
        "Serving the Martinez community with our signature martial arts training and character development programs.",
      status: "Growing Community",
      image: "/Images/team/535b81457a154c1399dfddd432cbf866_716x444.jpg",
      address: "456 Oak Avenue, Martinez, GA 30907",
    },
    {
      id: 3,
      title: "Grovetown",
      subtitle: "Georgia",
      description:
        "271 Meridian Drive Grovetown, GA 30813 - Our newest location bringing martial arts excellence to the Grovetown area.",
      status: "New Location",
      image: "/Images/team/ga388endgrovetown.webp",
      address: "271 Meridian Drive, Grovetown, GA 30813",
    },
    {
      id: 4,
      title: "Evans",
      subtitle: "Georgia",
      description:
        "4150 Washington Road, Suite 4, Evans, GA, 30809 - Serving Evans with professional martial arts instruction for all ages.",
      status: "Main Dojo",
      image: "/Images/team/adobestock-469148590.jpg",
      address: "4150 Washington Road, Suite 4, Evans, GA 30809",
    },
  ]

  return (
    <section
      id="locations"
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-white"
    >
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 bg-neutral-50 bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] bg-[size:20px_20px] opacity-50"></div>

      {/* Angled highlight effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={highlightRef}
          className="absolute -inset-full skew-x-12 transform -translate-x-full bg-gradient-to-r from-transparent via-red-100/20 to-transparent"
        ></div>
      </div>

      {/* Red accent line with gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-700 via-red-600 to-red-700"></div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="title-container mb-16 text-center max-w-3xl mx-auto">
          {/* Enhanced header label */}
          <div className="inline-block mb-4 relative">
            <div className="absolute inset-0 bg-red-600/20 blur rounded-full"></div>
            <span className="relative bg-red-600 text-white uppercase tracking-widest text-sm font-bold px-6 py-2 rounded-full">
              OUR LOCATIONS
            </span>
          </div>

          {/* Enhanced heading with typography */}
          <h2 className="mb-6 text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
            <span className="relative inline-block">
              Communities
              <span className="absolute -bottom-1 left-0 w-full h-3 bg-red-100"></span>
            </span>
            {" "}
            <span>We Serve</span>
          </h2>

          {/* Enhanced description with clean styling */}
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Providing high-quality martial arts instruction throughout the CSRA area.
            Find a location near you and start your martial arts journey today.
          </p>

          {/* Enhanced divider */}
          <div className="flex justify-center mt-8 mb-4">
            <div className="h-px w-4 bg-neutral-300"></div>
            <div className="h-px w-16 bg-red-600 mx-1"></div>
            <div className="h-px w-4 bg-neutral-300"></div>
          </div>
        </div>

        {/* Enhanced card grid with 2x2 layout */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {locations.map((location) => (
            <div
              key={location.id}
              className="location-card group relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:translate-y-[-8px] shadow-sm hover:shadow-lg border border-neutral-100"
            >
              {/* Enhanced image container */}
              <div className="relative h-60 overflow-hidden">
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10 z-10"></div>

                <img
                  src={location.image || "/placeholder.svg"}
                  alt={location.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Enhanced status badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-white/90 backdrop-blur-sm text-neutral-900 text-xs font-medium px-3 py-1 rounded-full shadow-sm border border-white/10">
                    {location.status}
                  </div>
                </div>

                {/* Enhanced location title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <h3 className="text-2xl font-bold text-white mb-1">{location.title}</h3>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-red-500 mr-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-white/90 text-sm tracking-wide">{location.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Enhanced content area */}
              <div className="p-6">
                {/* Address line */}
                <div className="mb-3 pb-3 border-b border-neutral-100">
                  <p className="text-neutral-500 text-sm font-medium">
                    {location.address}
                  </p>
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed mb-5">
                  {location.description}
                </p>

                {/* Enhanced button */}
                <Button
                  className="w-full bg-neutral-50 hover:bg-neutral-100 text-neutral-900 border border-neutral-200 transition-all duration-300 group flex items-center justify-center py-2.5 rounded-md relative overflow-hidden"
                >
                  <span className="absolute inset-0 w-0 bg-red-50 transition-all duration-300 group-hover:w-full"></span>
                  <svg
                    className="w-4 h-4 mr-2 text-red-600 relative z-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="relative z-10 font-medium">Get Directions</span>
                </Button>
              </div>

              {/* Enhanced corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-[-8px] right-[-8px] w-8 h-8 bg-red-600/10 rotate-45 transform origin-bottom-left"></div>
              </div>

              {/* Enhanced bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600/0 via-red-600 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced additional information and CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block mx-auto mb-10 bg-neutral-50 p-5 rounded-lg border border-neutral-200 shadow-sm relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
            <p className="text-neutral-600">
              We also proudly serve: North Augusta, SC, Appling, GA, Harlem, GA, Fort Eisenhower, GA, and surrounding
              areas.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
          </div>

          {/* Enhanced classes badge */}
          <div className="inline-flex items-center justify-center gap-3 py-3.5 px-7 bg-white rounded-full border border-neutral-200 shadow-sm mb-12 hover:border-red-200 transition-colors duration-300">
            <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14.5C15.3137 14.5 18 11.8137 18 8.5C18 5.18629 15.3137 2.5 12 2.5C8.68629 2.5 6 5.18629 6 8.5C6 11.8137 8.68629 14.5 12 14.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 21.5C16 19.8431 14.2091 18.5 12 18.5C9.79086 18.5 8 19.8431 8 21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 16.95C20.0172 16.8025 20.0333 16.6522 20.0333 16.5C20.0333 14.0147 16.4153 12 12 12C7.58467 12 4 14.0147 4 16.5C4 16.6522 4.01601 16.8025 4.03333 16.95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-neutral-800 font-medium">Classes For All Ages</span>
          </div>

          {/* Enhanced CTA Button */}
          <Button
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-4 rounded-md transition-all duration-300 group flex items-center justify-center mx-auto shadow-md hover:shadow-lg relative overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-0 bg-white/10 transition-all duration-300 ease-out group-hover:h-full"></span>
            <span className="relative z-10 flex items-center">
              Contact Us For More Locations
              <svg
                className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Communities