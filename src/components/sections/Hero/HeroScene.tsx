export default function HeroScene() {
  return (
    <svg viewBox="0 0 600 414" preserveAspectRatio="xMidYMid meet">
      <rect x="360" y="14" width="150" height="190" fill="#f6a9c3" opacity=".9"/>
      <text x="435" y="72" textAnchor="middle" style={{fontFamily:'var(--font-hand)'}} fontSize="38" fill="#b7335f">Small</text><text x="435" y="108" textAnchor="middle" style={{fontFamily:'var(--font-hand)'}} fontSize="38" fill="#b7335f">Steps</text><text x="435" y="146" textAnchor="middle" style={{fontFamily:'var(--font-hand)'}} fontSize="38" fill="#b7335f">Big</text><text x="435" y="184" textAnchor="middle" style={{fontFamily:'var(--font-hand)'}} fontSize="38" fill="#b7335f">Futures</text>
      <rect x="40" y="120" width="30" height="5" fill="#e6cfba"/>
      
      <use href="#plant" x="5" y="70" width="70" height="95"/>
      <use href="#plant" x="270" y="30" width="55" height="75"/>
      <path d="M0 330h600v84H0z" fill="#f3dccb"/><path d="M0 330h600" stroke="#e6c9b4" strokeWidth="3"/>
      <use href="#books" x="60" y="250" width="190" height="86"/>

      <rect x="150" y="120" width="250" height="160" rx="10" fill="#34343c"/><rect x="160" y="130" width="230" height="140" rx="4" fill="#fff"/>
      <text x="275" y="178" textAnchor="middle" style={{fontFamily:'var(--font-hand)'}} fontSize="34" fill="#ec4f86">Small Steps</text><text x="275" y="214" textAnchor="middle" style={{fontFamily:'var(--font-hand)'}} fontSize="34" fill="#ec4f86">Big Futures</text>
      <path d="M340 230q18-30 36 0M346 230q12-20 24 0" fill="none" stroke="#f6b800" strokeWidth="5" strokeLinecap="round"/>
      <path d="M120 284h310l-16 22H136z" fill="#b8b8c0"/>

      <use href="#pot" x="455" y="150" width="90" height="130"/>

      <rect x="500" y="262" width="100" height="70" rx="18" fill="#f9a8c9"/><circle cx="530" cy="290" r="6" fill="#fff"/><circle cx="560" cy="305" r="6" fill="#fff"/><circle cx="585" cy="280" r="6" fill="#fff"/>

      <rect x="280" y="322" width="230" height="70" rx="6" fill="#fff" transform="rotate(-8 280 322)" stroke="#e8dccf"/>
      <path d="M160 350l110-24" stroke="#f08a3c" strokeWidth="7" strokeLinecap="round"/><path d="M180 366l110-24" stroke="#4aa3df" strokeWidth="7" strokeLinecap="round"/><path d="M360 340l120-22" stroke="#ef6aa1" strokeWidth="7" strokeLinecap="round"/>
    </svg>
  );
}
