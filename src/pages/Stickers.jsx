import ImagePlaceholder from '../components/ImagePlaceholder'
import { stickers, meters, stickerBrandCloud, stickersPageFooter } from '../data/content'

export default function Stickers() {
  return (
    <div className="page page--stickers">
      <section className="page-hero section section--alt">
        <div className="container page-hero__inner">
          <p className="eyebrow">Sticker &amp; catchy lines</p>
          <h1>Stickers</h1>
          <p className="page-hero__lead">
            Character concepts, meters, and brand lines from the KIRIK creative brief.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sticker-grid">
            {stickers.map((s) => (
              <article key={s.title} className="sticker-card">
                <ImagePlaceholder
                  label={s.imageLabel}
                  aspect="1/1"
                  variant="sticker"
                />
                <h3>{s.title}</h3>
                <p className="sticker-card__visual">{s.visual}</p>
                {s.dialogue?.length > 0 && (
                  <ul className="sticker-card__dialogue">
                    {s.dialogue.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          <header className="section-header stickers-meters-header">
            <p className="eyebrow">Meters</p>
            <h2 className="wire-title">Crunch &amp; spice meters</h2>
          </header>
          <div className="meters-row">
            {meters.map((m) => (
              <article key={m.title} className="meter-card">
                <ImagePlaceholder label={m.imageLabel} aspect="16/9" variant="sticker" />
                <h3 className="meter-card__title">{m.title}</h3>
                <p className="meter-card__label">{m.label}</p>
                <p className="meter-card__visual">{m.visual}</p>
              </article>
            ))}
          </div>

          <section className="sticker-cloud" aria-labelledby="sticker-cloud-title">
            <h2 id="sticker-cloud-title" className="sticker-cloud__title">
              {stickerBrandCloud.title}
            </h2>
            <p className="sticker-cloud__visual">{stickerBrandCloud.visual}</p>
            <div className="sticker-cloud__tags">
              {stickerBrandCloud.tags.map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <p className="stickers-footer-line">{stickersPageFooter}</p>
        </div>
      </section>
    </div>
  )
}

