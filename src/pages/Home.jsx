import ComicHeroBurst from '../components/ComicHeroBurst'
import ComicShopRow from '../components/ComicShopRow'
import ComicBuildBox from '../components/ComicBuildBox'
import StickerHeroSection from '../components/StickerHeroSection'
import ComicDietaryBand from '../components/ComicDietaryBand'
import SocialMediaSection from '../components/SocialMediaSection'
import HeroProductShowcase from '../components/HeroProductShowcase'
import { assetUrl } from '../lib/assets'
import { products, dietaryFeatures, heroBackground } from '../data/content'

const heroProduct = products.find((p) => p.id === 'green-chutney') || products[0]

export default function Home() {
  return (
    <>
      <section className="comic-wire-hero comic-wire-hero--photo section">
        <div className="comic-wire-hero__bg" aria-hidden="true">
          <img
            src={assetUrl(heroBackground.src)}
            alt={heroBackground.alt}
            className="comic-wire-hero__bg-img"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="container comic-wire-hero__grid">
          <ComicHeroBurst />
          <div className="comic-wire-hero__visual">
            <HeroProductShowcase product={heroProduct} />
          </div>
        </div>
      </section>

      <ComicShopRow products={products} />

      <ComicBuildBox />

      <StickerHeroSection />

      <ComicDietaryBand features={dietaryFeatures} />

      <SocialMediaSection comicTitle sectionId="reviews" comicBox />
    </>
  )
}
