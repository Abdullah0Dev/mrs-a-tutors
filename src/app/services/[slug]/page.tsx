import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import Contact from '@/components/sections/Contact/Contact';
import OtherServices from '@/components/sections/Services/OtherServices';
import ServiceDetail from '@/components/sections/Services/ServiceDetail';
import { getService, services } from '@/data/services';
import { site } from '@/data/site';

type Props = { params: Promise<{ slug: string }> };

// Only the slugs in services.ts exist – everything else is a 404
// export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const url = `/services/${service.slug}`;
  return {
    title: service.detail.heading,
    description: service.description,
    alternates: { canonical: url },
    openGraph: { url, title: `${service.detail.heading} | ${site.name}`, description: service.description },
  };
}

const ServiceDetails = async ({ params }: Props) => {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.detail.heading,
    description: service.detail.intro,
    url: `${site.url}/services/${service.slug}`,
    areaServed: 'United Kingdom',
    provider: { '@type': 'EducationalOrganization', name: site.name, url: site.url },
  };

  return (
    <>
      <Header />
      <main id="main">
        <ServiceDetail service={service} />
        <OtherServices currentSlug={service.slug} />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
};

export default ServiceDetails;