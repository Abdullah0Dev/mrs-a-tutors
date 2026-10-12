import SectionHead from '@/components/ui/SectionHead';
import { steps } from '@/data/steps';
import { reveal } from '@/lib/reveal';
import './how-it-works.css';

export default function HowItWorks() {
  return (
    <section className="steps" id="resources">
      <div className="wrap">
        <SectionHead eyebrow="How It Works" title="Getting Started Is Simple">
          From first hello to growing confidence, here is what to expect.
        </SectionHead>
        <div className="sgrid">
          {steps.map((s, i) => (
            <div key={s.title} className="step" {...reveal(i)}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
