import { stickerHeroWallRows } from '../data/content'

function WallRow({ text }) {
  const repeated = text.repeat(3)
  const parts = repeated.split(/(KIRIK(?:\s+CHIPS)?)/gi)

  return (
    <p className="sticker-hero__wall-row">
      {parts.map((part, index) =>
        /^KIRIK/i.test(part) ? (
          <span key={`${part}-${index}`} className="sticker-hero__wall-kirik">
            {part}
          </span>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </p>
  )
}

export default function StickerHeroSection() {
  return (
    <section className="sticker-hero section" aria-label="KIRIK brand wallpaper">
      <div className="sticker-hero__wallpaper" aria-hidden="true">
        {stickerHeroWallRows.map((text, index) => (
          <WallRow key={index} text={text} />
        ))}
      </div>
    </section>
  )
}
