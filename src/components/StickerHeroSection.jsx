import { stickerHeroContent, comicDietaryBullets } from '../data/content'

export default function StickerHeroSection() {
  return (
    <section className="sticker-hero section" aria-label="KIRIK brand promise">
      <div className="sticker-hero__content">
        <p className="sticker-hero__eyebrow">{stickerHeroContent.eyebrow}</p>
        <h2 className="sticker-hero__title">{stickerHeroContent.title}</h2>
        <p className="sticker-hero__lead">{stickerHeroContent.lead}</p>
        <ul className="sticker-hero__claims">
          {comicDietaryBullets.map((claim) => (
            <li key={claim} className="sticker-hero__claim">
              {claim}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
