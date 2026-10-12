import type { IconName } from '@/components/ui/Icon';

export const trustPoints: { tone: 't1' | 't2' | 't3'; icon: IconName; stroke: string; title: string; detail: string }[] = [
  { tone: 't1', icon: 'cert', stroke: '#f4246f', title: 'Qualified Teacher Status (QTS)', detail: 'Primary Education · 2019' },
  { tone: 't2', icon: 'board', stroke: '#f08a3c', title: '5+ Years’ Teaching Experience', detail: 'Full-time classroom teaching' },
  { tone: 't3', icon: 'cap', stroke: '#2f6fb0', title: 'BA (Hons) Sociology', detail: 'Upper Second-Class Honours (2:1) · 2017' },
];
