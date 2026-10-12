'use client';

import { type FormEvent, useState } from 'react';
import { site } from '@/data/site';
import { reveal } from '@/lib/reveal';

/** Opens the visitor's email app with the enquiry pre-filled (no backend needed). */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    if (!name || !email) return;

    const body = `Name: ${name}\nEmail: ${email}\nYear group: ${data.get('year')}\n\n${data.get('message') ?? ''}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} {...reveal(1)}>
      <div className="row">
        <label>Your name<input name="name" required autoComplete="name" /></label>
        <label>Email<input type="email" name="email" required autoComplete="email" /></label>
      </div>
      <label>
        Year group
        <select name="year" defaultValue="EYFS">
          <option>EYFS</option>
          <option>KS1 (Years 1–2)</option>
          <option>KS2 (Years 3–6)</option>
        </select>
      </label>
      <label>How can we help?<textarea name="message" rows={4} /></label>
      <button className="btn" type="submit" style={{ justifyContent: 'center' }}>Send Message →</button>
      {sent && <p className="ok show" role="status">Your email app should open with your message ready to send.</p>}
    </form>
  );
}
