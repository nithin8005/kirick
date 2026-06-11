import { assetUrl } from '../lib/assets'

function GreenChutneyFloats() {
  return (
    <>
      <span className="pack-showcase__ambient" aria-hidden="true" />
      <span className="pack-showcase__light" aria-hidden="true" />
      <img
        src={assetUrl('/images/dosa-babu.png')}
        alt=""
        aria-hidden="true"
        className="pack-showcase__float pack-showcase__float--chip-1"
      />
      <img
        src={assetUrl('/images/dosa-babu.png')}
        alt=""
        aria-hidden="true"
        className="pack-showcase__float pack-showcase__float--chip-2"
      />
      <img
        src={assetUrl('/images/dosa-babu.png')}
        alt=""
        aria-hidden="true"
        className="pack-showcase__float pack-showcase__float--chip-3"
      />
      <span className="pack-showcase__float pack-showcase__float--curry-1" aria-hidden="true" />
      <span className="pack-showcase__float pack-showcase__float--curry-2" aria-hidden="true" />
      <span className="pack-showcase__float pack-showcase__float--curry-3" aria-hidden="true" />
      <span className="pack-showcase__float pack-showcase__float--chutney" aria-hidden="true" />
    </>
  )
}

/** FMCG product showcase — pack on brand bg, effects behind, product on top. */
export default function PackShowcase({
  src,
  alt,
  className = '',
  imgClassName = '',
  themeId = '',
}) {
  const themeClass = themeId ? ` pack-showcase--${themeId}` : ''

  return (
    <div className={`pack-showcase${themeClass} ${className}`.trim()}>
      {themeId === 'green-chutney' && <GreenChutneyFloats />}
      <span className="pack-showcase__shadow" aria-hidden="true" />
      <img
        src={src}
        alt={alt}
        className={`pack-showcase__img ${imgClassName}`.trim()}
        loading="lazy"
      />
    </div>
  )
}
