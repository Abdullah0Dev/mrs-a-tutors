import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import About from '@/components/sections/About/About';
import Contact from '@/components/sections/Contact/Contact';
import Faq from '@/components/sections/Faq/Faq';
import Hero from '@/components/sections/Hero/Hero';
import HowItWorks from '@/components/sections/HowItWorks/HowItWorks';
import Services from '@/components/sections/Services/Services';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import Trust from '@/components/sections/Trust/Trust';
import { schema } from '@/lib/schema';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <About />
        <Trust />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
