"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const featuredRef = useRef<HTMLDivElement>(null)

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
          }
        }
      )
      
      if (featuredRef.current) {
        gsap.fromTo(
          featuredRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            scrollTrigger: {
              trigger: featuredRef.current,
              start: "top 80%",
            }
          }
        )
      }
    }

    // Cards animation
    if (cardsRef.current) {
      const programCards = cardsRef.current.querySelectorAll(".program-card")

      gsap.fromTo(
        programCards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          scrollTrigger: {
            trigger: cardsRef.current,
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
      className="py-16"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        {/* Title section */}
        <div className="title-container max-w-3xl mx-auto mb-12">
          <div className="flex items-center mb-4">
            <div className="h-1 w-12 bg-red-500 rounded-full mr-4"></div>
            <span className="text-red-500 uppercase tracking-wider text-sm font-semibold">Our Programs</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Martial Arts Classes For All Ages
          </h2>
          
          <p className="text-gray-600 max-w-2xl">
            Discover the perfect martial arts program at SKC! Our diverse classes cater to all ages and skill levels,
            ensuring everyone finds their path to excellence.
          </p>
        </div>

        {/* Featured program - New section */}
        <div ref={featuredRef} className="mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative">
                <img 
                  src={programs[0].image} 
                  alt={programs[0].title}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-xs font-medium text-gray-900 shadow-md">
                  Ages {programs[0].ageRange}
                </div>
              </div>
              
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <div className="inline-block bg-red-50 rounded-lg px-3 py-1 text-red-500 text-sm font-medium mb-4">
                  Featured Program
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{programs[0].title}</h3>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-2 bg-red-500 text-white rounded-md">
                    {programs[0].icon}
                  </div>
                  <p className="text-gray-600">
                    {programs[0].description}
                  </p>
                </div>
                
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Build confidence and focus</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Develop coordination and balance</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Learn respect and discipline</span>
                  </li>
                </ul>
                
                <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-lg inline-flex items-center transition-colors duration-300 self-start">
                  View Program Details
                  <svg
                    className="w-5 h-5 ml-2"
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
          </div>
        </div>

        {/* Program cards in a different layout */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">More Programs</h3>
            <div className="text-sm text-gray-500">Browse by age group</div>
          </div>
          
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {programs.slice(1).map((program) => (
              <div
                key={program.id}
                className="program-card bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                  <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 text-xs font-medium text-gray-900">
                    Ages {program.ageRange}
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-xl font-bold text-white">{program.title}</h3>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0 p-2 bg-red-500 text-white rounded-md">
                      {program.icon}
                    </div>
                    <p className="text-gray-600 text-sm">{program.description}</p>
                  </div>
                  
                  <button className="text-red-500 hover:text-red-600 font-medium text-sm flex items-center transition-colors duration-300">
                    View Program Details
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1"
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
            ))}
          </div>
        </div>
        
        {/* Program selector - New tabbed navigation */}
        <div className="my-12 bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Find The Perfect Program</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-bold text-lg text-gray-900 mb-4">Children</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 hover:text-red-500 transition-colors duration-300">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Lil Dragons (Ages 4-5)</span>
                </li>
                <li className="flex items-center text-gray-600 hover:text-red-500 transition-colors duration-300">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Kids Karate (Ages 6-10)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-bold text-lg text-gray-900 mb-4">Teens</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 hover:text-red-500 transition-colors duration-300">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Teens Karate (Ages 11-13)</span>
                </li>
                <li className="flex items-center text-gray-600 hover:text-red-500 transition-colors duration-300">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Teen Self-Defense</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-bold text-lg text-gray-900 mb-4">Adults</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 hover:text-red-500 transition-colors duration-300">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Adult Kempo Karate (14+)</span>
                </li>
                <li className="flex items-center text-gray-600 hover:text-red-500 transition-colors duration-300">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Kickboxing (14+)</span>
                </li>
                <li className="flex items-center text-gray-600 hover:text-red-500 transition-colors duration-300">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Jiu Jitsu (14+)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Begin Your Martial Arts Journey?</h3>
            <p className="text-gray-600 mb-6">
              Join our community of martial artists and experience the transformative power of discipline,
              respect, and self-improvement. All skill levels welcome!
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center mx-auto">
              <span>Schedule Your Free Trial Class</span>
              <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services