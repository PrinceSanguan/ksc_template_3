import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Feedback = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const particles = particlesRef.current;
    const cards = cardsRef.current;

    // Title animation
    if (section) {
      gsap.fromTo(
        section.querySelector('.title-container'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          }
        }
      );
    }

    // Cards animation
    if (cards) {
      gsap.fromTo(
        cards.querySelectorAll('.testimonial-card'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards,
            start: 'top 80%',
          }
        }
      );
    }

    // Create subtle red particles
    if (particles) {
      const colors = ["#ff0000", "#ff3333", "#cc0000"];
      const particleInterval = setInterval(() => {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = color;
        particle.style.opacity = (0.1 + Math.random() * 0.1).toString();
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = '0';

        particles.appendChild(particle);

        gsap.to(particle, {
          x: Math.random() * 30 - 15,
          y: -(Math.random() * 100 + 50),
          opacity: 0,
          duration: 3 + Math.random() * 2,
          ease: "power1.out",
          onComplete: () => {
            if (particles.contains(particle)) {
              particles.removeChild(particle);
            }
          }
        });
      }, 300);

      return () => {
        if (particleInterval) {
          clearInterval(particleInterval);
        }
      };
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
    <section ref={sectionRef} id="feedback" className="relative py-20 overflow-hidden bg-white">
      {/* Subtle particles container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="title-container mb-10 text-center">
          {/* Title with red bracket styling */}
          <div className="inline-block relative mb-6">
            <div className="absolute left-0 top-0 w-10 h-10 border-t-2 border-l-2 border-red-600"></div>
            <div className="absolute right-0 top-0 w-10 h-10 border-t-2 border-r-2 border-red-600"></div>
            <div className="absolute left-0 bottom-0 w-10 h-10 border-b-2 border-l-2 border-red-600"></div>
            <div className="absolute right-0 bottom-0 w-10 h-10 border-b-2 border-r-2 border-red-600"></div>
            <h2 className="text-4xl md:text-5xl font-bold px-12 py-4">
              What Our <span className="text-red-600 relative">Members<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span></span> Say
            </h2>
          </div>

          <p className="text-gray-700 mx-auto max-w-2xl mt-4">
            Hear from our community about their experiences and transformations at Seigler's Karate Center
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card bg-red-50/80 shadow-md border border-red-100 overflow-hidden relative flex flex-col h-64"
            >
              {/* Red corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 transform rotate-45 translate-x-16 -translate-y-16"></div>
              </div>

              <div className="p-4 flex flex-col h-full">
                {/* Star rating */}
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="mr-1 inline-block h-4 w-4 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial content */}
                <div className="flex-grow overflow-hidden">
                  <div className="border-l-2 border-red-600 pl-2 mb-2">
                    <p className="text-xs text-gray-800 line-clamp-6 italic">"{testimonial.content}"</p>
                  </div>
                </div>

                {/* Author info */}
                <div className="flex items-center mt-auto pt-2 border-t border-red-200">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-8 w-8 object-cover rounded-full border border-red-600"
                  />
                  <div className="ml-2">
                    <div className="font-bold text-black text-xs">{testimonial.name}</div>
                    <div className="text-red-600 text-xs">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
