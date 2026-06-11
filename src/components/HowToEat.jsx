import { howToEatFlavors } from '../data/content'
import PackShowcase from './PackShowcase'
import { packThemeClass } from '../lib/packTheme'

export default function HowToEat() {
  return (
    <section className="how-to-eat section">
      <div className="container">
        <h2 className="how-to-eat__title">How to eat</h2>

        <div className="how-to-eat__flavors">
          {howToEatFlavors.map((item) => (
            <article key={item.id} className="how-to-eat__col">
              <h3 className="how-to-eat__flavor-name">{item.name}</h3>
              <div className="how-to-eat__packs">
                <div
                  className={`how-to-eat__pack-frame${item.showcaseImage ? ' how-to-eat__pack-frame--prebuilt' : ''} ${packThemeClass(item.id)}`.trim()}
                >
                  {item.showcaseImage ? (
                    <img
                      src={item.showcaseImage}
                      alt={`${item.name} — showcase`}
                      className="how-to-eat__showcase-img"
                      loading="lazy"
                    />
                  ) : (
                    <PackShowcase
                      src={item.image}
                      alt={`${item.name} — front`}
                      themeId={item.id}
                      imgClassName="how-to-eat__pack-img"
                    />
                  )}
                </div>
                <div className={`how-to-eat__pack-frame ${packThemeClass(item.id)}`.trim()}>
                  <PackShowcase
                    src={item.imageBack}
                    alt={`${item.name} — back`}
                    themeId={item.id}
                    imgClassName="how-to-eat__pack-img"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
