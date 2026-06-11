import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import ProductImage from '../components/ProductImage'
import DietarySpecs from '../components/DietarySpecs'
import { aboutContent, products, dietaryFeatures } from '../data/content'

const featuredProduct = products[0]

export default function Products() {
  return (
    <div className="page">
      <section className="page-hero section">
        <div className="container page-hero__inner">
          <p className="eyebrow">Products</p>
          <h1>Our flavors</h1>
          <p className="page-hero__lead">
            Four flavors — details, showcase, dietary specs, and best combos.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <header className="section-header">
            <p className="eyebrow">Product Details</p>
            <h2>What&apos;s inside the crunch</h2>
          </header>
          <div className="details-grid">
            <div className="details-card">
              <h3>Made from real dosa</h3>
              <p>
                No...Yes... Our chips start with dosa — reimagined as a snack you can
                crush anywhere.
              </p>
            </div>
            <div className="details-card">
              <h3>Flavor lineup</h3>
              <ul>
                {products.map((p) => (
                  <li key={p.id}>
                    <a href={`#${p.id}`}>{p.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="details-card">
              <h3>Crunch promise</h3>
              <p>
                Crunch charged to 100%. Spice levels vary by flavor — always Kirik
                Certified.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <header className="section-header">
            <p className="eyebrow">Product Showcase</p>
            <h2>{featuredProduct.name} — storyline</h2>
            <p className="section-header__sub">
              One product spotlight with storyboard in the highlighted area.
            </p>
          </header>
          <div className="showcase">
            <div className="showcase__story">
              <h3>Storyline (Draft)</h3>
              <p>
                A sleepy folded dosa watches from the counter as a Kirik chip sprints
                past — plot twist energy. Cut to: flavor bomb reaction, certified badge
                stamp, crunch loyalty walk-off. End card: &ldquo;Dosa Walked So I Could
                Run.&rdquo;
              </p>
              <a href={`#${featuredProduct.id}`} className="btn btn--primary">
                Jump to {featuredProduct.name}
              </a>
            </div>
            <div className="showcase__board">
              <p className="showcase__board-label">Highlighted storyboard area</p>
              <div className="storyboard">
                {[
                  'Scene 1: Sleepy dosa',
                  'Scene 2: Chip sprint',
                  'Scene 3: Flavor bomb',
                  'Scene 4: Certified stamp',
                ].map((scene, i) => (
                  <ImagePlaceholder
                    key={scene}
                    label={`Storyboard panel ${i + 1} — ${scene}`}
                    aspect="16/10"
                    variant="story"
                  />
                ))}
              </div>
            </div>
            <ProductImage
              src={featuredProduct.image}
              alt={featuredProduct.imageLabel}
              showcaseImage={featuredProduct.showcaseImage}
              showNew={featuredProduct.isNew}
              themeId={featuredProduct.id}
              className="showcase__product"
            />
          </div>
        </div>
      </section>

      <DietarySpecs features={dietaryFeatures} />

      <section className="section">
        <div className="container product-list">
          <header className="section-header">
            <p className="eyebrow">All flavors</p>
            <h2>Meet the lineup</h2>
          </header>
          {products.map((p, index) => (
            <article key={p.id} id={p.id} className="product-block">
              <div
                className={`product-block__visual${index % 2 ? ' product-block__visual--reverse' : ''}`}
              >
                <ProductImage
                  src={p.image}
                  alt={p.imageLabel}
                  showcaseImage={p.showcaseImage}
                  showNew={p.isNew}
                  themeId={p.id}
                  framed
                />
              </div>
              <div className="product-block__info">
                <h2>{p.name}</h2>
                <p className="product-block__tagline">{p.tagline}</p>
                <p>{p.description}</p>
                <div className="dietary__chips">
                  {p.dietary.map((d) => (
                    <span key={d} className="diet-pill">
                      {d}
                    </span>
                  ))}
                </div>
                <div className="combo-box">
                  <strong>Best combo:</strong>
                  <p>{p.combo}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section product-brand-intro section--alt">
        <div className="container product-brand-intro__inner">
          {aboutContent.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
          <p className="about-tagline product-brand-intro__tagline">
            {aboutContent.tagline}
          </p>
        </div>
      </section>

      <section className="section product-brand-intro-cta">
        <div className="container center">
          <Link to="/offers" className="btn btn--outline">
            See launches &amp; events
          </Link>
        </div>
      </section>
    </div>
  )
}
