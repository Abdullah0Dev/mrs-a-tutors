import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { services } from '@/data/services';
import { reveal } from '@/lib/reveal';
import { THEME } from './theme';

export default function OtherServices({ currentSlug }: { currentSlug: string }) {
  const others = services.filter((s) => s.slug !== currentSlug);

  return (
    <div className="mx-auto box-border max-w-[1180px] px-4 pb-10 pt-8 sm:px-6 md:pt-12">
      <div {...reveal(0)} className="flex flex-col items-center gap-2 pb-8 text-center">
        <p className="m-0 text-xs font-semibold uppercase tracking-[.14em] text-[#f4246f]">Explore more</p>
        <h2 className="text-3xl font-bold md:text-4xl">Our Other Services</h2>
      </div>

      <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-3">
        {others.map((s, i) => (
          <li key={s.slug} {...reveal(i)}>
            <Link
              href={`/services/${s.slug}`}
              className={`group flex h-full items-center gap-4 rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_-14px_rgba(244,36,111,.3)] ${THEME[s.tone].soft}`}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white shadow-sm">
                <Icon name={s.icon} stroke={s.stroke} className="h-6 w-6 fill-none stroke-[1.8]" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold">{s.label}</span>
                <span className="block text-sm text-[#55535e]">{s.subtitle}</span>
              </span>
              <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f4246f] text-white transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}