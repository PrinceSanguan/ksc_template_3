"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const featuredRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const cards = cardsRef.current
    const featured = featuredRef.current

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

    // Featured blog animation
    if (featured) {
      gsap.fromTo(
        featured,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featured,
            start: "top 80%",
          },
        },
      )
    }

    // Cards animation
    if (cards) {
      gsap.fromTo(
        cards.querySelectorAll(".blog-card"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards,
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  const blogs = [
    {
      id: 1,
      title: "The Benefits of Martial Arts for Children",
      excerpt:
        "Discover how martial arts training can help children develop discipline, confidence, and physical fitness.",
      date: "June 15, 2023",
      author: "Sensei Michael",
      image: "/Images/team/TN-Lil-Dragons.jpg",
      category: "Youth Programs",
    },
    {
      id: 2,
      title: "Karate vs Taekwondo: Understanding the Differences",
      excerpt:
        "A comprehensive comparison of two popular martial arts styles and their unique approaches to self-defense.",
      date: "May 28, 2023",
      author: "Master Chen",
      image: "/Images/team/Copy-of-IMG_3535-1-scaled-1-683x1024.jpg",
      category: "Martial Arts Styles",
    },
    {
      id: 3,
      title: "Preparing for Your First Belt Test",
      excerpt:
        "Essential tips and mental preparation strategies to help you succeed in your upcoming belt examination.",
      date: "April 12, 2023",
      author: "Sensei Sarah",
      image: "/Images/team/TN-Kids-Karate.jpg",
      category: "Student Guidance",
    },
  ]

  return (
    <section id="blog" ref={sectionRef} className="relative py-20 overflow-hidden">
      <div className="container relative mx-auto px-4">
        <div className="title-container mb-12 text-center">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-px w-8 bg-red-500"></div>
            <span className="text-red-600 uppercase tracking-wider text-sm font-semibold">Insights & Tips</span>
            <div className="h-px w-8 bg-red-500"></div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Latest from Our Blog</h2>
          <p className="mx-auto max-w-2xl text-gray-600 mt-4">
            Insights, tips, and stories from our martial arts community. Stay informed with the latest trends and
            techniques.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
        </div>

        {/* Featured Article */}
        <div ref={featuredRef} className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-2xl bg-white p-6 border border-gray-200 overflow-hidden shadow-lg">
            <div className="lg:col-span-7 relative h-[300px] lg:h-full rounded-xl overflow-hidden">
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 rounded-full bg-gradient-to-r from-red-700 to-red-500 px-3 py-1 text-xs font-medium text-white shadow-lg">
                {blogs[0].category}
              </div>
            </div>
            
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="mb-3 flex items-center text-sm text-gray-500">
                <svg
                  className="w-4 h-4 mr-1 text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2 2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{blogs[0].date}</span>
                <span className="mx-2">•</span>
                <svg
                  className="w-4 h-4 mr-1 text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>{blogs[0].author}</span>
              </div>
              
              <div className="inline-block bg-red-100 px-3 py-1 rounded-md text-xs font-medium text-red-600 mb-2">
                Featured Article
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {blogs[0].title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {blogs[0].excerpt}
              </p>
              
              <Button
                variant="default"
                className="rounded-xl bg-gradient-to-r from-red-700 to-red-600 self-start hover:from-red-600 hover:to-red-500 transition-all duration-300 shadow-lg shadow-red-900/20 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center text-white">
                  Read Full Article
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
        </div>

        {/* Secondary Articles */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <span className="w-1 h-8 bg-red-500 rounded-full mr-3"></span>
              More Articles
            </h3>
            <div className="flex space-x-3">
              <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors shadow-sm">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors shadow-sm">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div ref={cardsRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(1).map((blog) => (
              <div
                key={blog.id}
                className="blog-card group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 border border-gray-200 hover:border-red-300 hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 rounded-full bg-gradient-to-r from-red-700 to-red-500 px-3 py-1 text-xs font-medium text-white shadow-lg">
                    {blog.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center text-sm text-gray-500">
                    <svg
                      className="w-4 h-4 mr-1 text-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2 2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <svg
                      className="w-4 h-4 mr-1 text-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>{blog.author}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{blog.excerpt}</p>
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-red-300 hover:text-red-600 transition-all duration-300"
                  >
                    <span className="flex items-center">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
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
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { name: "Self Defense", count: 8, color: "from-red-700 to-red-500" },
            { name: "Competition", count: 12, color: "from-orange-600 to-orange-400" },
            { name: "Technique Guides", count: 15, color: "from-red-600 to-red-400" }
          ].map((category, i) => (
            <div key={i} className="rounded-xl bg-white border border-gray-200 p-5 group hover:border-red-300 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md">
              <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center bg-gradient-to-r ${category.color}`}>
                <span className="text-white font-bold">{category.count}</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h4>
              <div className="flex items-center text-red-600 text-sm font-medium group-hover:text-red-500 transition-colors">
                <span>Browse Articles</span>
                <svg className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="rounded-2xl bg-white p-8 border border-gray-200 mb-16 shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 mb-4">
                Get the latest martial arts tips, event notifications, and special offers delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-700 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
                <Button className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/3 md:border-l md:border-gray-200 md:pl-8">
              <div className="flex gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">Weekly Updates</h4>
                  <p className="text-gray-500 text-sm">New articles every week</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">No Spam</h4>
                  <p className="text-gray-500 text-sm">Unsubscribe at any time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="default"
            className="rounded-xl bg-gradient-to-r from-red-700 to-red-600 px-8 py-4 text-white hover:from-red-600 hover:to-red-500 hover:text-white transition-all duration-300 shadow-lg shadow-red-900/20 transform hover:scale-105 relative group overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              View All Articles
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

export default Blog