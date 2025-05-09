import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Simple fade-in animations
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelector('.title-container'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
      
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-16">
      <div className="container mx-auto px-4">
        {/* Title section */}
        <div className="title-container mb-12 max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-red-500"></div>
            <span className="text-red-500 uppercase tracking-wider text-sm font-semibold mx-3">Get In Touch</span>
            <div className="h-px w-8 bg-red-500"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Contact Us</h2>
          <p className="text-gray-600 text-center">
            Have questions about our martial arts programs? We're here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* New tabbed interface */}
        <div ref={formRef} className="max-w-5xl mx-auto">
          {/* Quick contact options */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg p-5 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-red-50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <svg className="h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
              <p className="text-gray-600">(706) 855-5685</p>
            </div>
            
            <div className="bg-white rounded-lg p-5 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-red-50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <svg className="h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
              <p className="text-gray-600">skc@goskc.com</p>
            </div>
            
            <div className="bg-white rounded-lg p-5 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-red-50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <svg className="h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Hours</h3>
              <p className="text-gray-600">Mon-Fri: 3pm-9pm</p>
            </div>
            
            <div className="bg-white rounded-lg p-5 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-red-50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <svg className="h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Locations</h3>
              <p className="text-gray-600">Evans & Grovetown</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Left column - Contact info */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Locations</h3>
                
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Evans Location</h4>
                  <p className="text-gray-600 mb-1">4150 Washington Road, Suite 4</p>
                  <p className="text-gray-600">Evans, GA 30809</p>
                </div>
                
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Grovetown Location</h4>
                  <p className="text-gray-600 mb-1">271 Meridian Drive</p>
                  <p className="text-gray-600">Grovetown, GA 30813</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Connect With Us</h4>
                  <div className="flex space-x-3">
                    <a href="#" className="bg-white w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors duration-300">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-white w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors duration-300">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.029 10.029 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-white w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors duration-300">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-white w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors duration-300">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.592 3.501H4.406c-.501 0-.902.401-.902.902v15.246c0 .5.401.901.902.901h15.186c.501 0 .908-.401.908-.901V4.403c0-.501-.407-.902-.908-.902zM8.592 17.201H6.13v-7.703h2.463v7.703zm-1.23-8.742a1.425 1.425 0 110-2.85 1.425 1.425 0 010 2.85zm10.399 8.742h-2.463v-3.967c0-.917-.018-2.1-1.28-2.1-1.279 0-1.475.999-1.475 2.033v4.034h-2.462V9.498h2.36v1.08h.035c.33-.623 1.132-1.28 2.326-1.28 2.493 0 2.953 1.637 2.953 3.76v4.143z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column - Contact form */}
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        id="first_name"
                        className="w-full rounded-md border border-gray-300 p-2.5 text-gray-900 focus:border-red-500 focus:ring-red-500"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        id="last_name"
                        className="w-full rounded-md border border-gray-300 p-2.5 text-gray-900 focus:border-red-500 focus:ring-red-500"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-md border border-gray-300 p-2.5 text-gray-900 focus:border-red-500 focus:ring-red-500"
                        placeholder="john.doe@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full rounded-md border border-gray-300 p-2.5 text-gray-900 focus:border-red-500 focus:ring-red-500"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">Interested Program</label>
                    <select
                      id="program"
                      className="w-full rounded-md border border-gray-300 p-2.5 text-gray-900 focus:border-red-500 focus:ring-red-500"
                      required
                    >
                      <option value="">Select a program</option>
                      <option value="lil-dragons">Lil Dragons (4-5)</option>
                      <option value="kids">Kids Karate (6-10)</option>
                      <option value="teens">Teens Karate (11-13)</option>
                      <option value="adults">Adult Kempo Karate (14+)</option>
                      <option value="kickboxing">Kickboxing (14+)</option>
                      <option value="jiu-jitsu">Jiu Jitsu (14+)</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-md border border-gray-300 p-2.5 text-gray-900 focus:border-red-500 focus:ring-red-500"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    className="bg-red-500 hover:bg-red-600 text-white font-medium transition-colors duration-300 py-2.5"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;