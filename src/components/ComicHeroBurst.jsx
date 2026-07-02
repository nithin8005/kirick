import { comicHeroCopy } from '../data/content'

export default function ComicHeroBurst() {
  const taglineLines = Array.isArray(comicHeroCopy.tagline)
    ? comicHeroCopy.tagline
    : [comicHeroCopy.tagline]

  return (
    <div className="comic-hero-copy">
      <div className="comic-hero-copy__headline-wrap">
        <div
          className="comic-hero-copy__headline"
          aria-label={comicHeroCopy.headline.join(' ')}
        >
          {comicHeroCopy.headline.map((line, index) => (
            <span
              key={line}
              className={`comic-hero-copy__headline-line${
                index === 1 ? ' comic-hero-copy__headline-line--accent' : ''
              }`}
            >
              {line}
            </span>
          ))}
        </div>
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
