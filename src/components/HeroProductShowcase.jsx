/** Static hero product — front + back side by side, no carousel */
export default function HeroProductShowcase({ product }) {
  if (!product) return null

  const front = product.image
  const back = product.imageBack
  const canPair = front && back && back !== front
  const combo =
    product.heroImage && product.heroImage !== front && product.heroImage !== back ? product.heroImage : ''

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

  if (!canPair) return null

  return (
    <div className="hero-showcase" aria-label={`${product.name} — KIRIK Dosa Chips`}>
      <div className="hero-showcase__stage hero-showcase__stage--pair">
        <div className="hero-showcase__pack hero-showcase__pack--back" aria-hidden="true">
          <img src={back} alt="" className="hero-showcase__img" loading="eager" decoding="async" />
        </div>
        <div className="hero-showcase__pack hero-showcase__pack--front">
          <img
            src={front}
            alt={product.imageLabel || `${product.name} — KIRIK Dosa Chips`}
            className="hero-showcase__img"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </div>
  )
}
