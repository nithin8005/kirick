const TAGLINE = "Slaps harder than Amma's Chappal"

export default function HomeTaglineBanner() {
  const items = Array.from({ length: 4 }, (_, i) => (
    <span key={i} className="home-tagline-banner__item">
      {TAGLINE}
      <span className="home-tagline-banner__dot" aria-hidden="true">
        ✦
      </span>
    </span>
  ))

  return (
    <section className="home-tagline-banner" aria-label="Brand tagline">
      <div className="home-tagline-banner__track" aria-hidden="true">
        <div className="home-tagline-banner__group">{items}</div>
        <div className="home-tagline-banner__group">{items}</div>
      </div>
      <p className="home-tagline-banner__sr-only">{TAGLINE}</p>
    </section>
  )
}
