"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Communities = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Simple fade-in animations
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelector(".title-container"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )
    }

    // Cards animation
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.querySelectorAll(".location-item"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.7,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        },
      )
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
      className="py-16"
    >
      <div className="container mx-auto px-4">
        {/* Title section - Left aligned */}
        <div className="title-container mb-12 md:mb-16 max-w-3xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-1 bg-red-500 rounded-full mr-4"></div>
            <span className="text-red-500 uppercase tracking-wider text-sm font-semibold">Our Locations</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Communities We Serve
          </h2>
          
          <p className="text-gray-600 max-w-2xl">
            Providing high-quality martial arts instruction throughout the CSRA area.
            Find a location near you and start your martial arts journey today.
          </p>
        </div>

        {/* Featured location - Full width showcase */}
        <div className="mb-12 overflow-hidden rounded-xl shadow-lg border border-gray-200">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img
                src={locations[0].image}
                alt={locations[0].title}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-1 shadow-md">
                <span className="font-medium text-gray-900">{locations[0].status}</span>
              </div>
            </div>
            
            <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 text-red-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-600">{locations[0].subtitle}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{locations[0].title}</h3>
              
              <p className="text-gray-600 mb-4">{locations[0].description}</p>
              
              <div className="bg-gray-100 rounded-lg p-4 mb-5">
                <p className="text-gray-700 font-medium">{locations[0].address}</p>
              </div>
              
              <Button
                className="bg-red-500 hover:bg-red-600 text-white self-start px-6 py-3 rounded-lg flex items-center gap-2"
              >
                Get Directions
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Other locations - List view */}
        <div ref={cardsRef} className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">More Locations</h3>
          
          <div className="space-y-4">
            {locations.slice(1).map((location) => (
              <div 
                key={location.id}
                className="location-item flex flex-col md:flex-row border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="md:w-1/4 h-40 md:h-auto relative">
                  <img
                    src={location.image}
                    alt={location.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-l from-transparent to-black/40"></div>
                  <div className="absolute top-3 right-3 md:top-auto md:right-auto md:bottom-3 md:left-3">
                    <span className="bg-white/90 text-gray-900 text-xs font-medium px-2 py-1 rounded shadow-sm">
                      {location.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-5 md:p-6 md:w-3/4 flex flex-col md:flex-row md:items-center">
                  <div className="md:w-2/3 mb-4 md:mb-0 md:pr-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{location.title}, {location.subtitle}</h4>
                    <p className="text-gray-600 text-sm mb-2">{location.address}</p>
                    <p className="text-gray-700 text-sm">{location.description}</p>
                  </div>
                  
                  <div className="md:w-1/3 md:border-l md:border-gray-200 md:pl-6 flex items-center">
                    <Button
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 flex items-center justify-center gap-2 py-2.5"
                    >
                      <svg
                        className="w-4 h-4 text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Get Directions</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map and additional locations callout */}
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          <div className="md:w-2/3 bg-gray-100 rounded-xl p-6 flex flex-col justify-center items-center">
            <div className="w-full h-64 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-center text-gray-600">Interactive map placeholder - displays all of our locations</p>
          </div>
          
          <div className="md:w-1/3 flex flex-col justify-between">
            <div className="bg-red-50 rounded-xl p-6 mb-4 md:mb-0 border border-red-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Additional Areas</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">North Augusta, SC</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">Appling, GA</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">Harlem, GA</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">Fort Eisenhower, GA</span>
                </li>
              </ul>
            </div>
            
            <Button
              className="bg-gray-900 hover:bg-black text-white px-6 py-4 rounded-lg flex items-center justify-center gap-2"
            >
              Contact For More Locations
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Communities