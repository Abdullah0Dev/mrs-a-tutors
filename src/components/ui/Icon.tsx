import type { ReactNode } from 'react';

const paths = {
  people: (<><circle cx="12" cy="10" r="5" /><path d="M3 27c0-6 4-9 9-9s9 3 9 9" /><circle cx="23" cy="12" r="3.5" /><path d="M22 19c5 0 8 3 8 8" /></>),
  book: <path d="M16 8C12 5 7 5 3 6v19c4-1 9-1 13 2 4-3 9-3 13-2V6c-4-1-9-1-13 2zM16 8v19" />,
  bulb: <path d="M16 3v3M5 9l2 2M27 9l-2 2M10 20c-3-4-1-11 6-11s9 7 6 11c-1 2-2 3-2 5h-8c0-2-1-3-2-5zM12 28h8" />,
  sprout: <path d="M16 28V14M16 14C16 8 11 5 5 6c0 6 4 9 11 8M16 17c0-5 4-8 11-8 0 6-4 9-11 8" />,
  laptop: (<><rect x="5" y="7" width="22" height="15" rx="2" /><path d="M2 26h28" /></>),
  heart: <path d="M16 28S3 20 3 11a6.5 6.5 0 0 1 13-1 6.5 6.5 0 0 1 13 1c0 9-13 17-13 17z" />,
  chart: (<><rect x="4" y="18" width="6" height="10" rx="1" /><rect x="13" y="11" width="6" height="17" rx="1" /><rect x="22" y="4" width="6" height="24" rx="1" /></>),
  cert: (<><path d="M5 4h22v16H5z" /><path d="M10 9h12M10 14h8" /><circle cx="22" cy="22" r="4" /><path d="M20 26l-1 4 3-2 3 2-1-4" /></>),
  board: (<><rect x="3" y="5" width="26" height="18" rx="2" /><path d="M8 11h14M8 16h9M11 28h10M16 23v5" /></>),
  cap: (<><path d="M16 5L2 11l14 6 14-6z" /><path d="M8 15v7c4 4 12 4 16 0v-7M30 11v8" /></>),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

type Props = { name: IconName; stroke?: string; className?: string };

/** Outline icon set (32×32). Fill/stroke-width come from the parent's CSS. */
export default function Icon({ name, stroke, className }: Props) {
  return (
    <svg viewBox="0 0 32 32" stroke={stroke} className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
