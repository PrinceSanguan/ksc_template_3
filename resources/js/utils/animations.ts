import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const fadeInUp = (element: string | Element, delay: number = 0, duration: number = 0.7) => {
  return gsap.from(element, {
    y: 60,
    opacity: 0,
    duration,
    delay,
    ease: 'power2.out'
  });
};

export const fadeIn = (element: string | Element, delay: number = 0, duration: number = 0.6) => {
  return gsap.from(element, {
    opacity: 0,
    duration,
    delay,
    ease: 'power1.inOut'
  });
};

export const staggerFadeInUp = (elements: string | Element[], stagger: number = 0.08, delay: number = 0) => {
  return gsap.from(elements, {
    y: 60,
    opacity: 0,
    duration: 0.7,
    delay,
    stagger,
    ease: 'power2.out'
  });
};

export const slideInLeft = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    x: -100,
    opacity: 0,
    duration: 0.7,
    delay,
    ease: 'power2.out'
  });
};

export const slideInRight = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    x: 100,
    opacity: 0,
    duration: 0.7,
    delay,
    ease: 'power2.out'
  });
};

export const scrollAnimation = (element: string) => {
  return ScrollTrigger.create({
    trigger: element,
    start: 'top 80%',
    onEnter: () => {
      gsap.to(element, {
        y: 0,
        x: 0,
        duration: 0.8,
        opacity: 1,
        ease: 'power2.out',
      });
    },
    once: true
  });
};

export const revealMask = (element: string | Element) => {
  return gsap.from(element, {
    clipPath: 'inset(0 100% 0 0)',
    duration: 1,
    ease: 'power3.inOut'
  });
};

export const animateCounter = (element: string | Element, target: number, duration: number = 1.5) => {
  const obj = { val: 0 };
  const el = typeof element === 'string' ? document.querySelector(element) : element;

  if (!el) return;

  return gsap.to(obj, {
    val: target,
    duration,
    ease: 'power1.inOut',
    onUpdate: () => {
      if (el instanceof HTMLElement) {
        el.textContent = Math.floor(obj.val).toString();
      }
    }
  });
};

// New animations
export const scaleIn = (element: string | Element, delay: number = 0, duration: number = 0.6) => {
  return gsap.from(element, {
    scale: 0.85,
    opacity: 0,
    duration,
    delay,
    ease: 'back.out(1.7)'
  });
};

export const revealText = (element: string | Element, delay: number = 0) => {
  const splitText = (el: Element | null): Element[] => {
    if (!el) return [];
    const text = el.textContent || '';
    el.textContent = '';

    return text.split('').map(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      el.appendChild(span);
      return span;
    });
  };

  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  const chars = splitText(el);

  return gsap.from(chars, {
    opacity: 0,
    y: 20,
    rotationX: -90,
    stagger: 0.02,
    delay,
    duration: 0.5,
    ease: "back.out(1.7)"
  });
};

export const initScrollAnimations = () => {
  // Hero section animations
  gsap.from('.hero-title', {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out'
  });

  gsap.from('.hero-description', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.4,
    ease: 'power2.out'
  });

  gsap.from('.hero-buttons', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.6,
    ease: 'power2.out'
  });

  gsap.from('.hero-image', {
    opacity: 0,
    x: 50,
    duration: 0.9,
    delay: 0.7,
    ease: 'power2.out'
  });

  // Create scroll triggers for each section
  ScrollTrigger.batch('.animate-on-scroll', {
    onEnter: (elements) => {
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power2.out'
      });
    },
    once: true,
    start: 'top 80%'
  });

  // Parallax effect for section backgrounds
  gsap.utils.toArray('.parallax-bg').forEach((element) => {
    const bg = element as HTMLElement;
    gsap.to(bg, {
      y: '20%',
      ease: 'none',
      scrollTrigger: {
        trigger: bg.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5
      }
    });
  });

  // Animated section borders
  gsap.utils.toArray('.animate-border').forEach((element) => {
    const border = element as HTMLElement;
    gsap.from(border, {
      width: 0,
      duration: 1.2,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: border.parentElement,
        start: 'top 80%'
      }
    });
  });

  // Reveal image masks
  gsap.utils.toArray('.reveal-image').forEach((element) => {
    const image = element as HTMLElement;
    gsap.from(image, {
      clipPath: 'inset(0 100% 0 0)',
      duration: 1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: image,
        start: 'top 75%'
      }
    });
  });
};
