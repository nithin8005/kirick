import { AppLink } from '../lib/ComicThemeContext'
import { comicProductMeta } from '../data/content'
import ProductNewBadge from './ProductNewBadge'

function PackCard({ product }) {
  const meta = comicProductMeta[product.id] || {}
  const imgSrc = product.heroImage || product.showcaseImage || product.image

  return (
    <AppLink
      to="/products"
      className="comic-pack-card"
      style={{
        '--comic-card-bg': meta.cardBg || 'var(--kirik-soft-cream)',
        '--comic-card-ink': meta.cardInk || 'var(--color-ink)',
        '--comic-card-accent': meta.accent || 'var(--color-accent)',
      }}
    >
      <ProductNewBadge />
      <span className="comic-pack-card__pop">{meta.flavorPop || product.name}</span>
      <div className="comic-pack-card__visual">
        <img
          src={imgSrc}
          alt={product.imageLabel || `${product.name} — KIRIK Dosa Chips`}
          className="comic-pack-card__img"
          loading="lazy"
          decoding="async"
        />
        <span className="comic-pack-card__hover-name">{product.name}</span>
      </div>
      <div className="comic-pack-card__meta">
        <h3 className="comic-pack-card__name">{product.name}</h3>
        <p className="comic-pack-card__desc">{product.gridBlurb || product.tagline}</p>
        <p className="comic-pack-card__price">
          <span className="comic-pack-card__price-was">{product.priceWas}</span>
          <span className="comic-pack-card__price-now">{product.price}</span>
          <span className="comic-pack-card__price-each"> each</span>
        </p>
      </div>
    </AppLink>
  )
}

export default function ComicShopRow({ products }) {
  return (
    <section className="comic-shop section" aria-labelledby="comic-products-title">
      <div className="container">
        <div className="comic-shop__header">
          <h2 id="comic-products-title" className="comic-shop__title">
            PRODUCTS
          </h2>
          <span className="comic-shop__pack-bubble" aria-hidden="true">
            Pack of 4
          </span>
        </div>

        <div className="comic-pack-grid">
          {products.map((product) => (
            <PackCard key={product.id} product={product} />
          ))}
        </div>

        <p className="comic-shop__cta">
          <AppLink to="/products" className="btn btn--try-kirik btn--try-kirik-lg">
            Shop all!!!
          </AppLink>
        </p>
      </div>
    </section>
  )
}
