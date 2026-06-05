import { Link, NavLink, Outlet } from 'react-router-dom'
import DosaBabu from './DosaBabu'
import DosaCursor from './DosaCursor'
import FooterStamp from './FooterStamp'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/stickers', label: 'Stickers' },
  { to: '/offers', label: 'Offers' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
]

export default function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <div className="container header__inner">
          <Link to="/" className="logo">
            <span className="logo__mark">K</span>
            <span className="logo__text">KIRIK</span>
          </Link>
          <nav className="nav" aria-label="Main">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `nav__link${isActive ? ' nav__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer__grid">
          <Link to="/" className="footer__logo-col" aria-label="KIRIK home">
            <FooterStamp />
          </Link>

          <div className="footer__info-col">
            <p className="footer__col-label">Info</p>
            <Link to="/products" className="footer__info-item">
              Catalog
            </Link>
            <Link to="/offers" className="footer__info-item footer__info-item--sale">
              <span className="footer__flame" aria-hidden="true">
                🔥
              </span>
              Sale
            </Link>
            <div className="footer__info-box">
              <Link to="/about">About Us</Link>
              <Link to="/about#our-story">Our Story</Link>
              <Link to="/terms">Terms &amp; Conditions</Link>
            </div>
          </div>

          <div className="footer__contact-col">
            <p className="footer__col-label">Contact us</p>
            <a href="tel:+918792970795" className="footer__contact-item">
              +91 8792970795
            </a>
            <a href="mailto:info@kirikdasachips.in" className="footer__contact-item">
              info@kirikdasachips.in
            </a>
          </div>
        </div>
      </footer>

      <DosaCursor />
      <DosaBabu />
    </div>
  )
}
