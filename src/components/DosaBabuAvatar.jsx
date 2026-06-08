export default function DosaBabuAvatar({ size = 'lg', className = '' }) {
  return (
    <img
      src="/images/dosa-babu.png"
      alt=""
      aria-hidden="true"
      className={`dosa-babu-avatar dosa-babu-avatar--${size} ${className}`.trim()}
      loading="lazy"
    />
  )
}
