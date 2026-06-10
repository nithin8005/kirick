import { howToEatFlavors } from '../data/content'

export default function HowToEat() {
  return (
    <section className="how-to-eat section">
      <div className="container">
        <h2 className="how-to-eat__title">How to eat</h2>

        <div className="how-to-eat__flavors">
          {howToEatFlavors.map((item) => (
            <article key={item.id} className={`how-to-eat__col pack-theme--${item.id}`}>
              <h3 className="how-to-eat__flavor-name">{item.name}</h3>
              <div className="how-to-eat__packs">
                <div className="how-to-eat__pack-frame">
                  <img
                    src={item.image}
                    alt={`${item.name} — front`}
                    className="how-to-eat__pack-img pack-blend-img"
                    loading="lazy"
                  />
                </div>
                <div className="how-to-eat__pack-frame">
                  <img
                    src={item.imageBack}
                    alt={`${item.name} — back`}
                    className="how-to-eat__pack-img pack-blend-img"
                    loading="lazy"
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
