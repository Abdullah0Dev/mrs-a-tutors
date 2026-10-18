import { Fragment } from 'react';
import Icon from '@/components/ui/Icon';
import SectionHead from '@/components/ui/SectionHead';
import { services } from '@/data/services';
import { reveal } from '@/lib/reveal';
import './services.css';
import { MoveRight } from '@/constants/svgs';
import {
  EyfsIllustration,
  PrimaryIllustration,
  ResourcesIllustration,
  ParentSupportIllustration,
} from './Svgs';

const ART = {
  a1: EyfsIllustration,
  a2: PrimaryIllustration,
  a3: ResourcesIllustration,
  a4: ParentSupportIllustration,
} as const;

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <SectionHead eyebrow="Our Services" title="Learning That Builds Confidence">
          At Mrs A Tutors, we offer high-quality tuition that is interactive, enjoyable and tailored to every child.
        </SectionHead>
        <div className="cards">
          {services.map((s, i) => {
            const Art = ART[s.art as keyof typeof ART];
            return (
              <a key={s.label} href={`/services/${s.slug}`} className={`card ${s.tone}`} {...reveal(i)}>
                <div className="tx">
                  <Icon name={s.icon} stroke={s.stroke} className="ic" />
                  <h3>
                    {s.title.map((line, j) => (
                      <Fragment key={line}>{j > 0 && <br />}{line}</Fragment>
                    ))}
                  </h3>
                  <p className="sub">{s.subtitle}</p>
                  <p>{s.description}</p>
                  <span className="go" aria-hidden="true"><MoveRight strokeWidth={1.8} /></span>
                </div>
                <Art className="art" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}