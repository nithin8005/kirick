import { assetUrl } from '../lib/assets'

const CHIPS = [
  { top: '8%', left: '4%', size: 44, rotate: -18, delay: 0, duration: 7 },
  { top: '22%', left: '14%', size: 32, rotate: 24, delay: 1.2, duration: 8 },
  { top: '68%', left: '6%', size: 38, rotate: -8, duration: 6.5, delay: 0.6 },
  { top: '12%', right: '6%', size: 36, rotate: 16, delay: 2, duration: 7.5 },
  { top: '48%', right: '3%', size: 48, rotate: -22, delay: 0.8, duration: 9 },
  { top: '78%', right: '12%', size: 30, rotate: 12, delay: 1.8, duration: 6.8 },
  { top: '38%', left: '2%', size: 28, rotate: 32, delay: 2.4, duration: 8.2 },
  { top: '55%', right: '18%', size: 34, rotate: -14, delay: 1, duration: 7.2 },
]

export default function HeroFloatingChips() {
  return (
    <div className="hero__floating-chips" aria-hidden="true">
      {CHIPS.map((chip, i) => (
        <img
          key={i}
          src={assetUrl('/images/dosa-babu.png')}
          alt=""
          className="hero__floating-chip"
          style={{
            '--chip-size': `${chip.size}px`,
            '--chip-rotate': `${chip.rotate}deg`,
            '--chip-duration': `${chip.duration}s`,
            '--chip-delay': `${chip.delay}s`,
            top: chip.top,
            left: chip.left,
            right: chip.right,
          }}
        />
      ))}
    </div>
  )
}
