import Link from 'next/link';
import { site } from '@/data/site';
import { reveal } from '@/lib/reveal';

export default function Contact() {
  return (
    <div id="contact" className="bg-white pb-16 pt-4 sm:pb-[84px] sm:pt-6">
      <div className="wrap">
        <div
          {...reveal(0)}
          className="relative flex flex-col items-start gap-6 overflow-hidden rounded-[28px] bg-[linear-gradient(120deg,#fde6ee_0%,#fff0dc_58%,#fdecb0_100%)] px-[26px] py-8 shadow-[0_22px_50px_-20px_rgba(244,36,111,.3)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_56px_-20px_rgba(244,36,111,.38)] min-[901px]:flex-row min-[901px]:items-center min-[901px]:justify-between min-[901px]:gap-8 min-[901px]:px-12 min-[901px]:py-11"
        >
          {/* decorative blobs + sparkle */}
          <div aria-hidden="true" className="pointer-events-none absolute -right-[70px] -top-[90px] h-[260px] w-[260px] rounded-full bg-[#f4246f]/10" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-[100px] -left-[50px] h-[220px] w-[220px] rounded-full bg-white/60" />
          <svg
            viewBox="0 0 44 44"
            aria-hidden="true"
            className="absolute right-[18px] top-4 z-10 h-[34px] w-[34px] animate-[float_5s_ease-in-out_infinite] fill-none stroke-[#f6b800] stroke-[3] min-[560px]:right-[30px] min-[560px]:top-5 min-[560px]:h-11 min-[560px]:w-11 [stroke-linecap:round]"
          >
            <path d="M8 34 19 9M22 38 38 14M3 20l10-4" />
          </svg>

          {/* message */}
          <div className="relative z-10 flex min-w-0 flex-col items-start gap-4 min-[560px]:flex-row min-[560px]:items-center min-[560px]:gap-6">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white shadow-[0_10px_24px_rgba(244,36,111,.2)] min-[560px]:h-[76px] min-[560px]:w-[76px]">
              <svg viewBox="0 0 32 32" aria-hidden="true" className="h-9 w-9 fill-none stroke-[#f4246f] stroke-[1.7]">
                <rect x="3" y="7" width="26" height="18" rx="2" />
                <path d="M4 9l12 9 12-9" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <p className="m-0 text-xs font-semibold uppercase tracking-[.14em] text-[#f4246f]">Get in touch</p>
              <h2 className="text-[1.7rem] font-bold min-[560px]:text-[2rem] min-[901px]:text-[2.4rem]">Ready to Take the First Step?</h2>
              <p className="m-0 max-w-[520px] text-[.95rem] text-[#5b4b47]">
                Tell us about your child and we’ll reply within one working day to arrange a friendly introductory chat.
              </p>
            </div>
          </div>

          {/* actions */}
          <div className="relative z-10 flex w-full flex-col items-stretch gap-3 text-center min-[901px]:w-auto min-[901px]:flex-none min-[901px]:items-center">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#f4246f] px-[34px] py-4 shadow-[0_12px_26px_-8px_rgba(244,36,111,.55)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#d8185c] active:scale-[.97]"
            >
              {/* colours sit on spans so the global `a { color: inherit }` can't override them */}
              <span className="text-base font-medium text-white">Send an Enquiry</span>
              <span aria-hidden="true" className="inline-block text-white transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
            <p className="m-0 text-sm text-[#55535e]">
              or call{' '}
              <a href={`tel:${site.phoneHref}`} className="group">
                <span className="border-b border-transparent font-medium text-[#1c1b22] transition-colors group-hover:border-[#f4246f] group-hover:text-[#f4246f]">
                  {site.phone}
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}