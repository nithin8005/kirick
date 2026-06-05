export default function FooterStamp() {
  return (
    <svg
      className="footer-stamp"
      viewBox="0 0 200 200"
      role="img"
      aria-label="KIRIK Certified Dosa Chips"
    >
      <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="3" />
      <defs>
        <path id="footer-stamp-top" d="M 30 100 A 70 70 0 0 1 170 100" fill="none" />
        <path id="footer-stamp-bottom" d="M 170 100 A 70 70 0 0 1 30 100" fill="none" />
      </defs>
      <text fontSize="11" fontWeight="700" letterSpacing="2" fill="currentColor">
        <textPath href="#footer-stamp-top" startOffset="50%" textAnchor="middle">
          CERTIFIED DOSA
        </textPath>
      </text>
      <text fontSize="11" fontWeight="700" letterSpacing="2" fill="currentColor">
        <textPath href="#footer-stamp-bottom" startOffset="50%" textAnchor="middle">
          KIRIK CHIPS
        </textPath>
      </text>
      <line x1="55" y1="100" x2="85" y2="100" stroke="currentColor" strokeWidth="3" />
      <line x1="115" y1="100" x2="145" y2="100" stroke="currentColor" strokeWidth="3" />
      <text
        x="100"
        y="112"
        textAnchor="middle"
        fontSize="42"
        fontWeight="800"
        fontFamily="Arial Black, sans-serif"
        fill="currentColor"
      >
        K
      </text>
    </svg>
  )
}
