import { ImageResponse } from 'next/og';

export const alt = 'Mrs A Tutors – Tuition for EYFS, KS1 & KS2';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 90, background: 'linear-gradient(120deg,#fff 0%,#fdf1e6 60%,#fde3ec 100%)', fontFamily: 'Georgia, serif' }}>
        <div style={{ color: '#f4246f', fontSize: 28, letterSpacing: 6, textTransform: 'uppercase', fontFamily: 'sans-serif' }}>Tuition for EYFS | KS1 | KS2</div>
        <div style={{ fontSize: 96, fontWeight: 800, color: '#1c1b22', lineHeight: 1.05, marginTop: 24 }}>Learning That Builds Confidence</div>
        <div style={{ fontSize: 40, color: '#55535e', marginTop: 30, fontFamily: 'sans-serif' }}>Mrs A Tutors · Small steps, big futures.</div>
      </div>
    ),
    size,
  );
}
