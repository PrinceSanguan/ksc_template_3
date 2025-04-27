import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Feedback = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
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
    }

    // Cards animation
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.querySelectorAll('.testimonial-item'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.7,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  const testimonials = [
    {
      id: 1,
      content: "My son has been begging to take karate for two years. He was diagnosed with ADD, hyperactive type with sensory issue components. This summer I decided to try the intro 6 week class. We had our first class and the staff was wonderful. After one week, I can already tell his confidence is growing. So far we love Seigler's!",
      name: "Shanna Nelson Greene",
      position: "Parent",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      content: "Accountability and an awesome workout! I had the knowledge of how to loose weight and get fit, but like so many of us, I needed that push to get me started! Having a scheduled class time and training with athletes at the top of their game has motivated me to crush my goals.",
      name: "Rachel Kimbrough-Eugene",
      position: "Member",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      id: 3,
      content: "Seigler's Karate Center is the BEST place to send your kids! A wonderful blend of Karate, leadership training and character building. Instructors know each child by name and are truly dedicated to their craft and the success of every child.",
      name: "Obambi A",
      position: "Parent",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    }
  ];

  return (
    <section ref={sectionRef} id="feedback" className="py-16">
      <div className="container mx-auto px-4">
        {/* Simple title section */}
        <div className="title-container mb-12 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-red-500"></div>
            <span className="text-red-500 uppercase tracking-wider text-sm font-semibold mx-3">Testimonials</span>
            <div className="h-px w-8 bg-red-500"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-red-500">Members</span> Say
          </h2>
          
          <p className="text-gray-600">
            Hear from our community about their experiences and transformations at Seigler's Karate Center
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 relative max-w-4xl mx-auto">
            <div className="absolute top-0 left-0 transform -translate-x-3 -translate-y-3">
              <svg className="w-12 h-12 text-red-500/20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <div className="text-lg text-gray-700 italic mb-6 relative z-10">
              "{testimonials[0].content}"
            </div>
            
            <div className="flex items-center">
              <img 
                src={testimonials[0].avatar}
                alt={testimonials[0].name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-bold text-gray-900">{testimonials[0].name}</div>
                <div className="text-red-500">{testimonials[0].position}</div>
              </div>
              <div className="ml-auto flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials list */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6">
          {testimonials.slice(1).map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-item group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-red-100 group-hover:border-red-300 transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-red-500 text-sm">{testimonial.position}</div>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-4 border-l-2 border-red-100 group-hover:border-red-300 transition-colors duration-300">
                  <p className="text-gray-600 italic text-sm">"{testimonial.content}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-red-500 font-medium hover:text-red-600 transition-colors duration-300">
            <span>View more testimonials</span>
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Feedback;