import type { CSSProperties } from 'react';

/**
 * Spread onto any element to fade it up when it scrolls into view.
 * `index` staggers siblings; `variant="tilt"` keeps a rotated element's tilt.
 * Handled by <RevealObserver /> + styles/reveal.css.
 */
export function reveal(index = 0, variant = '') {
  return {
    'data-reveal': variant,
    style: { '--d': `${Math.min(index, 4) * 0.09}s` } as CSSProperties,
  };
}
