import { useId, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Clay / soft-3D illustration kit                                    */
/*  - vertical gradients on every shape (light top -> deeper bottom)   */
/*  - soft gloss highlights                                            */
/*  - drop shadows + blurred ground shadows                            */
/*  Every <svg> uses its own unique id prefix, so you can render the   */
/*  same component many times on a page without gradient collisions.   */
/* ------------------------------------------------------------------ */

type SvgProps = { className?: string };

const FONT = "Nunito, 'Arial Rounded MT Bold', ui-rounded, system-ui, sans-serif";

function useUid() {
  return `c${useId().replace(/:/g, "")}`;
}

const PAL: Record<string, [string, string]> = {
  purple: ["#d6b9f4", "#9b73d9"],
  blue: ["#8accf8", "#4b95e0"],
  green: ["#a6e5b1", "#5bbf7a"],
  yellow: ["#ffe88a", "#f4bb2c"],
  orange: ["#ffc2a8", "#f4855e"],
  wood: ["#f7ddb7", "#dcb27e"],
  woodTop: ["#fdeccd", "#f3d5a8"],
  woodSide: ["#e8c493", "#c99a64"],
  cream: ["#ffffff", "#efe6da"],
  cup: ["#ffffff", "#e9dfd0"],
  paper: ["#ffffff", "#f1ede7"],
  bGreen: ["#93d8a9", "#4fae78"],
  bYellow: ["#ffe28e", "#f2b93b"],
  bBlue: ["#80c3f3", "#4a8fdc"],
  pinkBubble: ["#ffa3c6", "#ee6598"],
  greenBubble: ["#c3ebc4", "#8ccd97"],
  pinkPanel: ["#fbbdd3", "#f29bbb"],
  floor: ["#f9e8d9", "#efd0b8"],
  frame: ["#45454f", "#2a2a32"],
  silver: ["#d8d8e0", "#a8a8b4"],
  pot: ["#ffb8d4", "#f287b3"],
  leaf: ["#94dea3", "#47b46d"],
  leafDark: ["#70ca89", "#369a5c"],
};

const g = (p: string, k: string) => `url(#${p}-${k})`;

function Defs({ p }: { p: string }) {
  return (
    <defs>
      <filter id={`${p}-sh`} x="-25%" y="-25%" width="150%" height="165%">
        <feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#3b2a4a" floodOpacity="0.2" />
      </filter>
      <filter id={`${p}-sm`} x="-25%" y="-25%" width="150%" height="170%">
        <feDropShadow dx="0" dy="3" stdDeviation="3.2" floodColor="#3b2a4a" floodOpacity="0.22" />
      </filter>
      <filter id={`${p}-blur`} x="-50%" y="-100%" width="200%" height="300%">
        <feGaussianBlur stdDeviation="6" />
      </filter>
      <filter id={`${p}-blur-sm`} x="-50%" y="-100%" width="200%" height="300%">
        <feGaussianBlur stdDeviation="2.4" />
      </filter>
      {Object.entries(PAL).map(([k, [a, b]]) => (
        <linearGradient key={k} id={`${p}-${k}`} x1="0" y1="0" x2="0.15" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      ))}
    </defs>
  );
}

function Ground({
  p, cx, cy, rx, ry, o = 0.2,
}: { p: string; cx: number; cy: number; rx: number; ry: number; o?: number }) {
  return <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#3b2a4a" opacity={o} filter={`url(#${p}-blur)`} />;
}

function Lines({ x, y, w, n, gap = 12 }: { x: number; y: number; w: number; n: number; gap?: number }) {
  return (
    <>
      {Array.from({ length: n }).map((_, i) => (
        <rect key={i} x={x} y={y + i * gap} width={i === n - 1 ? w * 0.6 : w} height="5" rx="2.5" fill="#d9dde6" />
      ))}
    </>
  );
}

function starPoints(cx: number, cy: number, R: number, r: number) {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const rad = i % 2 === 0 ? R : r;
    const a = (Math.PI / 5) * i - Math.PI / 2;
    pts.push(`${(cx + rad * Math.cos(a)).toFixed(1)},${(cy + rad * Math.sin(a)).toFixed(1)}`);
  }
  return pts.join(" ");
}

/* ---------------------------- Building blocks ---------------------------- */

