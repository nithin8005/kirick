import { Link } from 'react-router-dom'
import PromoStickerBanner from '../components/PromoStickerBanner'
import FeaturedProductGrid from '../components/FeaturedProductGrid'
import MostLovedProduct from '../components/MostLovedProduct'
import OffersSection from '../components/OffersSection'
import DietarySpecs from '../components/DietarySpecs'
import SocialMediaSection from '../components/SocialMediaSection'
import HowToEat from '../components/HowToEat'
import { brandTags, products, dietaryFeatures } from '../data/content'

export default function Home() {
  const heroProducts = [products[0], products[1], products[2]]

  return (
    <>
      <section className="hero section">
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
              <Link to="/stickers" className="btn btn--outline">
                See stickers
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
            <div className="hero__product-stack">
              <div className="hero__glow" />
              <div
                className={`hero__product-card hero__product-card--back-left pack-theme--${heroProducts[1].id}`}
              >
                <img src={heroProducts[1].image} alt="" className="pack-blend-img" />
              </div>
              <div
                className={`hero__product-card hero__product-card--back-right pack-theme--${heroProducts[2].id}`}
              >
                <img src={heroProducts[2].image} alt="" className="pack-blend-img" />
              </div>
              <div
                className={`hero__product-card hero__product-card--front pack-theme--${heroProducts[0].id}`}
              >
                <img src={heroProducts[0].image} alt="" className="pack-blend-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PromoStickerBanner />

      <FeaturedProductGrid products={products} />

      <MostLovedProduct products={products} defaultIndex={0} />

      <OffersSection />

      <DietarySpecs features={dietaryFeatures} />

      <SocialMediaSection />

      <HowToEat />
    </>
  )
}
