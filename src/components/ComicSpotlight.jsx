import { AppLink } from '../lib/ComicThemeContext'
import { comicSpotlights } from '../data/content'

function SpotlightCard({ spotlight, product }) {
  if (!product) return null

  return (
    <article className="comic-spotlight__card">
      <p className="comic-spotlight__badge">{spotlight.badge}</p>
      <div className="comic-spotlight__img-wrap">
        <img
          src={product.showcaseImage || product.image}
          alt={product.imageLabel}
          className="comic-spotlight__img"
          loading="lazy"
        />
      </div>
      <h3 className="comic-spotlight__name">{product.name}</h3>
      <p className="comic-spotlight__blurb">{product.gridBlurb || product.tagline}</p>
    </article>
  )
}

export default function ComicSpotlight({ products }) {
  return (
    <section className="comic-spotlight section" aria-labelledby="comic-spotlight-title">
      <div className="container">
        <h2 id="comic-spotlight-title" className="comic-section-title">
          MEET KIRIK FLAVORS
        </h2>
        <div className="comic-spotlight__grid">
          {comicSpotlights.map((spotlight) => (
            <SpotlightCard
              key={spotlight.productId}
              spotlight={spotlight}
              product={products.find((p) => p.id === spotlight.productId)}
            />
          ))}
        </div>
        <p className="comic-spotlight__cta">
          <AppLink to="/products" className="btn btn--comic-lg">
            Shop now!
          </AppLink>
        </p>
      </div>
    </section>
  )
}
