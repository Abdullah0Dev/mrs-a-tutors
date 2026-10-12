import { testimonials } from '@/data/testimonials';
import { reveal } from '@/lib/reveal';
import './testimonials.css';

export default function Testimonials() {
  return (
    <section className="testi" id="testimonials">
      <div className="wrap">
        <p className="eyebrow" {...reveal(0)}>Testimonials</p>
        <h2 {...reveal(1)}>What Families Say</h2>
        <div className="tgrid">
          {testimonials.map((t, i) => (
            <figure key={t.name} className="tc" {...reveal(i)}>
              <span className="q" aria-hidden="true">“</span>
              <blockquote>
                {t.paragraphs.map((p) => <p key={p}>{p}</p>)}
              </blockquote>
              <figcaption><small><strong>{t.name}</strong>{t.role && ` · ${t.role}`}</small></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
