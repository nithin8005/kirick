import { AppLink } from '../lib/ComicThemeContext'
import { comicProductMeta } from '../data/content'
import ProductDualPhoto from './ProductDualPhoto'
import ProductNewBadge from './ProductNewBadge'

function ShopCard({ product }) {
  const meta = comicProductMeta[product.id] || {}

  return (
    <AppLink
      to="/products"
      className="comic-shop__card"
      style={{ '--comic-card-bg': meta.cardBg || '#fff9f0' }}
    >
      <ProductNewBadge />
      <span className="comic-shop__pop" aria-hidden="true">
        {meta.flavorPop}
      </span>
      <div className="comic-shop__img-wrap">
        <ProductDualPhoto product={product} imgClassName="comic-shop__img" />
      </div>
      <div className="comic-shop__meta">
        <h3 className="comic-shop__name">{product.name}</h3>
        <p className="comic-shop__desc">{product.gridBlurb || product.tagline}</p>
        <p className="comic-shop__price">
          <span className="comic-shop__price-was">{product.priceWas}</span>
          <span className="comic-shop__price-now">{product.price}</span>
          <span className="comic-shop__price-each"> each</span>
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
        <div className="comic-shop__grid">
          {products.map((product) => (
            <ShopCard key={product.id} product={product} />
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
