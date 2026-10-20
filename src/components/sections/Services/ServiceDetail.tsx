import Image from 'next/image';
import Link from 'next/link';
import {
  EyfsIllustration,
  ParentSupportIllustration,
  PrimaryIllustration,
  ResourcesIllustration,
} from '@/components/sections/Services/Svgs';
import Icon from '@/components/ui/Icon';
import type { Service } from '@/data/services';
import { reveal } from '@/lib/reveal';
import { THEME } from './theme';
import { MoveRight } from '@/constants/svgs';

const ART = {
  a1: EyfsIllustration,
  a2: PrimaryIllustration,
  a3: ResourcesIllustration,
  a4: ParentSupportIllustration,
} as const;

/** Feature icon bubbles cycle through the brand pastels */
const BUBBLES = [
  { bg: 'bg-[#fde3ec]', stroke: 'stroke-[#f4246f]' },
  { bg: 'bg-[#e3f0fc]', stroke: 'stroke-[#2f6fb0]' },
  { bg: 'bg-[#fdecb0]', stroke: 'stroke-[#f08a3c]' },
  { bg: 'bg-[#e6f5e9]', stroke: 'stroke-[#2f9b6a]' },
];

export default function ServiceDetail({ service }: { service: Service }) {
  const t = THEME[service.tone];
  const Art = ART[service.art];
  const { detail } = service;
  const three = detail.features.length === 3;

  return (
    <div className="mx-auto box-border max-w-295 px-4 pb-10 pt-6 sm:px-6 md:pt-10">
      {/* a div, not <nav>: header.css styles every <nav> as the mobile menu */}
      {/* <div role="navigation" aria-label="Breadcrumb" {...reveal(0)} className="mb-4 flex flex-wrap items-center gap-2 text-sm text-[#55535e]">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/#services">Services</Link>
        <span aria-hidden="true">/</span>
        <span className="font-medium text-[#1c1b22]">{service.label}</span>
      </div> */}

      <div
        {...reveal(1)}
        className={`relative overflow-hidden rounded-[28px] ring-1 shadow-[0_24px_60px_-24px_rgba(0,0,0,.18)] ${t.banner} ${t.ring}`}
      >
        <div aria-hidden="true" className={`pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full ${t.blob}`} />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-16 h-60 w-60 rounded-full bg-white/60" />

        <div className="relative grid items-center gap-8 px-6 py-9 md:grid-cols-[minmax(0,1.25fr)_minmax(0,.75fr)] md:gap-6 md:px-12 md:py-14">
          {/* content */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Icon name={service.icon} stroke={service.stroke} className="h-8 w-8 fill-none stroke-[1.8]" />
              <p className={`m-0 text-xs font-semibold uppercase tracking-[.14em] ${t.accent}`}>{detail.eyebrow}</p>
            </div>

            <h1 className="max-w-[620px] text-[2.2rem] font-bold sm:text-5xl">{detail.heading}</h1>

            <p className="m-0 max-w-[640px] text-[.98rem] leading-relaxed text-[#3f3b44]">{detail.intro}</p>

            <ul className={`m-0 mt-2 grid list-none gap-x-8 gap-y-6 p-0 ${three ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
              {detail.features.map((f, i) => {
                const b = BUBBLES[i % BUBBLES.length];
                return (
                  <li key={f.title} className={`flex gap-3.5 ${three ? 'sm:flex-col sm:items-start sm:gap-3' : 'items-start'}`}>
                    <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ring-2 ring-white/80 ${b.bg}`}>
                      <Icon name={f.icon} className={`h-6 w-6 fill-none stroke-[1.8] ${b.stroke}`} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold">{f.title}</span>
                      <span className="mt-1 block text-sm leading-snug text-[#55535e]">{f.text}</span>
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="mailto:mrsatutors01@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-[#f4246f] px-7 py-3.5 shadow-[0_12px_26px_-8px_rgba(244,36,111,.55)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#d8185c] active:scale-[.97]"
              >
                <span className="font-medium text-white">{detail.cta}</span>
                <span aria-hidden="true" className="inline-block text-white transition-transform duration-200 group-hover:translate-x-1"><MoveRight  strokeWidth={1.8} /></span>
              </Link>
              <Link href="/#services" className="group">
                <span className={`text-sm font-medium underline-offset-4 group-hover:underline ${t.accent}`}>← All services</span>
              </Link>
            </div>
          </div>

          {/* illustration (or photo if `image` is set in services.ts) */}
          <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[380px] md:max-w-none">
            {/* <svg
              viewBox="0 0 44 44"
              aria-hidden="true"
              className={`absolute -left-1 -top-3 z-10 h-11 w-11 animate-[float_5s_ease-in-out_infinite] fill-none stroke-[3] [stroke-linecap:round] ${t.stroke}`}
            >
              <path d="M8 34 19 9M22 38 38 14M3 20l10-4" />
            </svg> */}
            {service.image ? (
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] shadow-[0_18px_40px_-16px_rgba(0,0,0,.3)]">
                <Image src={service.image.src} alt={service.image.alt} fill priority sizes="(min-width: 768px) 420px, 90vw" className="object-cover" />
              </div>
            ) : (
              <Art className="h-auto w-full drop-shadow-[0_18px_28px_rgba(0,0,0,.12)]" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}