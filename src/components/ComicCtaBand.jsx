import { AppLink } from '../lib/ComicThemeContext'

export default function ComicCtaBand({
  title,
  subtitle,
  ctaLabel = 'SHOP NOW',
  ctaTo = '/products',
  variant = 'lime',
}) {
  return (
    <section className={`comic-cta-band comic-cta-band--${variant}`}>
      <div className="container comic-cta-band__inner">
        <div className="comic-cta-band__copy">
          <h2 className="comic-cta-band__title">{title}</h2>
          {subtitle && <p className="comic-cta-band__subtitle">{subtitle}</p>}
        </div>
        <AppLink to={ctaTo} className="btn btn--comic-xl">
          {ctaLabel}
        </AppLink>
      </div>
    </section>
  )
}
