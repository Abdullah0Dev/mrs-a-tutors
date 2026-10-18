import Image from 'next/image';
import { Fragment } from 'react';
import Icon, { type IconName } from '@/components/ui/Icon';
import { reveal } from '@/lib/reveal';
import './about.css';
import { MoveRight } from '@/constants/svgs';

const features: { icon: IconName; lines: [string, string] }[] = [
  { icon: 'heart', lines: ['Child-Centred', 'Approach'] },
  { icon: 'people', lines: ['Inclusive', '& Accessible'] },
  { icon: 'chart', lines: ['Proven Results', '& Growing Confidence'] },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap">..
        <div className="photo" {...reveal(0)}>
          <Image
            src="/images/hero-img.jpeg"
            alt="A child placing foam number cards 1, 2 and 3 during a hands-on tuition session"
            fill
            sizes="(min-width: 1100px) 360px, (min-width: 560px) 560px, 100vw"
            className="object-cover object-[50%_45%]"
          />
          <div className="note">Same<br />Children<br />Same<br />Potential<br />Different<br />Paths ♡</div>
        </div>

        <div className="ahead" {...reveal(1)}>
          <p className="eyebrow">About Mrs A Tutors</p>
          <h2>A Passion for People and Learning</h2>
          <p>
            Mrs A Tutors was founded with a simple mission — no two children are the same, so why should their tuition be?
            We provide a supportive, inclusive and personalised learning experience that helps every child build confidence,
            develop key skills and achieve success.
          </p>
        </div>

        <blockquote className="quote" {...reveal(2, 'tilt')}>
          “No two children are the same, so why should their tuition be?”
          <Icon name="heart" />
        </blockquote>

        <div className="afeat" {...reveal(3)}>
          <div className="feats">
            {features.map((f) => (
              <div key={f.lines[0]}>
                <Icon name={f.icon} />
                <span>{f.lines.map((l, i) => <Fragment key={l}>{i > 0 && <br />}{l}</Fragment>)}</span>
              </div>
            ))}
          </div>
          <a href="/contact" className="btn">Learn More About Us <MoveRight strokeWidth={1.6} /></a>
        </div>
      </div>
    </section>
  );
}