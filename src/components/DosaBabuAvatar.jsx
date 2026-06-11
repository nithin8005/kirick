import { assetUrl } from '../lib/assets'

export default function DosaBabuAvatar({ size = 'lg', className = '' }) {
  return (
    <span
      className={`dosa-babu-avatar-wrap dosa-babu-avatar-wrap--${size} ${className}`.trim()}
    >
      <img
        src={assetUrl('/images/dosa-babu.png')}
        alt=""
        aria-hidden="true"
        className={`dosa-babu-avatar dosa-babu-avatar--${size}`}
        loading="eager"
        decoding="async"
      />
      <span className="dosa-babu-face" aria-hidden="true">
        <span className="dosa-babu-face__eye dosa-babu-face__eye--left" />
        <span className="dosa-babu-face__eye dosa-babu-face__eye--right" />
        <span className="dosa-babu-face__mouth" />
      </span>
    </span>
  )
}