function Ring({ p, k, cx, y, w, h }: { p: string; k: string; cx: number; y: number; w: number; h: number }) {
  const x = cx - w / 2;
  return (
    <g filter={`url(#${p}-sm)`}>
      <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={g(p, k)} />
      <ellipse cx={cx - w * 0.17} cy={y + h * 0.3} rx={w * 0.28} ry={h * 0.12} fill="#fff" opacity=".55" />
      <ellipse cx={cx + w * 0.3} cy={y + h * 0.78} rx={w * 0.14} ry={h * 0.07} fill="#fff" opacity=".18" />
    </g>
  );
}

function Block({
  p, x, y, s, d = 14, letter, color, rot = 0,
}: { p: string; x: number; y: number; s: number; d?: number; letter: string; color: string; rot?: number }) {
  return (
    <g transform={`rotate(${rot} ${x + s / 2} ${y + s / 2})`} filter={`url(#${p}-sm)`}>
      <path
        d={`M${x + s} ${y} L${x + s + d} ${y - d} L${x + s + d} ${y + s - d} L${x + s} ${y + s}Z`}
        fill={g(p, "woodSide")} stroke="#c99a64" strokeWidth="4" strokeLinejoin="round"
      />
      <path
        d={`M${x} ${y} L${x + d} ${y - d} L${x + s + d} ${y - d} L${x + s} ${y}Z`}
        fill={g(p, "woodTop")} stroke="#f3d5a8" strokeWidth="4" strokeLinejoin="round"
      />
      <rect x={x} y={y} width={s} height={s} rx="6" fill={g(p, "wood")} stroke="#e8c593" strokeWidth="4" strokeLinejoin="round" />
      <text x={x + s / 2 + 1.5} y={y + s * 0.72 + 2} textAnchor="middle" fontFamily={FONT} fontWeight={900} fontSize={s * 0.66} fill="#fff" opacity=".7">
        {letter}
      </text>
      <text x={x + s / 2} y={y + s * 0.72} textAnchor="middle" fontFamily={FONT} fontWeight={900} fontSize={s * 0.66} fill={color}>
        {letter}
      </text>
    </g>
  );
}

function Book({
  p, k, x, y, w, h = 38,
}: { p: string; k: string; x: number; y: number; w: number; h?: number }) {
  return (
    <g filter={`url(#${p}-sm)`}>
      <rect x={x} y={y} width={w} height={h} rx="9" fill={g(p, k)} />
      <rect x={x + w * 0.14} y={y + h * 0.18} width={w * 0.8} height={h * 0.64} rx="5" fill={g(p, "cream")} />
      {h >= 34 && (
        <>
          <line x1={x + w * 0.24} x2={x + w * 0.86} y1={y + h * 0.4} y2={y + h * 0.4} stroke="#e2d8c9" strokeWidth="2" strokeLinecap="round" />
          <line x1={x + w * 0.24} x2={x + w * 0.86} y1={y + h * 0.6} y2={y + h * 0.6} stroke="#e2d8c9" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
      <rect x={x + 8} y={y + 3.5} width={w * 0.2} height="4.5" rx="2.25" fill="#fff" opacity=".5" />
    </g>
  );
}

type PencilSpec = { x: number; angle: number; len: number; color: string };

function Pencil({ x, angle, len, color }: PencilSpec) {
  return (
    <g transform={`translate(${x} 6) rotate(${angle})`}>
      <rect x="-7" y={-len} width="14" height={len} rx="3" fill={color} />
      <rect x="0" y={-len} width="7" height={len} rx="3" fill="#000" opacity=".1" />
      <rect x="-4.5" y={-len + 6} width="3" height={len - 16} rx="1.5" fill="#fff" opacity=".42" />
      <path d={`M-7 ${-len} L0 ${-len - 26} L7 ${-len}Z`} fill="#f6d9b0" stroke="#f6d9b0" strokeWidth="2" strokeLinejoin="round" />
      <path d={`M-3 ${-len - 17} L0 ${-len - 26} L3 ${-len - 17}Z`} fill={color} />
    </g>
  );
}

/* Local box: 90 wide, rim centre at (45,0), body bottom at y=122 */
function PencilCup({
  p, x, y, s = 1, pencils,
}: { p: string; x: number; y: number; s?: number; pencils: PencilSpec[] }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <ellipse cx="45" cy="0" rx="45" ry="11" fill="#d9cfbf" />
      <ellipse cx="45" cy="2" rx="40" ry="8" fill="#a99d8a" opacity=".55" />
      {pencils.map((pc, i) => (
        <Pencil key={i} {...pc} />
      ))}
      <g filter={`url(#${p}-sm)`}>
        <path d="M0 0 A45 11 0 0 0 90 0 L90 96 Q90 122 66 122 L24 122 Q0 122 0 96 Z" fill={g(p, "cup")} />
      </g>
      <path d="M0 0 A45 11 0 0 0 90 0" fill="none" stroke="#fff" strokeWidth="3" opacity=".9" />
      <rect x="10" y="24" width="8" height="76" rx="4" fill="#fff" opacity=".75" />
      <rect x="72" y="30" width="5" height="60" rx="2.5" fill="#000" opacity=".04" />
    </g>
  );
}

function Paper({
  p, x, y, w, h, rot, children,
}: { p: string; x: number; y: number; w: number; h: number; rot: number; children: ReactNode }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot} ${w / 2} ${h / 2})`} filter={`url(#${p}-sh)`}>
      <rect width={w} height={h} rx="10" fill={g(p, "paper")} stroke="#ebe4d9" strokeWidth="1.5" />
      {children}
    </g>
  );
}
 

