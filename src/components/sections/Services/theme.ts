/** One colour theme per service tone. Class names are written out in full so Tailwind can see them. */
export const THEME = {
  c1: { banner: 'bg-[linear-gradient(115deg,#fde3ec_0%,#fff0f5_55%,#fff8fb_100%)]', accent: 'text-[#f4246f]', stroke: 'stroke-[#f4246f]', blob: 'bg-[#f4246f]/10', ring: 'ring-[#f4246f]/15', soft: 'bg-[#fde3ec]' },
  c2: { banner: 'bg-[linear-gradient(115deg,#e3f0fc_0%,#eef6fd_55%,#f7fbff_100%)]', accent: 'text-[#2f6fb0]', stroke: 'stroke-[#2f6fb0]', blob: 'bg-[#2f6fb0]/10', ring: 'ring-[#2f6fb0]/15', soft: 'bg-[#e3f0fc]' },
  c3: { banner: 'bg-[linear-gradient(115deg,#fff0dc_0%,#fff6e8_55%,#fffaf3_100%)]', accent: 'text-[#f08a3c]', stroke: 'stroke-[#f08a3c]', blob: 'bg-[#f08a3c]/10', ring: 'ring-[#f08a3c]/20', soft: 'bg-[#fff0dc]' },
  c4: { banner: 'bg-[linear-gradient(115deg,#e6f5e9_0%,#eff9f1_55%,#f8fcf9_100%)]', accent: 'text-[#2f9b6a]', stroke: 'stroke-[#2f9b6a]', blob: 'bg-[#2f9b6a]/10', ring: 'ring-[#2f9b6a]/15', soft: 'bg-[#e6f5e9]' },
} as const;