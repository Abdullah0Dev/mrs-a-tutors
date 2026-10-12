import SectionHead from '@/components/ui/SectionHead';
import { faqs } from '@/data/faqs';
import { reveal } from '@/lib/reveal';
import './faq.css';

export default function Faq() {
  return (
    <section id="faq">
      <div className="wrap">
        <SectionHead eyebrow="FAQs" title="Questions Parents Ask" />
        <div className="faq">
          {faqs.map((f, i) => (
            <details key={f.q} {...reveal(i)}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
