import { site } from '@/data/site';
import { reveal } from '@/lib/reveal';
import ContactForm from './ContactForm';
import './contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap cgrid">
        <div {...reveal(0)}>
          <p className="eyebrow">Contact</p>
          <h2>Let’s Talk About Your Child</h2>
          <p>Send us a message and we’ll reply within one working day to arrange a friendly introductory chat.</p>
          <ul className="cinfo">
            <li>✉️ <a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>📞 <a href={`tel:${site.phoneHref}`}>{site.phone}</a></li>
            <li>💻 Online &amp; in-person tuition</li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
