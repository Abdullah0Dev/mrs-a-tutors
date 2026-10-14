import Icon, { type IconName } from '@/components/ui/Icon';
import HeroScene from './HeroScene';
import './hero.css'; 
import { MoveRight } from '@/constants/svgs';

type Highlight = { icon: IconName; title: string; text: string; warm?: boolean };

const highlights: Highlight[] = [
  { icon: 'people', title: 'KS1 & KS2', text: 'Online Tutoring' },
  { icon: 'book', title: 'EYFS', text: 'In Person Hands on Tuition' },
  { icon: 'bulb', title: 'Fun, Supportive', text: '& Inclusive Learning', warm: true },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div>
          <p className="eyebrow">Tuition Available for EYFS | KS1 | KS2</p>
          <h1>Learning That Builds Confidence</h1>
          <p className="lead">Personalised tuition rooted in one belief: no two children learn the same</p>
          <div className="cta">
            <a href="#contact" className="btn">Get in Touch  <MoveRight strokeWidth={1.6} /></a>
            <a href="#services" className="btn ghost">Our Services</a>
          </div>
          <div className="mini">
            {highlights.map((h) => (
              <div key={h.title} className={h.warm ? 'warm' : undefined}>
                <Icon name={h.icon} />
                <span><b>{h.title}</b><br />{h.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="scene" aria-hidden="true">
          <HeroScene />
        </div>
      </div>
    </section>
  );
}
