export default function ProductImage({
  src,
  alt,
  showNew = false,
  className = '',
  framed = true,
}) {
  return (
    <div
      className={`product-image${framed ? ' product-image--framed' : ''} ${className}`.trim()}
    >
      {showNew && (
        <span className="badge-new badge-new--on-image" aria-label="New product">
          NEW
        </span>
      )}
      <img src={src} alt={alt} className="product-image__img" loading="lazy" />
    </div>
  )
}
