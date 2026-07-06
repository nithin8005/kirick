import { stickerHeroBgLines } from '../data/content'

export default function StickerHeroSection() {
  return (
    <section className="sticker-hero section" aria-hidden="true">
      <div className="sticker-hero__inner">
        <div className="sticker-hero__bg">
          {stickerHeroBgLines.map((line) => (
            <p
              key={line.text}
              className="sticker-hero__bg-line"
              style={{ '--bg-line-rotate': `${line.rotate}deg` }}
            >
              {line.text.repeat(4)}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
