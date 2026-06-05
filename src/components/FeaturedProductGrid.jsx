import { Link } from 'react-router-dom'

export default function FeaturedProductGrid({ products }) {
  return (
    <section className="featured-grid section">
      <div className="container">
        <div className="featured-grid__row">
          {products.map((p) => (
            <Link key={p.id} to={`/products#${p.id}`} className="featured-grid__card">
              <div className="featured-grid__image-wrap">
                {p.isNew && <span className="featured-grid__new">NEW</span>}
                <img src={p.image} alt={p.imageLabel} className="featured-grid__img" loading="lazy" />
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
