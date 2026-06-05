import ImagePlaceholder from './ImagePlaceholder'

export default function OffersSection() {
  return (
    <section className="offers-wire section section--alt">
      <div className="container">
        <h2 className="wire-title wire-title--center">Offers</h2>
        <div className="offers-wire__stage">
          <div className="offers-wire__pattern" aria-hidden="true" />
          <ImagePlaceholder
            label="Offers — new launches, events, promos"
            aspect="16/7"
            variant="banner"
            className="offers-wire__image"
          />
        </div>
      </div>
    </section>
  )
}
