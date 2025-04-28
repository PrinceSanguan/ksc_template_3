"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Location = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)

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
        cardsRef.current.querySelectorAll(".location-card"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.6,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        },
      )
    }
    
    // Map animation
    if (mapRef.current) {
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 85%",
          },
        },
      )
    }
  }, [])

  const locations = [
    {
      id: 1,
      name: "Evans Location",
      address: "4150 Washington Road, Suite 4",
      city: "Evans",
      state: "GA",
      zip: "30809",
      phone: "(706) 855-5685",
      hours: "Mon-Fri: 4pm-8pm, Sat: 9am-12pm",
      features: [
        "State-of-the-art dojo",
        "Certified black belt instructors",
        "Specialized youth programs",
        "Adult martial arts classes",
      ],
      status: "Main Location"
    },
    {
      id: 2,
      name: "Grovetown Location",
      address: "271 Meridian Drive",
      city: "Grovetown",
      state: "GA",
      zip: "30813",
      phone: "(706) 855-5685",
      hours: "Mon-Fri: 4pm-8pm, Sat: 9am-12pm",
      features: ["Modern training facility", "Family classes", "After-school programs", "Advanced belt training"],
      status: "Active"
    },
    {
      id: 3,
      name: "Augusta Location",
      address: "Coming Soon",
      city: "Augusta",
      state: "GA",
      zip: "",
      phone: "(706) 855-5685",
      hours: "Opening Fall 2023",
      features: ["Pre-registration available", "Grand opening specials", "All ages welcome", "New student orientation"],
      status: "Coming Soon"
    },
  ]

  return (
    <section id="locations" ref={sectionRef} className="py-16">
      <div className="container mx-auto px-4">
        {/* Title section */}
        <div className="title-container mb-10">
          <div className="flex items-center mb-4">
            <div className="h-1 w-12 bg-red-500 rounded-full mr-4"></div>
            <span className="text-red-500 uppercase tracking-wider text-sm font-semibold">Find Us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Locations
          </h2>
          
          <p className="text-gray-600 max-w-2xl">
            Find a Seigler's Karate Center near you and start your martial arts journey today.
          </p>
        </div>

        {/* Featured location map */}
        <div ref={mapRef} className="mb-12 bg-gray-100 rounded-lg overflow-hidden shadow-md">
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="inline-block bg-red-50 text-red-500 text-xs font-medium px-3 py-1 rounded-full mb-4">
                Main Location
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Evans Location</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-800">4150 Washington Road, Suite 4</p>
                    <p className="text-gray-800">Evans, GA 30809</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-gray-800">(706) 855-5685</p>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-800">Mon-Fri: 4pm-8pm, Sat: 9am-12pm</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-red-500 hover:bg-red-600 text-white transition-colors duration-300 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Visit Location
                </Button>
                
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </Button>
              </div>
            </div>
            
            <div className="h-64 md:h-auto bg-gray-300 flex items-center justify-center">
              <div className="text-gray-500">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-center">Interactive Map</p>
              </div>
            </div>
          </div>
        </div>

        {/* All locations */}
        <h3 className="text-xl font-bold text-gray-900 mb-6">All Locations</h3>
        <div ref={cardsRef} className="grid gap-6 md:grid-cols-3 mb-12">
          {locations.map((location) => (
            <div
              key={location.id}
              className="location-card bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-5 border-b border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-gray-900">{location.name}</h4>
                  <span className="bg-red-50 text-red-500 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {location.status}
                  </span>
                </div>
                
                <div className="text-sm text-gray-600 mb-1">
                  {location.address}
                </div>
                <div className="text-sm text-gray-600">
                  {location.city}, {location.state} {location.zip}
                </div>
              </div>
              
              <div className="p-5">
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-xs text-gray-700">Phone</span>
                  </div>
                  <div className="text-xs text-gray-900">{location.phone}</div>
                  
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-gray-700">Hours</span>
                  </div>
                  <div className="text-xs text-gray-900">{location.hours}</div>
                </div>
                
                <h5 className="text-sm font-medium text-gray-900 mb-2">Features:</h5>
                <ul className="text-xs text-gray-700 space-y-1">
                  {location.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-3 h-3 text-red-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 text-sm"
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact section */}
        <div className="bg-gray-50 rounded-lg p-6 text-center max-w-2xl mx-auto">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Need More Information?</h3>
          <p className="text-gray-600 mb-5">
            Email us at{" "}
            <a
              href="mailto:skc@goskc.com"
              className="text-red-500 hover:text-red-600 transition-colors duration-300 font-medium"
            >
              skc@goskc.com
            </a>{" "}
            for more information or to schedule a tour of any of our locations.
          </p>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white transition-colors duration-300 inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us About Locations
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Location