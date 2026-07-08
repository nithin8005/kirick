import ComicHeroBurst from '../components/ComicHeroBurst'
import ComicShopRow from '../components/ComicShopRow'
import ComicBuildBox from '../components/ComicBuildBox'
import StickerHeroSection from '../components/StickerHeroSection'
import SocialMediaSection from '../components/SocialMediaSection'
import { products } from '../data/content'

export default function Home() {
  return (
    <>
      <section className="comic-wire-hero section">
        <div className="container comic-wire-hero__grid">
          <ComicHeroBurst />
          <div className="comic-wire-hero__visual" aria-hidden="true" />
        </div>
      </section>

      <ComicShopRow products={products} />

      <ComicBuildBox />

      <StickerHeroSection />

      <SocialMediaSection comicTitle sectionId="reviews" comicBox />
    </>
  )
}
