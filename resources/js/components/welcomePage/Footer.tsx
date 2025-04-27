"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Facebook, Instagram, Twitter, Youtube, Phone, MapPin, ChevronRight } from "lucide-react"

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)
  const locationCardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const footer = footerRef.current
    const logo = logoRef.current
    const divider = dividerRef.current
    const locationCards = locationCardsRef.current

    if (divider) {
      // Animate the divider elements
      gsap.fromTo(
        divider.querySelectorAll(".divider-element"),
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: divider,
            start: "top 90%",
          },
        },
      )

      // Animate the center emblem
      gsap.fromTo(
        divider.querySelector(".divider-emblem"),
        { opacity: 0, scale: 0.5, rotate: -30 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: divider,
            start: "top 90%",
          },
        },
      )
    }

    if (footer && logo) {
      // Animate logo with more dynamic effect
      gsap.fromTo(
        logo,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
          },
        },
      )

      // Stagger animate links with better timing
      gsap.fromTo(
        footer.querySelectorAll(".footer-links li"),
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
          },
        },
      )

      // Animate social icons with bounce effect
      gsap.fromTo(
        footer.querySelectorAll(".social-icon"),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
          },
        },
      )

      // Animate bottom bar
      gsap.fromTo(
        footer.querySelector(".bottom-bar"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
          },
        },
      )
    }

    // Animate location cards
    if (locationCards) {
      gsap.fromTo(
        locationCards.querySelectorAll(".location-card"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: locationCards,
            start: "top 90%",
          },
        }
      )
    }
  }, [])

  const navigation = {
    main: [
      { name: "Home", href: "#" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Communities", href: "#communities" },
      { name: "Blog", href: "#blog" },
      { name: "Contact", href: "#contact" },
    ],
    programs: [
      { name: "Kids Karate", href: "#" },
      { name: "Adult Martial Arts", href: "#" },
      { name: "Kickboxing", href: "#" },
      { name: "Self Defense", href: "#" },
      { name: "Private Lessons", href: "#" },
    ],
    socialMedia: [
      { name: "Facebook", href: "#", icon: Facebook },
      { name: "Instagram", href: "#", icon: Instagram },
      { name: "Twitter", href: "#", icon: Twitter },
      { name: "YouTube", href: "#", icon: Youtube },
    ],
  }

  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* Footer Divider */}
      <div ref={dividerRef} className="relative py-8 overflow-hidden bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Decorative divider with martial arts emblem */}
          <div className="flex items-center justify-center">
            <div className="divider-element h-0.5 w-1/3 bg-gradient-to-r from-transparent via-blue-500 to-indigo-500/50 transform origin-left"></div>

            <div className="divider-emblem relative mx-4 w-16 h-16 flex items-center justify-center">
              {/* Circular background */}
              <div className="absolute inset-0 rounded-full bg-white border-2 border-blue-500/50 shadow-md"></div>

              {/* Martial arts fist symbol */}
              <div className="relative z-10 text-blue-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  {/* Fist icon */}
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                  <path d="M7 11v8" />
                  <path d="M11 11v8" />
                  <path d="M15 11v8" />
                  <path d="M15 3.86a4 4 0 0 1 1.5 7.23" />
                  <path d="M13 3.86a4 4 0 0 1 1.5 7.23" />
                  <path d="M11 3.86a4 4 0 0 1 1.5 7.23" />
                  <path d="M9 3.86a4 4 0 0 1 1.5 7.23" />
                </svg>
              </div>
            </div>

            <div className="divider-element h-0.5 w-1/3 bg-gradient-to-l from-transparent via-blue-500 to-indigo-500/50 transform origin-right"></div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer ref={footerRef} className="bg-gray-100 pt-16 pb-8 text-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
            {/* Logo and About Column */}
            <div className="lg:col-span-4">
              <div ref={logoRef} className="mb-4">
                <div className="flex items-center">
                  <span className="font-['Playfair_Display'] text-3xl font-bold text-gray-900">Seigler's</span>
                  <span className="ml-2 font-['Raleway'] text-xl font-medium text-blue-600">Karate Center</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6 font-['Raleway']">
                At Seigler's Karate Center, we believe in the power of martial arts to transform lives. Join our community and embark on a journey of self-improvement, discipline, and achievement.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mb-8">
                {navigation.socialMedia.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="social-icon w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 shadow-sm"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold mb-6 text-gray-900 font-['Playfair_Display']">Quick Links</h3>
              <ul className="footer-links space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 font-['Raleway']"
                    >
                      <ChevronRight className="h-3 w-3 mr-2" /> {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs Column */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold mb-6 text-gray-900 font-['Playfair_Display']">Programs</h3>
              <ul className="footer-links space-y-3">
                {navigation.programs.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 font-['Raleway']"
                    >
                      <ChevronRight className="h-3 w-3 mr-2" /> {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="lg:col-span-4">
              <h3 className="text-lg font-bold mb-6 text-gray-900 font-['Playfair_Display']">Contact Us</h3>

              <div ref={locationCardsRef} className="space-y-4">
                {/* Evans Location */}
                <div className="location-card bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2 font-['Raleway']">Evans Location</h4>
                  <div className="space-y-2">
                    <p className="flex items-start text-gray-600">
                      <MapPin className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>4158 Washington Rd, Evans, GA 30809</span>
                    </p>
                    <p className="flex items-center text-gray-600">
                      <Phone className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" />
                      <span>(706) 210-3500</span>
                    </p>
                  </div>
                </div>

                {/* Grovetown Location */}
                <div className="location-card bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2 font-['Raleway']">Grovetown Location</h4>
                  <div className="space-y-2">
                    <p className="flex items-start text-gray-600">
                      <MapPin className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>5121 Wrightsboro Rd, Grovetown, GA 30813</span>
                    </p>
                    <p className="flex items-center text-gray-600">
                      <Phone className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" />
                      <span>(706) 869-8066</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar with Copyright */}
          <div className="bottom-bar pt-8 mt-8 border-t border-gray-200 text-center text-gray-600 text-sm font-['Raleway']">
            <p>&copy; {currentYear} Seigler's Karate Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
