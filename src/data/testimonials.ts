export type Testimonial = { name: string; role?: string; paragraphs: string[] };

export const testimonials: Testimonial[] = [
  {
    name: 'Osman',
    paragraphs: ['Mrs A’s lessons have been so fun. Some lessons were easy & some more challenging. I enjoyed the English lessons more, especially reading stories with Mrs A.'],
  },
  {
    name: 'Irene',
    paragraphs: ['My 4-year-old really enjoyed tuition. It was engaging, and tutors were super friendly, creating a warm learning atmosphere.'],
  },
  {
    name: 'Rhyanne',
    paragraphs: [
      'My son has been receiving tutoring from Mrs. A for the past five weeks, and I’ve seen an amazing improvement in both his confidence and ability in Maths and English.',
      'He’s now more engaged and positive about learning — it’s been such a huge change!',
    ],
  },
  {
    name: 'Marie',
    role: 'Early Years Parent',
    paragraphs: ['If you’re looking for an Early Years tutor, Mrs A Tutors is a must! Mrs A was amazing with my daughter and shared helpful tips to support her learning at home. We’re already looking forward to the next session! Thank you so much!!! ❤️'],
  },
];
