import { assetUrl } from '../lib/assets'

export default function DosaBabuAvatar({ size = 'lg', className = '', animated = false }) {
  const dosa = (
    <>
      <img
        src={assetUrl('/images/dosa-babu.png')}
        alt=""
        aria-hidden="true"
        className={`dosa-babu-avatar dosa-babu-avatar--${size}`}
        width={871}
        height={917}
        loading="eager"
        decoding="async"
        draggable={false}
      />
      <span className="dosa-babu-decor" aria-hidden="true">
        <span className="dosa-babu-decor__hair" />
        <span className="dosa-babu-decor__glasses" />
        <span className="dosa-babu-decor__limbs" />
      </span>
    </>
  )

  return (
    <span
      className={`dosa-babu-avatar-wrap dosa-babu-avatar-wrap--${size}${animated ? ' dosa-babu-avatar-wrap--premium' : ''} ${className}`.trim()}
    >
      {animated ? (
        <>
          <span className="dosa-babu-avatar-shadow" aria-hidden="true" />
          <span className="dosa-babu-avatar-float">
            <span className="dosa-babu-avatar-spin">{dosa}</span>
          </span>
        </>
      ) : (
        dosa
      )}
    </span>
  )
}
