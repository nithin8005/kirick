import { comicRogueSection } from '../data/content'

export default function ComicRogueSection() {
  return (
    <section className="comic-rogue section" aria-labelledby="comic-rogue-title">
      <div className="container comic-rogue__grid">
        <div className="comic-rogue__visual">
          <img
            src={comicRogueSection.image}
            alt={comicRogueSection.imageAlt}
            className="comic-rogue__img"
            loading="lazy"
            width={704}
            height={510}
          />
        </div>
        <div className="comic-rogue__copy">
          <div className="comic-rogue__kicker" id="comic-rogue-title">
            <div className="comic-rogue__kicker-main">
              {comicRogueSection.smallHeading.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
            <div className="comic-rogue__kicker-accent">{comicRogueSection.smallHeadingAccent}</div>
          </div>

          <h3 className="comic-rogue__headline">{comicRogueSection.mainHeading}</h3>
          <p className="comic-rogue__para">{comicRogueSection.paragraph}</p>
          <p className="comic-rogue__desc">{comicRogueSection.description}</p>

          <div className="comic-rogue__chips" aria-label="Product features">
            {comicRogueSection.chips.map((chip) => (
              <span key={chip} className="comic-rogue__chip">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