/* ============================ 1. EYFS ============================ */

const RINGS = [
  { k: "purple", w: 160, y: 200, h: 44 },
  { k: "blue", w: 134, y: 160, h: 44 },
  { k: "green", w: 110, y: 122, h: 42 },
  { k: "yellow", w: 88, y: 86, h: 40 },
];

export function EyfsIllustration({ className }: SvgProps) {
  const p = useUid();
  return (
    <svg viewBox="0 0 380 270" className={className} aria-hidden="true">
      <Defs p={p} />
      <Ground p={p} cx={80} cy={248} rx={84} ry={10} />
      <Ground p={p} cx={270} cy={248} rx={92} ry={11} />

      {/* ABC blocks */}
      <Block p={p} x={6} y={186} s={58} letter="B" color="#4a97e0" rot={-3} />
      <Block p={p} x={76} y={190} s={58} letter="C" color="#4fb98a" rot={5} />
      <Block p={p} x={38} y={122} s={58} letter="A" color="#ef6f7e" rot={-8} />

      {/* stacking rings */}
      <g transform="translate(160 0)">
        {RINGS.map((r) => (
          <Ring key={r.k} p={p} k={r.k} cx={110} y={r.y} w={r.w} h={r.h} />
        ))}
        <g filter={`url(#${p}-sm)`}>
          <rect x="97" y="6" width="26" height="70" rx="13" fill={g(p, "wood")} />
          <rect x="101" y="14" width="5" height="44" rx="2.5" fill="#fff" opacity=".5" />
        </g>
        <Ring p={p} k="orange" cx={110} y={54} w={66} h={36} />
      </g>
    </svg>
  );
}

/* ============================ 2. Primary ============================ */

