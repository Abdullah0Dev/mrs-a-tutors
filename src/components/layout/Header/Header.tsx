
'use client';

import Image from 'next/image';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from 'motion/react';
import { useEffect, useId, useState } from 'react';
import { nav } from '@/data/site';
import './header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(
    nav[0]?.href ?? '#home',
  );

  const reduceMotion = useReducedMotion();
  const mobileTitleId = useId();

  // Keep the active navigation item synchronized with page scrolling.
  useEffect(() => {
    let frame = 0;

    const syncState = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;

        setScrolled(window.scrollY > 8);

        const sections = nav.flatMap(({ href }) => {
          if (!href.startsWith('#')) return [];

          const element = document.getElementById(href.slice(1));

          return element ? [{ href, element }] : [];
        });

        if (!sections.length) return;

        let current = sections[0].href;

        const atBottom =
          window.scrollY > 4 &&
          window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 4;

        if (atBottom) {
          current = sections[sections.length - 1].href;
        } else {
          for (const section of sections) {
            if (section.element.getBoundingClientRect().top <= 130) {
              current = section.href;
            }
          }
        }

        setActive((previous) =>
          previous === current ? previous : current,
        );
      });
    };

    syncState();

    window.addEventListener('scroll', syncState, { passive: true });
    window.addEventListener('resize', syncState);
    window.addEventListener('hashchange', syncState);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);

      window.removeEventListener('scroll', syncState);
      window.removeEventListener('resize', syncState);
      window.removeEventListener('hashchange', syncState);
    };
  }, []);

  // Lock background scrolling and support the Escape key.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  // Close the drawer if the viewport returns to desktop width.
  useEffect(() => {
    const media = window.matchMedia('(min-width: 861px)');

    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    media.addEventListener('change', onChange);

    return () => media.removeEventListener('change', onChange);
  }, []);

  const underlineTransition = reduceMotion
    ? { duration: 0 }
    : {
        type: 'spring' as const,
        stiffness: 520,
        damping: 38,
        mass: 0.7,
      };

  const drawerVariants: Variants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { type: 'spring', stiffness: 360, damping: 36 },
    },
    exit: {
      x: '100%',
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.22, ease: 'easeIn' },
    },
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: reduceMotion ? 0 : 0.22 },
    },
    exit: {
      opacity: 0,
      transition: { duration: reduceMotion ? 0 : 0.18 },
    },
  };

  const listVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.055,
        delayChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 18 },
    visible: {
      opacity: 1,
      x: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { type: 'spring', stiffness: 420, damping: 32 },
    },
  };

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={[
          'site-header',
          scrolled ? 'scrolled' : '',
          open ? 'menu-open' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div className="wrap nav">
          <a
            href="#home"
            className="logo"
            aria-label="Mrs A Tutors home"
            onClick={closeMenu}
          >
            <Image
              src="/logo.png"
              alt="Mrs A Tutors"
              width={119}
              height={68}
              priority
            />
          </a>

          {/* Desktop navigation */}
          <nav className="desktop-nav" aria-label="Main navigation">
            <ul>
              {nav.map((item) => {
                const isActive = active === item.href;

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={isActive ? 'on' : ''}
                      aria-current={
                        isActive ? 'location' : undefined
                      }
                    >
                      <span>{item.label}</span>

                      {isActive && (
                        <motion.span
                          layoutId="desktop-nav-underline"
                          className="nav-underline"
                          aria-hidden="true"
                          transition={underlineTransition}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <a
            href="#contact"
            className="btn header-cta"
            onClick={closeMenu}
          >
            Get in Touch
            <span className="cta-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          {/* Animated hamburger */}
          <button
            type="button"
            className="burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((previous) => !previous)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile overlay and drawer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.button
            key="mobile-overlay"
            type="button"
            className="mobile-overlay"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        )}

        {open && (
          <motion.aside
            key="mobile-drawer"
            id="mobile-drawer"
            className="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby={mobileTitleId}
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="drawer-header">
              <a
                href="#home"
                className="drawer-logo"
                aria-label="Mrs A Tutors home"
                onClick={closeMenu}
              >
                <Image
                  src="/logo.png"
                  alt="Mrs A Tutors"
                  width={119}
                  height={68}
                />
              </a>

              <button
                type="button"
                className="drawer-close"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="21"
                  height="21"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="drawer-intro">
              <span className="drawer-kicker">MRS A TUTORS</span>
              <h2 id={mobileTitleId}>Explore the website.</h2>
              <p>Everything you need, just a tap away.</p>
            </div>

            <nav className="drawer-nav" aria-label="Mobile navigation">
              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="visible"
              >
                {nav.map((item, index) => {
                  const isActive = active === item.href;

                  return (
                    <motion.li
                      key={item.href}
                      variants={itemVariants}
                    >
                      <a
                        href={item.href}
                        className={[
                          'drawer-link',
                          isActive ? 'active' : '',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        aria-current={
                          isActive ? 'location' : undefined
                        }
                        onClick={() => {
                          setActive(item.href);
                          closeMenu();
                        }}
                      >
                        <span className="drawer-index">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <span className="drawer-link-label">
                          {item.label}
                        </span>

                        <svg
                          className="drawer-chevron"
                          viewBox="0 0 24 24"
                          width="18"
                          height="18"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M9 18l6-6-6-6"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </nav>

            <div className="drawer-footer">
              <span className="drawer-footer-note">
                Have a question?
              </span>

              <a
                href="#contact"
                className="drawer-cta"
                onClick={closeMenu}
              >
                <span>Get in Touch</span>
                <span className="drawer-cta-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>

              <p className="drawer-footer-caption">
                Let&apos;s take the next step together.
              </p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}