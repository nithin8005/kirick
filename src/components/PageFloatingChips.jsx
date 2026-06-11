import { assetUrl } from '../lib/assets'

const SCATTER_SRC = assetUrl('/images/chips-scatter.png')

/** Chip clusters — fall slowly behind page content. */
const CLUSTERS = [
  {
    left: '6%',
    width: 'min(32vw, 300px)',
    rotate: -12,
    drift: '22px',
    delay: 0,
    duration: 26,
  },
  {
    right: '8%',
    width: 'min(30vw, 280px)',
    rotate: 16,
    drift: '-18px',
    delay: 13,
    duration: 30,
  },
]

export default function PageFloatingChips() {
  return (
    <div className="page-floating-chips" aria-hidden="true">
      {CLUSTERS.map((cluster, i) => (
        <img
          key={i}
          src={SCATTER_SRC}
          alt=""
          className="page-floating-chips__cluster"
          style={{
            '--cluster-width': cluster.width,
            '--cluster-rotate': `${cluster.rotate}deg`,
            '--cluster-drift': cluster.drift,
            '--cluster-duration': `${cluster.duration}s`,
            '--cluster-delay': `${cluster.delay}s`,
            left: cluster.left,
            right: cluster.right,
          }}
        />
      ))}
    </div>
  )
}
