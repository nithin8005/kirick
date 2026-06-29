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
        <p className="comic-shop__pack">1 PACK / CRUNCH SIZE</p>
        <h3 className="comic-shop__name">{product.name}</h3>
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
    <section className="comic-shop section section--comic-pink" aria-labelledby="comic-shop-title">
      <div className="container">
        <h2 id="comic-shop-title" className="comic-section-title comic-section-title--light">
          WE MAKE DOSA CHIPS LOUD.
        </h2>
        <div className="comic-shop__grid">
          {products.map((product) => (
            <ShopCard key={product.id} product={product} />
          ))}
        </div>
        <p className="comic-shop__cta">
          <AppLink to="/products" className="btn btn--comic-lg btn--comic-inverse">
            Shop all!!!
          </AppLink>
        </p>
      </div>
    </section>
  )
}
