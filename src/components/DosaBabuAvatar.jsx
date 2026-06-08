import { assetUrl } from '../lib/assets'

export default function DosaBabuAvatar({ size = 'lg', className = '' }) {
  return (
    <img
      src={assetUrl('/images/dosa-babu.png')}
      alt=""
      aria-hidden="true"
      className={`dosa-babu-avatar dosa-babu-avatar--${size} ${className}`.trim()}
      loading="lazy"
    />
  )
}
