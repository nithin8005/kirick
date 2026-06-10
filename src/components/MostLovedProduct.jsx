import { useState } from 'react'
import ProductImage from './ProductImage'

export default function MostLovedProduct({ products, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)
  const active = products[activeIndex]

  return (
    <section className="most-loved section">
      <div className="container">
        <h2 className="wire-title wire-title--center">Most Loved Product</h2>
        <div className="most-loved__layout">
          <div className="most-loved__gallery">
            <div className="most-loved__thumbs" role="tablist" aria-label="Product flavors">
              {products.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === i}
                  aria-label={p.name}
                  className={`most-loved__thumb pack-theme--${p.id}${activeIndex === i ? ' most-loved__thumb--active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                >
                  <img src={p.image} alt="" className="most-loved__thumb-img pack-blend-img" />
                </button>
              ))}
            </div>
            <ProductImage
              src={active.image}
              alt={`${active.name} — KIRIK Dosa Chips`}
              showNew={active.isNew}
              themeId={active.id}
              className="most-loved__main"
            />
          </div>

          <div className="most-loved__info">
            <h3 className="wire-title wire-title--product">{active.name}</h3>
            <div className="most-loved__desc-box">
              <p className="most-loved__desc">{active.longDescription}</p>
            </div>
            <div className="most-loved__price">
              <span className="most-loved__price-current">{active.price}</span>
              <span className="most-loved__price-old">{active.priceWas}</span>
            </div>
            <div className="most-loved__actions">
              <button type="button" className="btn btn--lime">
                Buy it now
              </button>
              <button type="button" className="btn btn--outline">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

