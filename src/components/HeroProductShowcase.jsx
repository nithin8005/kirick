/** Static hero product — front + back side by side, no carousel */
export default function HeroProductShowcase({ product }) {
  if (!product) return null

  const combo = product.heroImage
  const front = product.image
  const back = product.imageBack
  const usePair = front && back && back !== front && !combo

  if (combo) {
    return (
      <div className="hero-showcase" aria-label={`${product.name} — KIRIK Dosa Chips`}>
        <div className="hero-showcase__stage">
          <img
            src={combo}
            alt={product.imageLabel || `${product.name} — KIRIK Dosa Chips`}
            className="hero-showcase__combo"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    )
  }

  if (!usePair) return null

  return (
    <div className="hero-showcase" aria-label={`${product.name} — KIRIK Dosa Chips`}>
      <div className="hero-showcase__stage hero-showcase__stage--pair">
        <img
          src={back}
          alt=""
          aria-hidden="true"
          className="hero-showcase__back"
          loading="eager"
          decoding="async"
        />
        <img
          src={front}
          alt={product.imageLabel || `${product.name} — KIRIK Dosa Chips`}
          className="hero-showcase__front"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  )
}
