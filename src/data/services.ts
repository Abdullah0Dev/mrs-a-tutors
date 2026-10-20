import type { IconName } from '@/components/ui/Icon';

export type ServiceFeature = { icon: IconName; title: string; text: string };

export type Service = {
  /** URL segment: /services/[slug] */
  slug: string;
  tone: 'c1' | 'c2' | 'c3' | 'c4';
  icon: IconName;
  stroke: string;
  /** Heading lines (rendered with a line break between them) */
  title: string[];
  /** Short name used in the footer / "other services" */
  label: string;
  subtitle: string;
  description: string;
  /** Illustration symbol id from <SvgSprite /> */
  art: 'a1' | 'a2' | 'a3' | 'a4';
  /** Optional photo – when set it replaces the illustration on the detail page */
  image?: { src: string; alt: string };
  /** Content of /services/[slug] */
  detail: {
    eyebrow: string;
    heading: string;
    intro: string;
    features: ServiceFeature[];
    cta: string;
  };
};

export const services: Service[] = [
  {
    slug: 'early-years', tone: 'c1', icon: 'sprout', stroke: '#f4246f', art: 'a1',
    title: ['Early Years (EYFS)', '| Ages 3 to 5'], label: 'Early Years (EYFS)',
    subtitle: 'In-Person Learning Support',
    description: 'Hands-on, purposeful learning that nurtures early skills, confidence and curiosity.',
    detail: {
      eyebrow: 'EYFS · Ages 3–5',
      heading: 'Early Years (EYFS)',
      intro: 'Our Early Years learning support is designed to help young children develop essential early learning skills through fun, interactive and purposeful experiences. We nurture confidence, curiosity and a love for learning while supporting each child’s individual development.',
      features: [
        { icon: 'chat', title: 'Early Learning Skills', text: 'Developing communication, early literacy and numeracy.' },
        { icon: 'people', title: 'Fun & Interactive Learning', text: 'Using practical, engaging activities to make learning enjoyable.' },
        { icon: 'star', title: 'Confidence Building', text: 'Encouraging independence, participation and self-belief.' },
        { icon: 'heart', title: 'Individualised Support', text: 'Adapting activities to each child’s needs, interests and stage of development.' },
      ],
      cta: 'Send Mrs A an email',
    },
  },
  {
    slug: 'primary-tuition', tone: 'c2', icon: 'laptop', stroke: '#2f6fb0', art: 'a2',
    title: ['Primary (KS1 & KS2)', '| Ages 6 to 11'], label: 'Primary (KS1 & KS2)',
    subtitle: 'Virtual 1:1 Tuition',
    description: 'Online tuition built around your child’s needs, strengths and goals.',
    detail: {
      eyebrow: 'Primary · Ages 5–11',
      heading: 'Primary Tuition (KS1 & KS2)',
      intro: 'Our primary tuition supports children in developing their knowledge, strengthening essential skills and growing in confidence across the primary curriculum. Sessions are tailored to each child’s learning needs, with engaging activities that help make learning clear, purposeful and enjoyable.',
      features: [
        { icon: 'book', title: 'English', text: 'Reading, phonics where appropriate, writing, comprehension and grammar.' },
        { icon: 'calc', title: 'Maths', text: 'Number skills, calculations, mathematical reasoning and problem-solving.' },
        { icon: 'chart', title: 'Confidence & Progress', text: 'Helping children become more independent and confident learners.' },
      ],
      cta: 'Send Mrs A an email',
    },
  },
  {
    slug: 'learning-resources', tone: 'c3', icon: 'book', stroke: '#f08a3c', art: 'a3',
    title: ['Resources for', 'Learning & Confidence'], label: 'Learning Resources',
    subtitle: 'Practical, engaging resources',
    description: 'Practical, engaging resources to support children and the adults who support them.',
    detail: {
      eyebrow: 'Learning Resources',
      heading: 'Resources for Learning & Confidence',
      intro: 'Our educational resources are designed to help children practise essential skills, reinforce their learning and grow in confidence. From practical learning activities to parent-friendly guides, each resource aims to make supporting your child’s development more accessible and enjoyable.',
      features: [
        { icon: 'doc', title: 'Learning Activities', text: 'Engaging activities to practise and reinforce key skills.' },
        { icon: 'people', title: 'Parent Guides', text: 'Practical guidance to help you support your child’s learning at home.' },
        { icon: 'cap', title: 'Skill Development', text: 'Resources that support early literacy, phonics, numeracy and wider learning.' },
        { icon: 'home', title: 'School Readiness', text: 'Resources to help families prepare for important educational transitions.' },
      ],
      cta: 'Send Mrs A an email',
    },
  },
  {
    slug: 'parent-support', tone: 'c4', icon: 'people', stroke: '#2f9b6a', art: 'a4',
    title: ['Parent Support', '& Consultations'], label: 'Parent Support',
    subtitle: 'Guidance & 1:1 support',
    description: 'Guidance, workshops and 1:1 support to help you feel more confident supporting your child’s learning.',
    detail: {
      eyebrow: 'Parent Support',
      heading: 'Parent Support & Consultations',
      intro: 'We understand that parents want to feel confident supporting their child’s learning but may sometimes be unsure where to begin. Our parent support offers practical guidance, helpful strategies and an opportunity to discuss your child’s learning needs in a supportive, non-judgemental space.',
      features: [
        { icon: 'chat', title: 'One-to-One Consultations', text: 'Discuss your child’s learning, strengths and areas for development.' },
        { icon: 'calendar', title: 'School Readiness', text: 'Gain guidance on preparing your child for Reception and other learning transitions.' },
        { icon: 'bulb', title: 'Practical Strategies', text: 'Explore activities and approaches you can use at home.' },
        { icon: 'heart', title: 'Ongoing Guidance', text: 'Access appropriate resources and support to help reinforce your child’s learning journey.' },
      ],
      cta: 'Send Mrs A an email',
    },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);