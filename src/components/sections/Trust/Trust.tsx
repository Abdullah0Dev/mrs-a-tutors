import Icon from '@/components/ui/Icon';
import SectionHead from '@/components/ui/SectionHead';
import { trustPoints } from '@/data/trust';
import { reveal } from '@/lib/reveal';
import './trust.css';

export default function Trust() {
  return (
    <section className="trust" id="trust">
      <div className="wrap">
        <SectionHead eyebrow="Qualifications & Experience" title="Why Trust Mrs A Tutors?">
          Mrs Atewogboye experienced educator who provides high-quality, engaging learning tailored to each child’s needs.
        </SectionHead>
        <p className="tr-lead" {...reveal()}>Her qualifications and experience include:</p>
        <div className="tr-grid">
          {trustPoints.map((t, i) => (
            <div key={t.title} className={`tr ${t.tone}`} {...reveal(i)}>
              <div className="ic"><Icon name={t.icon} stroke={t.stroke} /></div>
              <h3>{t.title}</h3>
              <p>{t.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
