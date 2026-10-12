import type { ReactNode } from 'react';
import { reveal } from '@/lib/reveal';

type Props = { eyebrow: string; title: string; children?: ReactNode };

export default function SectionHead({ eyebrow, title, children }: Props) {
  return (
    <div className="head" {...reveal()}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
