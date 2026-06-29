import { AppLink } from '../lib/ComicThemeContext'

function ShopCard({ product }) {
  return (
    <AppLink to="/products" className="comic-shop__card">
      <div className="comic-shop__img-wrap">
        <img
          src={product.showcaseImage || product.image}
          alt={product.imageLabel}
          className="comic-shop__img"
          loading="lazy"
        />
      </div>
      <div className="comic-shop__meta">
        <h3 className="comic-shop__name">{product.name}</h3>
        <p className="comic-shop__pack">1 PACK / CRUNCH SIZE</p>
        <p className="comic-shop__price">
          <span className="comic-shop__price-was">{product.priceWas}</span>
          <span className="comic-shop__price-now">{product.price}</span>
        </p>
      </div>
    </AppLink>
  )
}

export default function ComicShopRow({ products }) {
  return (
    <section className="comic-shop section" aria-label="Products">
      <div className="container">
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
