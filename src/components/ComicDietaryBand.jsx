import DietarySpecs from './DietarySpecs'

export default function ComicDietaryBand({ features }) {
  return (
    <div className="comic-dietary-band">
      <DietarySpecs features={features} />
    </div>
  )
}
