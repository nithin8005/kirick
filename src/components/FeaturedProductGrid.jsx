import { AppLink } from '../lib/ComicThemeContext'
import PackShowcase from './PackShowcase'
import { packThemeClass, isShowcaseCard } from '../lib/packTheme'

function ProductCard({ product, linked }) {
  const cardClass = `featured-grid__card${isShowcaseCard(product) ? ' featured-grid__card--showcase' : ''}`

  const content = (
    <>
      <div
        className={`featured-grid__image-wrap${product.showcaseImage ? ' featured-grid__image-wrap--prebuilt' : ''} ${packThemeClass(product.id)}`.trim()}
      >
        {!product.newBadgeInImage && (
          <span className="badge-new badge-new--on-image" aria-label="New product">
            NEW
          </span>
        )}
        {product.showcaseImage ? (
          <img
            src={product.showcaseImage}
            alt={product.imageLabel}
            className="featured-grid__showcase-img featured-grid__img"
            loading="lazy"
          />
        ) : (
          <PackShowcase
            src={product.image}
            alt={product.imageLabel}
            themeId={product.id}
            imgClassName="featured-grid__img"
          />
        )}
      </div>
      <div className="featured-grid__meta">
        <div className="featured-grid__title-row">
          <h3 className="featured-grid__name">{product.name}</h3>
          <span className="featured-grid__price">{product.price}</span>
        </div>
        <p className="featured-grid__blurb">{product.gridBlurb || product.tagline}</p>
      </div>
    </>
  )

  if (linked) {
    return (
      <AppLink to="/products" className={cardClass}>
        {content}
      </AppLink>
    )
  }

  return <article className={cardClass}>{content}</article>
}

export default function FeaturedProductGrid({ products, linked = true, eyebrow, title, compact = false }) {
  return (
    <section className={`featured-grid section${compact ? ' featured-grid--compact' : ''}`}>
      <div className="container">
        {(eyebrow || title) && (
          <header className={`section-header${compact ? ' section-header--compact' : ''}`}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && (compact ? <h1>{title}</h1> : <h2>{title}</h2>)}
          </header>
        )}
        <div className="featured-grid__row">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} linked={linked} />
          ))}
        </div>
      </div>
    </section>
  )
}
