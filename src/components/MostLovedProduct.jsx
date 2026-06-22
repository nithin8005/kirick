import ProductImage from './ProductImage'

export default function MostLovedProduct({ product }) {
  return (
    <section className="most-loved section">
      <div className="container">
        <h2 className="wire-title wire-title--center">Most Loved Product</h2>
        <div className="most-loved__layout">
          <div className="most-loved__gallery">
            <ProductImage
              src={product.image}
              alt={`${product.name} — KIRIK Dosa Chips`}
              showcaseImage={product.showcaseImage}
              showNew={product.isNew}
              themeId={product.id}
              className="most-loved__main"
            />
          </div>

          <div className="most-loved__info">
            <h3 className="wire-title wire-title--product">{product.name}</h3>
            <div className="most-loved__desc-box">
              <p className="most-loved__desc">{product.longDescription}</p>
            </div>
            <div className="most-loved__price">
              <span className="most-loved__price-current">{product.price}</span>
              <span className="most-loved__price-old">{product.priceWas}</span>
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
