import { AppLink } from '../lib/ComicThemeContext'
import ComicHeroBurst from '../components/ComicHeroBurst'
import ComicTiltedRibbon from '../components/ComicTiltedRibbon'
import ComicShopRow from '../components/ComicShopRow'
import DietarySpecs from '../components/DietarySpecs'
import SocialMediaSection from '../components/SocialMediaSection'
import { products, dietaryFeatures } from '../data/content'

const heroProduct = products.find((p) => p.id === 'green-chutney') || products[0]

export default function Home() {
  return (
    <>
      <section className="comic-wire-hero section">
        <div className="container comic-wire-hero__grid">
          <ComicHeroBurst />
          <div className="comic-wire-hero__visual">
            <img
              src={heroProduct.showcaseImage || heroProduct.image}
              alt={heroProduct.imageLabel}
              className="comic-wire-hero__pack"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <ComicTiltedRibbon text="PRODUCTS" />

      <ComicShopRow products={products} />

      <DietarySpecs features={dietaryFeatures} />

      <SocialMediaSection comicTitle sectionId="reviews" />
    </>
  )
}
