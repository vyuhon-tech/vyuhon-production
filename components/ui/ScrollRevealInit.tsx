'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    let killed = false;
    const triggers: import('gsap/ScrollTrigger').ScrollTrigger[] = [];

    const run = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (killed) return;

      // Short tick so React has committed the DOM
      await new Promise(r => requestAnimationFrame(r));
      await new Promise(r => requestAnimationFrame(r));
      if (killed) return;

      const vh = window.innerHeight;

      document.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
        const rect = el.getBoundingClientRect();

        // Already in viewport on page load — reveal immediately with a stagger
        if (rect.top < vh * 0.95) {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            delay: Math.min(i * 0.06, 0.5),
          });
          return;
        }

        // Below fold — wire up ScrollTrigger
        const st = ScrollTrigger.create({
          trigger: el,
          start: 'top 90%',
          onEnter: () =>
            gsap.to(el, { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' }),
        });
        triggers.push(st);
      });
    };

    run();

    return () => {
      killed = true;
      triggers.forEach(st => st.kill());
    };
  }, [pathname]);

  return null;
}
