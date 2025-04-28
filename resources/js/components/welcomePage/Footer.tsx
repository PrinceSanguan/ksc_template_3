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
      gsap.fromTo(
        divider.querySelectorAll(".divider-element"),
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: divider,
            start: "top 90%",
          },
        },
      )

      gsap.fromTo(
        divider.querySelector(".divider-emblem"),
        { opacity: 0, scale: 0.5, rotate: -30 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: divider,
            start: "top 90%",
          },
        },
      )
    }

    if (footer && logo) {
      gsap.fromTo(
        logo,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
          },
        },
      )

      gsap.fromTo(
        footer.querySelectorAll(".footer-links li"),
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
          },
        },
      )

      gsap.fromTo(
        footer.querySelectorAll(".social-icon"),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
          },
        },
      )

      gsap.fromTo(
        footer.querySelector(".bottom-bar"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
          },
        },
      )
    }

    if (locationCards) {
      gsap.fromTo(
        locationCards.querySelectorAll(".location-card"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
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
      {/* Fiery Footer Divider */}
      <div ref={dividerRef} className="relative py-4 overflow-hidden bg-gradient-to-b from-red-900 to-red-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="divider-element h-0.5 w-1/4 bg-gradient-to-r from-transparent via-amber-500 to-red-600/50 transform origin-left"></div>

            <div className="divider-emblem relative mx-2 w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-white border-2 border-amber-500/50 shadow-sm"></div>
              <div className="relative z-10 text-red-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
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

            <div className="divider-element h-0.5 w-1/4 bg-gradient-to-l from-transparent via-amber-500 to-red-600/50 transform origin-right"></div>
          </div>
        </div>
      </div>

      {/* Fiery Main Footer */}
      <footer ref={footerRef} className="bg-gradient-to-b from-red-800 to-red-900 pt-10 pb-6 text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-8">
            {/* Logo and About Column */}
            <div className="lg:col-span-4">
              <div ref={logoRef} className="mb-3">
                <div className="flex items-center">
                  <span className="font-['Playfair_Display'] text-2xl font-bold text-white">Seigler's</span>
                  <span className="ml-2 font-['Raleway'] text-lg font-medium text-amber-400">Karate Center</span>
                </div>
              </div>
              <p className="text-amber-100 mb-4 text-sm font-['Raleway']">
                Igniting passion through martial arts. Join our fiery community for strength and discipline.
              </p>

              <div className="flex space-x-3 mb-6">
                {navigation.socialMedia.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="social-icon w-8 h-8 rounded-full bg-red-700 flex items-center justify-center text-amber-300 hover:bg-gradient-to-br hover:from-amber-500 hover:to-red-600 hover:text-white transition-colors duration-300 shadow-sm"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="lg:col-span-2">
              <h3 className="text-base font-bold mb-4 text-white font-['Playfair_Display']">Quick Links</h3>
              <ul className="footer-links space-y-2">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="inline-flex items-center text-sm text-amber-100 hover:text-white transition-colors duration-200 font-['Raleway']"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 text-amber-400" /> {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs Column */}
            <div className="lg:col-span-2">
              <h3 className="text-base font-bold mb-4 text-white font-['Playfair_Display']">Programs</h3>
              <ul className="footer-links space-y-2">
                {navigation.programs.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="inline-flex items-center text-sm text-amber-100 hover:text-white transition-colors duration-200 font-['Raleway']"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 text-amber-400" /> {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="lg:col-span-4">
              <h3 className="text-base font-bold mb-4 text-white font-['Playfair_Display']">Contact Us</h3>

              <div ref={locationCardsRef} className="space-y-3">
                {/* Evans Location */}
                <div className="location-card bg-red-700/80 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-red-600/30">
                  <h4 className="font-bold text-sm text-white mb-1 font-['Raleway']">Evans Location</h4>
                  <div className="space-y-1">
                    <p className="flex items-start text-xs text-amber-100">
                      <MapPin className="h-4 w-4 mr-1 text-amber-300 flex-shrink-0 mt-0.5" />
                      <span>4158 Washington Rd, Evans, GA 30809</span>
                    </p>
                    <p className="flex items-center text-xs text-amber-100">
                      <Phone className="h-4 w-4 mr-1 text-amber-300 flex-shrink-0" />
                      <span>(706) 210-3500</span>
                    </p>
                  </div>
                </div>

                {/* Grovetown Location */}
                <div className="location-card bg-red-700/80 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-red-600/30">
                  <h4 className="font-bold text-sm text-white mb-1 font-['Raleway']">Grovetown Location</h4>
                  <div className="space-y-1">
                    <p className="flex items-start text-xs text-amber-100">
                      <MapPin className="h-4 w-4 mr-1 text-amber-300 flex-shrink-0 mt-0.5" />
                      <span>5121 Wrightsboro Rd, Grovetown, GA 30813</span>
                    </p>
                    <p className="flex items-center text-xs text-amber-100">
                      <Phone className="h-4 w-4 mr-1 text-amber-300 flex-shrink-0" />
                      <span>(706) 869-8066</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar with Copyright */}
          <div className="bottom-bar pt-6 mt-6 border-t border-red-600/30 text-center text-xs text-amber-100 font-['Raleway']">
            <p>&copy; {currentYear} Seigler's Karate Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer