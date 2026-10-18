'use client';

import { useEffect } from 'react';

/**
 * Scroll-reveal for every element carrying data-reveal (see lib/reveal.ts).
 *
 * Fail-safe by design: elements are visible by default. Only elements that are below the
 * fold get "armed" (hidden) here, and they are revealed by an IntersectionObserver AND by an
 * independent scroll/interval sweep. Mounted once in the root layout; a MutationObserver
 * picks up elements from any later render (client navigation, back/forward, Fast Refresh).
 */
export default function RevealObserver() {
  useEffect(() => {
    // Reduced motion / very old browsers: leave everything visible.
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const reveal = (el: Element) => {
      if (!el.hasAttribute('data-armed') || el.hasAttribute('data-in')) return;
      el.setAttribute('data-in', '');
      // after the transition, hand control back to the element's own hover transitions
      setTimeout(() => ['data-reveal', 'data-armed', 'data-in'].forEach((a) => el.removeAttribute(a)), 1200);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.unobserve(entry.target);
          reveal(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 },
    );

    const arm = (el: Element) => {
      if (el.hasAttribute('data-armed')) return;
      const r = el.getBoundingClientRect();
      const limit = window.innerHeight * 0.92;
      if (r.bottom <= 0) return; // already scrolled past: leave visible
      el.setAttribute('data-armed', '');
      if (r.top < limit) {
        // already on screen: fade it in right away
        void getComputedStyle(el).opacity; // flush the hidden state so the transition runs
        reveal(el);
      } else {
        io.observe(el); // below the fold: wait for it
      }
    };

    const scan = (node: Element | Document) => {
      if (node instanceof Element && node.hasAttribute('data-reveal')) arm(node);
      node.querySelectorAll('[data-reveal]:not([data-armed])').forEach(arm);
    };

    scan(document);
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) m.addedNodes.forEach((n) => n.nodeType === 1 && scan(n as Element));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Independent safety net (doesn't rely on IntersectionObserver)
    const sweep = () => {
      scan(document); // picks up anything the MutationObserver missed
      const limit = window.innerHeight * 0.92;
      document.querySelectorAll('[data-armed]:not([data-in])').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom <= 0 || r.top < limit) reveal(el);
      });
    };
    let raf = 0;
    const queueSweep = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(sweep);
    };
    window.addEventListener('scroll', queueSweep, { passive: true });
    window.addEventListener('resize', queueSweep);
    window.addEventListener('pageshow', queueSweep); // back/forward cache
    const timer = window.setInterval(sweep, 700);

    return () => {
      io.disconnect();
      mo.disconnect();
      clearInterval(timer);
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', queueSweep);
      window.removeEventListener('resize', queueSweep);
      window.removeEventListener('pageshow', queueSweep);
    };
  }, []);

  return null;
}