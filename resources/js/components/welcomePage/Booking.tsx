import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Booking = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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
        sectionRef.current.querySelector('.booking-container'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }
  }, []);

  const services = [
    {
      id: 1,
      name: 'Free Trial Class',
      description: 'Experience a martial arts class with no obligation to continue',
      duration: '45 min',
      price: 'FREE'
    },
    {
      id: 2,
      name: 'Beginner Package',
      description: '6-week introductory course including uniform and first belt test',
      duration: '2x weekly',
      price: '$149'
    },
    {
      id: 3,
      name: 'One-on-One Training',
      description: 'Private training session with a certified black belt instructor',
      duration: '30 min',
      price: '$49'
    },
    {
      id: 4,
      name: 'Family Program',
      description: 'Train together as a family with our special family pricing',
      duration: 'Ongoing',
      price: 'From $199/mo'
    }
  ];

  return (
    <section id="booking" ref={sectionRef} className="py-16">
      <div className="container mx-auto px-4">
        {/* Title section */}
        <div className="title-container text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-px w-8 bg-red-500"></div>
            <span className="text-red-500 uppercase tracking-wider text-sm font-semibold">Join Us</span>
            <div className="h-px w-8 bg-red-500"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Schedule & Pricing</h2>
          <p className="mx-auto max-w-2xl text-gray-600 mt-4">
            Get started with Seigler's Karate Center today. Select a program and schedule your first class.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 bg-red-500 rounded-full"></div>
        </div>

        {/* Main booking container - New layout */}
        <div className="booking-container max-w-5xl mx-auto">
          {/* Featured program */}
          <div className="bg-red-50 rounded-t-xl p-6 border-b border-red-100 text-center">
            <span className="inline-block bg-red-500 text-white text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1 mb-3">Most Popular</span>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Trial Class</h3>
            <p className="text-gray-600 mb-4">Experience a martial arts class with no obligation to continue</p>
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="text-center">
                <span className="block text-3xl font-bold text-red-500">FREE</span>
                <span className="text-sm text-gray-500">No obligation</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-red-500">45</span>
                <span className="text-sm text-gray-500">Minutes</span>
              </div>
            </div>
            <Button 
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Book Free Trial
            </Button>
          </div>
          
          {/* Programs and form in two columns */}
          <div className="grid md:grid-cols-2 gap-0 border border-gray-200 rounded-b-xl overflow-hidden shadow-lg">
            {/* Left column - Programs */}
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Programs</h3>
              
              <div className="space-y-4">
                {services.slice(1).map((service) => (
                  <div
                    key={service.id}
                    className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-red-200 hover:shadow-md transition-all duration-300 group cursor-pointer"
                  >
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500 group-hover:bg-red-100 transition-colors duration-300">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 group-hover:text-red-500 transition-colors duration-300">{service.name}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                    <div className="ml-4 text-right">
                      <span className="block font-semibold text-gray-900">{service.price}</span>
                      <span className="text-sm text-gray-500">{service.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right column - Form */}
            <div className="p-6 bg-gray-50 border-l border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Information</h3>
              
              <div className="mb-6 bg-red-50 rounded-lg p-4 border border-red-100">
                <div className="text-center font-medium text-gray-900 mb-1">Limited Time Offer</div>
                <p className="text-center text-gray-600 text-sm">Sign up today and receive a free uniform with enrollment!</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <select className="w-full rounded-md border border-gray-300 p-3 text-gray-900 focus:border-red-500 focus:ring-red-500">
                    <option value="">Select a Program</option>
                    <option value="lil-dragons">Lil Dragons (4-5)</option>
                    <option value="kids">Kids Karate (6-10)</option>
                    <option value="teens">Teens Karate (11-13)</option>
                    <option value="adults">Adult Kempo Karate (14+)</option>
                    <option value="kickboxing">Kickboxing (14+)</option>
                    <option value="jiu-jitsu">Jiu Jitsu (14+)</option>
                  </select>
                </div>
                <div>
                  <select className="w-full rounded-md border border-gray-300 p-3 text-gray-900 focus:border-red-500 focus:ring-red-500">
                    <option value="">Select Location</option>
                    <option value="evans">Evans, GA</option>
                    <option value="grovetown">Grovetown, GA</option>
                    <option value="augusta">Augusta, GA (Coming Soon)</option>
                  </select>
                </div>
                
                <Button 
                  className="w-full bg-red-500 hover:bg-red-600 py-3 font-medium text-white transition-colors duration-300"
                >
                  Get Information
                </Button>
                
                <p className="text-xs text-gray-500 mt-2">
                  By submitting this form, you agree to receive information about our programs. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;