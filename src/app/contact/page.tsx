import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import { reveal } from '@/lib/reveal';

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScV5ECF-A3_T3sozIePmlnJ1QwarWSyyWCJqy3bhIGP84yB3A/viewform';
const FORM_EMBED_URL = `${FORM_URL}?embedded=true`;

const EMAIL = 'mrsatutors01@gmail.com';
const PHONE = '07511 753306';
const PHONE_HREF = '+447511753306';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Express your interest in bespoke 1:1 tuition with Mrs A Tutors. Complete the short enquiry form and we’ll reply within one working day.',
  alternates: { canonical: '/contact' },
};

/* Outline icons (32×32) */
const Icon = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" className={`fill-none stroke-[1.8] ${className}`}>
    {children}
  </svg>
);
const mailIcon = (<><rect x="3" y="7" width="26" height="18" rx="2" /><path d="M4 9l12 9 12-9" /></>);
const phoneIcon = <path d="M7 5h5l2 7-3 2c2 4 4 6 8 8l2-3 7 2v5c0 2-2 3-4 3C13 29 3 19 3 8c0-2 2-3 4-3z" />;
const laptopIcon = (<><rect x="5" y="7" width="22" height="15" rx="2" /><path d="M2 26h28" /></>);
const capIcon = (<><path d="M16 5L2 11l14 6 14-6z" /><path d="M8 15v7c4 4 12 4 16 0v-7M30 11v8" /></>);

const quick = [
  { icon: mailIcon, label: 'Email us', text: EMAIL, href: `mailto:${EMAIL}` },
  { icon: phoneIcon, label: 'Call or text', text: PHONE, href: `tel:${PHONE_HREF}` },
  { icon: laptopIcon, label: 'Tuition', text: 'Online & in-person' },
];

const steps = ['Send your enquiry', 'We reply within one working day', 'Free introductory chat'];

/*
 * NOTE: colours are written as exact hex values and layout uses <div>s on purpose.
 * That way this page looks right with ANY Tailwind setup and isn't overridden by the
 * global `section { padding }`, `h1–h3 { margin: 0 }` and `a { color: inherit }` rules.
 */
const ContactPage = () => {
  return (
    <>
      <Header />
      <main id="main">
        {/* ───────── Hero band ───────── */}
        <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#fff7ef] to-[#fde6ee]">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#f4246f]/10 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 -left-20 h-64 w-64 rounded-full bg-[#fdecb0]/60 blur-3xl" />
          <div className="relative mx-auto flex max-w-295 flex-col items-center gap-4 px-5 pb-28 pt-12 text-center md:pb-32 md:pt-16">
            <p {...reveal(0)} className="m-0 text-xs font-semibold uppercase tracking-[.14em] text-[#f4246f]">Contact</p>
            <h1 {...reveal(1)} className="max-w-2xl text-[2.4rem] font-extrabold leading-[1.1] sm:text-5xl md:text-[3.4rem]">
              Let’s Talk About Your Child
            </h1>
            <p {...reveal(2)} className="m-0 max-w-xl text-base text-[#55535e] md:text-lg">
              Tell us a little about your child and we’ll be in touch to arrange a friendly introductory chat.
            </p>
            <p {...reveal(3)} className="m-0 font-[family-name:var(--font-hand)] text-2xl text-[#f4246f]">Small Steps, Big Futures ♡</p>
          </div>
        </div>

        {/* ───────── Quick contact cards (overlap the band) ───────── */}
        <div className="relative z-10 mx-auto -mt-14 box-border max-w-[1000px] px-5">
          <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-3 sm:gap-4">
            {quick.map((q, i) => (
              <li key={q.label} {...reveal(i)} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_12px_30px_-8px_rgba(244,36,111,.2)] ring-1 ring-[#f4246f]/10">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#fde6ee]">
                  <Icon className="h-5 w-5 stroke-[#f4246f]">{q.icon}</Icon>
                </span>
                <span className="min-w-0 text-sm leading-snug">
                  <span className="block text-xs text-[#55535e]">{q.label}</span>
                  {q.href ? (
                    <a href={q.href} className="group block">
                      <span className="block truncate font-medium transition-colors group-hover:text-[#f4246f]">{q.text}</span>
                    </a>
                  ) : (
                    <span className="block font-medium">{q.text}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ───────── Form ───────── */}
        <div className="mx-auto box-border w-full px-5 pb-20 pt-12 md:pt-16" style={{ maxWidth: 1900 }}>
          <div {...reveal(0)} className="flex flex-col items-center gap-2 text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[.14em] text-[#f4246f]">Enquiry form</p>
            <h2 className="text-3xl font-bold md:text-4xl">Express Your Interest</h2>
            <ol className="m-0 mt-4 flex list-none flex-col gap-3 p-0 text-left text-sm text-[#55535e] sm:flex-row sm:gap-6">
              {steps.map((s, i) => (
                <li key={s} className="flex items-center gap-2.5">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#f4246f] text-xs font-semibold text-white">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>

          <div {...reveal(1)} className="mx-auto mt-8 overflow-hidden rounded-[28px] bg-white shadow-[0_24px_60px_-12px_rgba(244,36,111,.22)] ring-1 ring-[#f4246f]/10" style={{ maxWidth: 1100 }}>
            <div className="flex items-center gap-3.5 border-b border-[#f4246f]/10 bg-gradient-to-r from-[#fde6ee] to-[#fff0dc] px-5 py-4 sm:px-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#f4246f] shadow-md shadow-[#f4246f]/30">
                <Icon className="h-5 w-5 stroke-white">{capIcon}</Icon>
              </span>
              <div>
                <p className="m-0 text-lg font-bold leading-tight" style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}>Bespoke 1:1 Tuition</p>
                <p className="m-0 text-sm text-[#55535e]">Ages 3–11 · EYFS, KS1 &amp; KS2</p>
              </div>
            </div>

            <div className="relative bg-white w-full">
              {/* sits behind the iframe until the form has painted */}
              <div aria-hidden="true" className="absolute inset-x-0 top-0 flex flex-col items-center gap-3 pt-28 text-sm text-[#55535e]">
                <span className="h-10 w-10 animate-spin rounded-full border-4 border-[#fde6ee] border-t-[#f4246f]" />
                Loading the form…
              </div>
              {/* Google's embed is 640 × 2412; the form itself ends a bit earlier, so we trim the blank tail */}
              <iframe
                src={FORM_EMBED_URL}
                title="Mrs A Tutors enquiry form"
                className="relative block h-[2850px] w-full border-0 min-[480px]:h-[2550px] min-[660px]:h-[2500px]"
              >
                Loading…
              </iframe>
            </div>
          </div>

          <p className="m-0 mt-5 text-center text-sm text-[#55535e]">
            Form not loading?{' '}
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
              <span className="font-medium text-[#f4246f] underline underline-offset-4">Open it in a new tab →</span>
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;