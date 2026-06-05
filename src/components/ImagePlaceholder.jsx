export default function ImagePlaceholder({
  label,
  aspect = '4/3',
  className = '',
  variant = 'default',
}) {
  const variants = {
    default: 'placeholder--default',
    hero: 'placeholder--hero',
    product: 'placeholder--product',
    sticker: 'placeholder--sticker',
    banner: 'placeholder--banner',
    story: 'placeholder--story',
  }

  return (
    <div
      className={`image-placeholder ${variants[variant] || variants.default} ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={label}
    >
      <div className="image-placeholder__inner">
        <span className="image-placeholder__icon" aria-hidden="true">
          📷
        </span>
        <span className="image-placeholder__label">{label}</span>
        <span className="image-placeholder__hint">Image placeholder</span>
      </div>
    </div>
  )
}
