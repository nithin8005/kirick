import { AppLink } from '../lib/ComicThemeContext'
import ComicSpotlight from '../components/ComicSpotlight'
import ComicShopRow from '../components/ComicShopRow'
import ComicCtaBand from '../components/ComicCtaBand'
import OffersSection from '../components/OffersSection'
import DietarySpecs from '../components/DietarySpecs'
import SocialMediaSection from '../components/SocialMediaSection'
import HeroProductCarousel from '../components/HeroProductCarousel'
import { products, dietaryFeatures } from '../data/content'

export default function Home() {
  return (
    <>
      <section className="comic-hero section">
        <div className="container comic-hero__inner">
          <div className="comic-hero__copy">
            <p className="comic-hero__eyebrow">KIRIK CERTIFIED DOSA</p>
            <h1 className="comic-hero__title">The internet&apos;s favorite dosa chip.</h1>
            <p className="comic-hero__subtitle">
              Made from real dosa. Crunchy AF. Loud flavors. Zero boring snacks.
            </p>
            <AppLink to="/products" className="btn btn--comic-lg">
              Shop KIRIK flavors!
            </AppLink>
          </div>
          <div className="comic-hero__visual" aria-hidden="true">
            <HeroProductCarousel products={products} />
          </div>
        </div>
      </section>

      <ComicSpotlight products={products} />

      <ComicShopRow products={products} />

      <ComicCtaBand
        title="THE INTERNET'S FAVORITE CRUNCH"
        ctaLabel="SHOP NOW"
        variant="orange"
      />

      <OffersSection showCta />

      <DietarySpecs features={dietaryFeatures} />

      <SocialMediaSection comicTitle />

      <ComicCtaBand
        title="Hey you!"
        subtitle="Be the first to know about flavor drops, offers & exclusive crunch."
        ctaLabel="JOIN THE CLUB"
        ctaTo="/about"
        variant="lime"
      />
    </>
  )
}
