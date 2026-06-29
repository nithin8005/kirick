import { AppLink } from '../lib/ComicThemeContext'
import { assetUrl } from '../lib/assets'

const wireNavLinks = [
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'How it works' },
  { to: '/#reviews', label: 'Reviews' },
]

export default function ComicWireHeader() {
  return (
    <header className="comic-wire-header">
      <div className="container comic-wire-header__inner">
        <AppLink to="/" className="comic-wire-header__logo" aria-label="KIRIK home">
          <img
            src={assetUrl('/images/kirik-logo.png')}
            alt="KIRIK"
            className="comic-wire-header__logo-img"
            loading="eager"
            decoding="async"
          />
        </AppLink>

        <nav className="comic-wire-nav" aria-label="Main navigation">
          {wireNavLinks.map(({ to, label }) =>
            to.includes('#') ? (
              <a key={to} href="#reviews" className="comic-wire-nav__link">
                {label}
              </a>
            ) : (
              <AppLink key={to} to={to} className="comic-wire-nav__link">
                {label}
              </AppLink>
            ),
          )}
        </nav>

        <AppLink to="/products" className="btn btn--try-kirik">
          Try KIRIK
        </AppLink>
      </div>
    </header>
  )
}
