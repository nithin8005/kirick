export default function ComicTiltedRibbon({ text, variant = 'solid', size = '' }) {
  const chips = Array.from({ length: 8 }, (_, i) => (
    <span key={i} className="comic-tilted-ribbon__chip">
      {text}
    </span>
  ))

  const sizeClass = size ? ` comic-tilted-ribbon--${size}` : ''

  return (
    <div
      className={`comic-tilted-ribbon comic-tilted-ribbon--${variant}${sizeClass}`}
      aria-hidden="true"
    >
      <div className="comic-tilted-ribbon__lane">
        <div className="comic-tilted-ribbon__track">
          <div className="comic-tilted-ribbon__group">{chips}</div>
          <div className="comic-tilted-ribbon__group">{chips}</div>
        </div>
      </div>
      <p className="comic-tilted-ribbon__sr-only">{text}</p>
    </div>
  )
}
