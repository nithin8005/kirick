import { Link } from 'react-router-dom'
import PackShowcase from './PackShowcase'
import { packThemeClass, isShowcaseCard } from '../lib/packTheme'

export default function FeaturedProductGrid({ products }) {
  return (
    <section className="featured-grid section">
      <div className="container">
        <div className="featured-grid__row">
          {products.map((p) => (
            <Link
              key={p.id}
              to={`/products#${p.id}`}
              className={`featured-grid__card${isShowcaseCard(p) ? ' featured-grid__card--showcase' : ''}`}
            >
              <div
                className={`featured-grid__image-wrap${p.showcaseImage ? ' featured-grid__image-wrap--prebuilt' : ''} ${packThemeClass(p.id)}`.trim()}
              >
                {p.isNew && !p.showcaseImage && <span className="featured-grid__new">NEW</span>}
                {p.showcaseImage ? (
                  <img
                    src={p.showcaseImage}
                    alt={p.imageLabel}
                    className="featured-grid__showcase-img featured-grid__img"
                    loading="lazy"
                  />
                ) : (
                  <PackShowcase
                    src={p.image}
                    alt={p.imageLabel}
                    themeId={p.id}
                    imgClassName="featured-grid__img"
                  />
                )}
              </div>
              <div className="featured-grid__meta">
                <div className="featured-grid__title-row">
                  <h3 className="featured-grid__name">{p.name}</h3>
                  <span className="featured-grid__price">{p.price}</span>
                </div>
                <p className="featured-grid__blurb">{p.gridBlurb || p.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
