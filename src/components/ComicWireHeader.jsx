import { AppLink } from '../lib/ComicThemeContext'
import { assetUrl } from '../lib/assets'

const wireNavLinks = [
  { to: '/products', label: 'Shop' },
  { to: '/offers', label: 'Merch' },
  { to: '/about', label: 'About Us' },
  {
    href: 'mailto:info@kirikdosachips.in?subject=Contact%20the%20Team',
    label: 'Contact the Team',
    external: true,
  },
]

export default function ComicWireHeader() {
  return (
    <header className="comic-wire-header">
      <AppLink to="/" className="comic-wire-header__logo" aria-label="KIRIK home">
        <img
          src={assetUrl('/images/kirik-logo.png')}
          alt="KIRIK"
          className="comic-wire-header__logo-img"
          loading="eager"
          decoding="async"
        />
      </AppLink>

      <div className="container comic-wire-header__inner">
        <nav className="comic-wire-nav" aria-label="Main navigation">
          {wireNavLinks.map(({ to, href, label, external }) =>
            external ? (
              <a key={label} href={href} className="comic-wire-nav__link">
                {label}
              </a>
            ) : (
              <AppLink key={to} to={to} className="comic-wire-nav__link">
                {label}
              </AppLink>
            ),
          )}
        </nav>

        <div className="comic-wire-header__cta">
          <AppLink to="/products" className="btn btn--try-kirik">
            Try KIRIK
          </AppLink>
        </div>
      </div>
    </header>
  )
}
