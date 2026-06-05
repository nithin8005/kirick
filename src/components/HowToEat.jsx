import ImagePlaceholder from './ImagePlaceholder'

import { howToEatFlavors } from '../data/content'



export default function HowToEat() {

  return (

    <section className="how-to-eat section">

      <div className="container">

        <h2 className="how-to-eat__title">How to eat</h2>



        <div className="how-to-eat__flavors">

          {howToEatFlavors.map((item) => (

            <article key={item.id} className="how-to-eat__col">

              <h3 className="how-to-eat__flavor-name">{item.name}</h3>

              <ImagePlaceholder

                label={item.imageLabel}

                aspect="4/3"

                variant="default"

                className="how-to-eat__visual"

              />

            </article>

          ))}

        </div>

      </div>

    </section>

  )

}


