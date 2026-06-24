import { AppLink } from '../lib/ComicThemeContext'
import FeaturedProductGrid from '../components/FeaturedProductGrid'
import DietarySpecs from '../components/DietarySpecs'
import { aboutContent, products, dietaryFeatures } from '../data/content'

export default function Products() {
  return (
    <div className="page page--products">
      <FeaturedProductGrid
        products={products}
        linked={false}
        compact
        eyebrow="Products"
        title="Our flavors"
      />

      <DietarySpecs features={dietaryFeatures} />

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
          <AppLink to="/offers" className="btn btn--outline">
            See launches &amp; events
          </AppLink>
        </div>
      </section>
    </div>
  )
}
