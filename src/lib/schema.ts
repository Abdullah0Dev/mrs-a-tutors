import { faqs } from '@/data/faqs';
import { site } from '@/data/site';

/** JSON-LD structured data: organisation + FAQ rich results */
export const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/logo.png`,
      description: site.description,
      slogan: site.tagline,
      email: site.email,
      telephone: site.phoneIntl,
      areaServed: 'United Kingdom',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};
