import { comicHeroCopy } from '../data/content'

export default function ComicHeroBurst() {
  const taglineLines = Array.isArray(comicHeroCopy.tagline)
    ? comicHeroCopy.tagline
    : [comicHeroCopy.tagline]

  return (
    <div className="comic-hero-copy">
      <div
        className="comic-hero-copy__headline"
        aria-label={comicHeroCopy.headline.join(' ')}
      >
        {comicHeroCopy.headline.map((line) => (
          <span key={line} className="comic-hero-copy__headline-line">
            {line}
          </span>
        ))}
      </div>
      <p className="comic-hero-copy__tag">
        {taglineLines.map((line) => (
          <span key={line} className="comic-hero-copy__tag-line">
            {line}
          </span>
        ))}
      </p>
    </div>
  )
}
