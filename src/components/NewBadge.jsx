import { STARBURST_CLIP_PATH } from '../lib/starburstClipPath'

const SIZES = ['sm', 'md', 'lg']

/**
 * Retro promotional starburst "NEW" badge — pure CSS, no image.
 * @param {'sm'|'md'|'lg'} size — 48px / ~72px / up to 120px
 * @param {number} rotate — slight tilt in degrees (-5 to 5 recommended)
 */
export default function NewBadge({
  className = '',
  size = 'md',
  rotate = -5,
  label = 'NEW',
}) {
  const sizeClass = SIZES.includes(size) ? size : 'md'

  return (
    <span
      className={`new-badge new-badge--${sizeClass} ${className}`.trim()}
      style={{
        '--new-badge-rotate': `${rotate}deg`,
        '--new-badge-clip': STARBURST_CLIP_PATH,
      }}
      aria-hidden="true"
    >
      <span className="new-badge__burst">{label}</span>
    </span>
  )
}
