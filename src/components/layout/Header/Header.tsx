'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { nav } from '@/data/site';
import './header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(nav[0].href);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      let current: string = nav[0].href;
      for (const { href } of nav) {
        const el = document.querySelector(href);
        if (el && el.getBoundingClientRect().top < 120) current = href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : undefined}>
      <div className="wrap nav">
        <a href="#home" className="logo" aria-label="Mrs A Tutors home">
          <Image src="/logo.png" alt="Mrs A Tutors" width={119} height={68} priority />
        </a>
        <nav id="menu" className={open ? 'open' : undefined} aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={active === item.href ? 'on' : undefined} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="btn">Get in Touch</a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
