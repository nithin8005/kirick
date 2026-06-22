import { Link } from 'react-router-dom'
import FeaturedProductGrid from '../components/FeaturedProductGrid'
import MostLovedProduct from '../components/MostLovedProduct'
import OffersSection from '../components/OffersSection'
import DietarySpecs from '../components/DietarySpecs'
import SocialMediaSection from '../components/SocialMediaSection'
import HeroFloatingChips from '../components/HeroFloatingChips'
import HeroProductCarousel from '../components/HeroProductCarousel'
import HomeTaglineBanner from '../components/HomeTaglineBanner'
import { brandTags, products, dietaryFeatures } from '../data/content'

export default function Home() {
  return (
    <>
      <section className="hero section">
        <HeroFloatingChips />
        <div className="container hero__grid hero__grid--solo">
          <div className="hero__copy">
            <p className="eyebrow">KIRIK CERTIFIED DOSA</p>
            <h1 className="hero__title">
              Dosa walked.
              <br />
              <span className="text-accent">We ran.</span>
            </h1>
            <p className="hero__subtitle">
              DOSA CHIPS — made from dosa, but not your regular dosa. Crunchy AF.
              Loud flavors. Zero boring snacks.
            </p>
            <div className="hero__cta">
              <Link to="/products" className="btn btn--primary">
                Shop flavors
              </Link>
            </div>
            <div className="hero__badges">
              {brandTags.map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <HeroProductCarousel products={products} />
          </div>
        </div>
      </section>

      <HomeTaglineBanner />

      <FeaturedProductGrid products={products} />

      <MostLovedProduct product={products.find((p) => p.id === 'tangy-salty')} />

      <OffersSection />

      <DietarySpecs features={dietaryFeatures} />

      <SocialMediaSection />
    </>
  )
}
