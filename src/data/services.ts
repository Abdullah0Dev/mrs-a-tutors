import type { IconName } from '@/components/ui/Icon';

export type Service = {
  tone: 'c1' | 'c2' | 'c3' | 'c4';
  icon: IconName;
  stroke: string;
  /** Heading lines (rendered with a line break between them) */
  title: string[];
  /** Short name used in the footer */
  label: string;
  subtitle: string;
  description: string;
  /** Illustration symbol id from <SvgSprite /> */
  art: 'a1' | 'a2' | 'a3' | 'a4';
};

export const services: Service[] = [
  {
    tone: 'c1', icon: 'sprout', stroke: '#f4246f', art: 'a1',
    title: ['Early Years (EYFS)', '| Ages 3 to 5'], label: 'Early Years (EYFS)',
    subtitle: 'In-Person Learning Support',
    description: 'Hands-on, purposeful learning that nurtures early skills, confidence and curiosity.',
  },
  {
    tone: 'c2', icon: 'laptop', stroke: '#2f6fb0', art: 'a2',
    title: ['Primary (KS1 & KS2)', '| Ages 6 to 11'], label: 'Primary (KS1 & KS2)',
    subtitle: 'Virtual 1:1 Tuition',
    description: 'Online tuition built around your child’s needs, strengths and goals.',
  },
  {
    tone: 'c3', icon: 'book', stroke: '#f08a3c', art: 'a3',
    title: ['Resources for', 'Learning & Confidence'], label: 'Learning Resources',
    subtitle: 'Practical, engaging resources',
    description: 'Practical, engaging resources to support children and the adults who support them.',
  },
  {
    tone: 'c4', icon: 'people', stroke: '#2f9b6a', art: 'a4',
    title: ['Parent Support', '& Consultations'], label: 'Parent Support',
    subtitle: 'Guidance & 1:1 support',
    description: 'Guidance, workshops and 1:1 support to help you feel more confident supporting your child’s learning.',
  },
];
