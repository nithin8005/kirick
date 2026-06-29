import { promoMarqueeText } from '../data/content'

export default function PromoMarquee() {
  const items = Array.from({ length: 6 }, (_, i) => (
    <span key={i} className="promo-marquee__item">
      {promoMarqueeText}
    </span>
  ))

  return (
    <div className="promo-marquee" aria-label="Current promotion">
      <div className="promo-marquee__track" aria-hidden="true">
        <div className="promo-marquee__group">{items}</div>
        <div className="promo-marquee__group">{items}</div>
      </div>
      <p className="promo-marquee__sr-only">{promoMarqueeText}</p>
    </div>
  )
}
