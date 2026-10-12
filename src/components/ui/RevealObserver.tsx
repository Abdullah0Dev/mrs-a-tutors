'use client';

import { useEffect } from 'react';

/** Marks [data-reveal] elements as visible when they enter the viewport. */
export default function RevealObserver() {
  useEffect(() => {
    document.documentElement.classList.add('reveal-ready');
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.removeAttribute('data-reveal'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          el.setAttribute('data-in', '');
          // hand control back to the element's own hover transitions
          setTimeout(() => { el.removeAttribute('data-reveal'); el.removeAttribute('data-in'); }, 1200);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
