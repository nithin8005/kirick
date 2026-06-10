export default function ProductImage({
  src,
  alt,
  showNew = false,
  className = '',
  framed = true,
  themeId = '',
}) {
  const themeClass = themeId ? ` pack-theme--${themeId}` : ''

  return (
    <div
      className={`product-image${framed ? ' product-image--framed' : ''}${themeClass} ${className}`.trim()}
    >
      {showNew && (
        <span className="badge-new badge-new--on-image" aria-label="New product">
          NEW
        </span>
      )}
      <img src={src} alt={alt} className="product-image__img pack-blend-img" loading="lazy" />
    </div>
  )
}
