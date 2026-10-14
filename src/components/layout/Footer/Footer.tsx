import { services } from '@/data/services';
import { nav, site } from '@/data/site';
import { reveal } from '@/lib/reveal';
import './footer.css';

const explore = nav.filter((n) => ['#about', '#services', '#resources', '#testimonials'].includes(n.href));

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div {...reveal(0)}>
            <h4>{site.name}</h4>
            <p>{site.tagline} Personalised tuition for EYFS, KS1 &amp; KS2 children.</p>
          </div>
          <div {...reveal(1)}>
            <h4>Explore</h4>
            <ul>{explore.map((n) => <li key={n.href}><a href={n.href}>{n.label.replace('Our ', '')}</a></li>)}</ul>
          </div>
          <div {...reveal(2)}>
            <h4>Services</h4>
            <ul>{services.map((s) => <li key={s.label}><a href="#services">{s.label}</a></li>)}</ul>
          </div>
          <div {...reveal(3)}>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={`tel:${site.phoneHref}`}>{site.phone}</a></li>
              <li><a href="#contact">Enquiry form</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>
        </div>
        <div className="copy">
          <span>© 2026 {site.name}. All rights reserved.</span>
          <span>Privacy Policy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
