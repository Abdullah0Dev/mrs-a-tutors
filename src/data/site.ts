export const site = {
  name: 'Mrs A Tutors',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mrs-a-tutors.vercel.app',
  tagline: 'Small steps, big futures.',
  title: 'Mrs A Tutors | Tuition for EYFS, KS1 & KS2',
  description:
    'Personalised online and in-person tuition for children aged 3–11. EYFS, KS1 & KS2 tutoring, learning resources and parent support from Mrs A Tutors.',
  email: 'mrsatutors01@gmail.com',
  phone: '07511 753306',
  phoneHref: '+447511753306',
  phoneIntl: '+44 7511 753306',
} as const;

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Resources', href: '#resources' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const;
