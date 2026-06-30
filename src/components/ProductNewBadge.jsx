import NewBadge from './NewBadge'

/** Positions starburst badge on product card / frame border (not on packet art) */
export default function ProductNewBadge({ className = '', size = 'md' }) {
  return (
    <span className={`new-badge-anchor ${className}`.trim()}>
      <NewBadge size={size} rotate={-5} />
    </span>
  )
}
