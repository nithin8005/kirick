import ComicHeroBurst from '../components/ComicHeroBurst'
import ComicTiltedRibbon from '../components/ComicTiltedRibbon'
import ComicShopRow from '../components/ComicShopRow'
import ComicBuildBox from '../components/ComicBuildBox'
import ComicRogueSection from '../components/ComicRogueSection'
import ComicDietaryBand from '../components/ComicDietaryBand'
import SocialMediaSection from '../components/SocialMediaSection'
import HeroProductShowcase from '../components/HeroProductShowcase'
import { products, dietaryFeatures, comicTaglineRibbon } from '../data/content'

const heroProduct = products.find((p) => p.id === 'green-chutney') || products[0]

export default function Home() {
  return (
    <>
      <section className="comic-wire-hero section">
        <div className="container comic-wire-hero__grid">
          <ComicHeroBurst />
          <div className="comic-wire-hero__visual">
            <HeroProductShowcase product={heroProduct} />
          </div>
        </div>
      </section>

      <ComicTiltedRibbon text={comicTaglineRibbon} variant="full-tape" />

      <ComicShopRow products={products} />

      <ComicBuildBox />

      <ComicRogueSection />

      <ComicDietaryBand features={dietaryFeatures} />

      <SocialMediaSection comicTitle sectionId="reviews" comicBox />
    </>
  )
}
