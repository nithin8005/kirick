import { comicHeroCopy } from '../data/content'

export default function ComicHeroBurst() {
  return (
    <div className="comic-hero-copy">
      <div className="comic-burst">
        <span className="comic-burst__wash" aria-hidden="true" />
        <span className="comic-burst__splat" aria-hidden="true" />
        <h1 className="comic-burst__title">
          <span className="comic-burst__line">{comicHeroCopy.headline[0]}</span>
          <span className="comic-burst__line">
            <span className="comic-burst__zoom">ZOOOOM</span> LINE!
          </span>
        </h1>
      </div>
      <div className="comic-hero-copy__subline" aria-label={comicHeroCopy.subline.join(' ')}>
        {comicHeroCopy.subline.map((line) => (
          <span key={line} className="comic-hero-copy__subline-line">
            {line}
          </span>
        ))}
      </div>
      <p className="comic-hero-copy__tag">{comicHeroCopy.tagline}</p>
    </div>
  )
}
