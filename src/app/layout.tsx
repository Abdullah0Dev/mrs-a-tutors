import type { Metadata, Viewport } from 'next';
import { Caveat, Playfair_Display, Poppins } from 'next/font/google';
import RevealObserver from '@/components/ui/RevealObserver';
import SvgSprite from '@/components/ui/SvgSprite';
import { site } from '@/data/site';
import '@/styles/base.css';
import '@/styles/animations.css';
import '@/styles/reveal.css';

const heading = Playfair_Display({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-heading', display: 'swap' });
const body = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' });
const hand = Caveat({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-hand', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: ['tutor', 'online tutoring', 'primary tutor', 'EYFS tuition', 'KS1 tutor', 'KS2 tutor', '1:1 tuition', 'qualified teacher', 'UK'],
  authors: [{ name: site.name }],
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'en_GB', url: '/', siteName: site.name, title: site.title, description: site.description },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#f4246f',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${heading.variable} ${body.variable} ${hand.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SvgSprite />
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
