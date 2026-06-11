import { useState } from 'react'
import PackShowcase from './PackShowcase'
import ProductImage from './ProductImage'
import { packThemeClass } from '../lib/packTheme'

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
                  className={`most-loved__thumb${p.showcaseImage ? ' most-loved__thumb--prebuilt' : ''} ${packThemeClass(p.id)}${activeIndex === i ? ' most-loved__thumb--active' : ''}`.trim()}
                  onClick={() => setActiveIndex(i)}
                >
                  {p.showcaseImage ? (
                    <img src={p.showcaseImage} alt="" className="most-loved__thumb-showcase" />
                  ) : (
                    <PackShowcase
                      src={p.image}
                      alt=""
                      themeId={p.id}
                      imgClassName="most-loved__thumb-img"
                    />
                  )}
                </button>
              ))}
            </div>
            <ProductImage
              src={active.image}
              alt={`${active.name} — KIRIK Dosa Chips`}
              showcaseImage={active.showcaseImage}
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
