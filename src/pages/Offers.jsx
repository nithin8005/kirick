import OffersSection from '../components/OffersSection'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { offers } from '../data/content'

export default function Offers() {
  return (
    <div className="page">
      <OffersSection />

      <section className="section">
        <div className="container">
          <header className="section-header">
            <p className="eyebrow">Upcoming</p>
            <h2 className="wire-title">Launches &amp; events</h2>
          </header>
          <div className="offers-grid">
            {offers.map((o) => (
              <article key={o.title} className="offer-card">
                <ImagePlaceholder label={o.imageLabel} aspect="16/9" variant="banner" />
                <div className="offer-card__body">
                  <span className="offer-card__date">{o.date}</span>
                  <h3>{o.title}</h3>
                  <p>{o.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
