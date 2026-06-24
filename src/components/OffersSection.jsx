import { AppLink } from '../lib/ComicThemeContext'
import { offers } from '../data/content'
import ImagePlaceholder from './ImagePlaceholder'

function OfferCard({ offer }) {
  return (
    <article className="offer-card">
      {offer.image ? (
        <img
          src={offer.image}
          alt={offer.imageLabel || offer.title}
          className="offer-card__img"
          loading="lazy"
        />
      ) : (
        <ImagePlaceholder label={offer.imageLabel} aspect="16/9" variant="banner" />
      )}
      <div className="offer-card__body">
        <div className="offer-card__meta">
          {offer.tag && <span className="offer-card__tag">{offer.tag}</span>}
          <span className="offer-card__date">{offer.date}</span>
        </div>
        <h3>{offer.title}</h3>
        <p>{offer.description}</p>
      </div>
    </article>
  )
}

export default function OffersSection({ showCta = true }) {
  return (
    <section className="offers-wire section section--alt">
      <div className="container">
        <header className="section-header section-header--center">
          <p className="eyebrow">Deals &amp; drops</p>
          <h2 className="wire-title wire-title--center">Offers</h2>
          <p className="section-header__sub">
            Launch drops, bundles, combos, club perks &amp; pop-ups — all crunch, no boring.
          </p>
        </header>
        <div className="offers-grid offers-grid--home">
          {offers.map((offer) => (
            <OfferCard key={offer.title} offer={offer} />
          ))}
        </div>
        {showCta && (
          <p className="offers-wire__cta">
            <AppLink to="/offers" className="btn btn--outline">
              View all offers
            </AppLink>
          </p>
        )}
      </div>
    </section>
  )
}
