import { AppLink } from '../lib/ComicThemeContext'
import { comicBuildBox } from '../data/content'

export default function ComicBuildBox() {
  return (
    <section className="comic-build-box section" aria-labelledby="comic-build-box-title">
      <div className="container comic-build-box__inner">
        <AppLink to="/offers" className="comic-build-box__card">
          <img
            className="comic-build-box__box"
            src="/build-box-illo.png"
            alt=""
            width={425}
            height={398}
            decoding="async"
            draggable={false}
          />
          <div className="comic-build-box__copy">
            <h2 id="comic-build-box-title" className="comic-build-box__title">
              {comicBuildBox.titleLines.map((line) => (
                <span key={line} className="comic-build-box__title-line">
                  {line}
                </span>
              ))}
            </h2>
            <p className="comic-build-box__subtitle">
              {comicBuildBox.subtitleLines.map((line) => (
                <span key={line} className="comic-build-box__subtitle-line">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </AppLink>
      </div>
    </section>
  )
}