export function PrimaryIllustration({ className }: SvgProps) {
  const p = useUid();
  return (
    <svg viewBox="0 0 380 270" className={className} aria-hidden="true">
      <Defs p={p} />
      <Ground p={p} cx={135} cy={246} rx={122} ry={10} />
      <Ground p={p} cx={307} cy={246} rx={52} ry={8} />

      <Book p={p} k="bGreen" x={24} y={204} w={220} h={40} />
      <Book p={p} k="bYellow" x={36} y={164} w={208} h={40} />
      <Book p={p} k="bBlue" x={50} y={124} w={190} h={40} />

      <PencilCup
        p={p} x={262} y={122}
        pencils={[
          { x: 20, angle: -24, len: 70, color: "#f59a4a" },
          { x: 36, angle: -7, len: 92, color: "#f27aa8" },
          { x: 56, angle: 9, len: 86, color: "#4a8fe0" },
          { x: 72, angle: 24, len: 66, color: "#3aa89a" },
        ]}
      />

      <path d="M300 8 l-2 15" stroke="#f6c445" strokeWidth="4" strokeLinecap="round" />
      <path d="M322 14 l9 -8" stroke="#f6a53a" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

/* ============================ 3. Resources ============================ */

export function ResourcesIllustration({ className }: SvgProps) {
  const p = useUid();
  return (
    <svg viewBox="0 0 380 270" className={className} aria-hidden="true">
      <Defs p={p} />
      <Ground p={p} cx={215} cy={246} rx={150} ry={10} />

      <Paper p={p} x={110} y={92} w={108} h={140} rot={-9}>
        <rect x="14" y="16" width="50" height="9" rx="4.5" fill="#f4a3c0" />
        <Lines x={14} y={38} w={80} n={4} />
      </Paper>

      <Paper p={p} x={236} y={86} w={116} h={146} rot={10}>
        <rect x="12" y="16" width="74" height="9" rx="4.5" fill="#9bd5a9" />
        <Lines x={12} y={38} w={90} n={3} />
        <circle cx="26" cy="98" r="7" fill="#7fd0c8" />
        <circle cx="50" cy="102" r="7" fill="#f4a3c0" />
        <rect x="12" y="120" width="70" height="9" rx="4.5" fill="#9cc8f0" />
      </Paper>

      <Paper p={p} x={160} y={58} w={124} h={170} rot={4}>
        <Lines x={14} y={22} w={46} n={3} />
        <rect x="68" y="14" width="44" height="42" rx="7" fill="#fff" stroke="#e6dfd3" strokeWidth="1.5" />
        <polygon points={starPoints(90, 36, 14, 6)} fill="#ffcf3a" stroke="#ffcf3a" strokeWidth="3" strokeLinejoin="round" />
        <Lines x={14} y={76} w={96} n={5} />
      </Paper>

      <PencilCup
        p={p} x={70} y={148} s={0.85}
        pencils={[
          { x: 22, angle: -18, len: 64, color: "#4a8fe0" },
          { x: 40, angle: -4, len: 84, color: "#f6c13a" },
          { x: 58, angle: 8, len: 78, color: "#f27aa8" },
          { x: 72, angle: 20, len: 60, color: "#4a8fe0" },
        ]}
      />

      <path d="M54 104 l-14 -8" stroke="#f6c445" strokeWidth="4" strokeLinecap="round" />
      <path d="M46 124 l-16 -2" stroke="#f6a53a" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

/* ============================ 4. Parent support ============================ */

const HEART = "M0 16 C-30 -2 -18 -26 0 -10 C18 -26 30 -2 0 16Z";

export function ParentSupportIllustration({ className }: SvgProps) {
  const p = useUid();
  return (
    <svg viewBox="0 0 380 270" className={className} aria-hidden="true">
      <Defs p={p} />

      {/* green bubble (back) */}
      <g filter={`url(#${p}-sh)`}>
        <path d="M78 160 Q66 192 34 206 Q86 208 114 176Z" fill="#8fcf99" stroke="#8fcf99" strokeWidth="4" strokeLinejoin="round" />
        <rect x="30" y="40" width="190" height="140" rx="70" fill={g(p, "greenBubble")} />
      </g>
      <ellipse cx="92" cy="72" rx="42" ry="12" fill="#fff" opacity=".4" transform="rotate(-20 92 72)" />

      {/* pink bubble (front) */}
      <g filter={`url(#${p}-sh)`}>
        <path d="M296 230 Q308 254 338 264 Q292 268 262 236Z" fill="#ee6a9b" stroke="#ee6a9b" strokeWidth="4" strokeLinejoin="round" />
        <rect x="150" y="104" width="190" height="140" rx="70" fill={g(p, "pinkBubble")} />
      </g>
      <ellipse cx="206" cy="136" rx="38" ry="11" fill="#fff" opacity=".35" transform="rotate(-20 206 136)" />

      <g transform="translate(245 176) scale(1.15)">
        <path d={HEART} fill="#fff" stroke="#fff" strokeWidth="5" strokeLinejoin="round" opacity=".95" />
        <path d="M-12 -8 C-16 -2 -14 2 -9 6" fill="none" stroke="#ffd5e5" strokeWidth="3" strokeLinecap="round" />
      </g>

      <path d="M296 72 l-4 -16" stroke="#7fc58b" strokeWidth="4" strokeLinecap="round" />
      <path d="M318 80 l12 -10" stroke="#7fc58b" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
 