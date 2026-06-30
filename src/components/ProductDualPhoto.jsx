/**
 * Two product photos — default shows front, hover/focus shows back.
 */
export default function ProductDualPhoto({
  product,
  className = '',
  imgClassName = 'product-dual-photo__img',
  preferShowcase = true,
}) {
  const front = preferShowcase
    ? product.showcaseImage || product.image
    : product.image || product.showcaseImage
  const back = product.imageBack || product.image

  if (!front) return null

  const showSwap = back && back !== front

  return (
    <div className={`product-dual-photo${showSwap ? ' product-dual-photo--swap' : ''} ${className}`.trim()}>
      <img
        src={front}
        alt={product.imageLabel || `${product.name} — KIRIK Dosa Chips`}
        className={`${imgClassName} product-dual-photo__front`}
        loading="lazy"
      />
      {showSwap && (
        <img
          src={back}
          alt=""
          aria-hidden="true"
          className={`${imgClassName} product-dual-photo__back`}
          loading="lazy"
        />
      )}
    </div>
  )
}
