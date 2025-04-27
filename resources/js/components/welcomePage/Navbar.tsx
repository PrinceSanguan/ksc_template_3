"use client"

import { Link } from "@inertiajs/react"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useWindowScroll } from "@/hooks/useWindowScroll"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

type NavbarProps = {
  transparent?: boolean
}

const Navbar = ({ transparent = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const scrollY = useWindowScroll()
  const isScrolled = scrollY > 10
  const isMobile = useMediaQuery("(max-width: 1023px)")
  const navbarRef = useRef<HTMLElement>(null)
  const navbarBgRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false)
    }
  }, [isMobile, isOpen])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  useEffect(() => {
    // Register GSAP plugins
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    // Navbar animation on mount
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power3.out",
    })

    // Logo animation
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "back.out(1.7)",
        },
      )
    }

    // Navbar scroll animation with enhanced styling
    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(navbarBgRef.current, {
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(226, 232, 240, 1)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
          duration: 0.3,
        })
      } else {
        gsap.to(navbarBgRef.current, {
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(5px)",
          borderBottom: "1px solid rgba(226, 232, 240, 0.5)",
          boxShadow: "none",
          duration: 0.3,
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

      return () => {
        window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Add CSS styles directly to the head for the hover behavior
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      /* Common dropdown styles */
      .nav-dropdown {
        position: relative;
      }

      .nav-dropdown-menu {
        position: absolute;
        left: 0;
        top: 100%;
        min-width: 200px;
        background-color: rgba(255, 255, 255, 0.98);
        border: 1px solid rgba(226, 232, 240, 1);
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
        opacity: 0;
        visibility: hidden;
        transform: translateY(10px);
        transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
        z-index: 50;
        padding: 4px 0;
      }

      .nav-dropdown:hover .nav-dropdown-menu {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      /* Dropdown item styles */
      .dropdown-item {
        display: block;
        padding: 10px 16px;
        color: #374151;
        font-size: 0.9rem;
        font-weight: 500;
        font-family: 'Raleway', sans-serif;
        transition: all 0.2s ease;
        position: relative;
      }

      .dropdown-item:hover {
        background-color: rgba(243, 244, 246, 0.8);
        color: #4B5563;
      }

      /* Nested dropdown styles */
      .nested-dropdown {
        position: relative;
      }

      .nested-dropdown-menu {
        position: absolute;
        left: 100%;
        top: 0;
        min-width: 180px;
        background-color: rgba(255, 255, 255, 0.98);
        border: 1px solid rgba(226, 232, 240, 1);
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
        opacity: 0;
        visibility: hidden;
        transform: translateX(10px);
        transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
        z-index: 51;
        padding: 4px 0;
      }

      .nested-dropdown:hover .nested-dropdown-menu {
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
      }

      /* Animated underline effect for nav items */
      .nav-link {
        position: relative;
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
      }

      .nav-link::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -2px;
        left: 50%;
        background: linear-gradient(to right, #2563EB, #4F46E5);
        transition: all 0.3s ease;
        transform: translateX(-50%);
        border-radius: 2px;
      }

      .nav-link:hover::after {
        width: 70%;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 w-full",
        isScrolled
          ? "bg-white shadow-sm dark:bg-gray-900 transition-all duration-300 ease-in-out"
          : transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-sm dark:bg-gray-900/95"
      )}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "flex items-center space-x-2",
              isScrolled ? "py-2" : "py-3",
              "transition-all duration-300 ease-in-out"
            )}
          >
            <span className="text-xl font-bold tracking-tight">
              <span className="text-black dark:text-white">Seigler's</span>{" "}
              <span className="text-red-600 dark:text-red-500">Karate Center</span>
            </span>
                          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {[
              { name: "About", href: "#about" },
              { name: "Programs", href: "#programs" },
              { name: "Community", href: "#community" },
              { name: "Blog", href: "#blog" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative px-1 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 animate-border-bottom"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
                    <Link
              href="#book"
              className="btn-sleek inline-flex items-center rounded-md bg-red-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:hover:bg-red-600 dark:focus:ring-red-400"
            >
              Book a Class
                      </Link>
                    </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="group inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative h-6 w-6">
                <span
                  className={cn(
                    "absolute block h-0.5 rotate-0 transform rounded-full bg-current transition-all duration-300 ease-in-out",
                    isOpen ? "top-2.5 w-5 -rotate-45" : "top-1.5 w-6"
                  )}
                />
                <span
                  className={cn(
                    "absolute top-3 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-in-out",
                    isOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute block h-0.5 rotate-0 transform rounded-full bg-current transition-all duration-300 ease-in-out",
                    isOpen ? "top-2.5 w-5 rotate-45" : "top-4.5 w-6"
                  )}
                />
              </div>
              </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex flex-col overflow-hidden bg-white pt-16 dark:bg-gray-900 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex-1 overflow-y-auto px-4 py-6"
            >
              <nav className="flex flex-col space-y-6">
                {[
                  { name: "About", href: "#about" },
                  { name: "Programs", href: "#programs" },
                  { name: "Community", href: "#community" },
                  { name: "Blog", href: "#blog" },
                  { name: "Contact", href: "#contact" },
                ].map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.5 }}
                    className="text-xl font-medium text-gray-800 transition-colors hover:text-red-600 dark:text-gray-200 dark:hover:text-red-500"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-10 flex items-center justify-center"
              >
                <Link
                  href="#book"
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded-md bg-red-600 px-5 py-3 text-center text-base font-medium text-white shadow-sm transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:hover:bg-red-600 dark:focus:ring-red-400"
                >
            Book a Class
                  </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
