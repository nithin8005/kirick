import { useEffect, useState } from 'react'
import DosaBabuAvatar from './DosaBabuAvatar'
import { assetUrl } from '../lib/assets'

const MIN_LOAD_MS = 1800
const EXIT_MS = 400

export default function KirikLoadingScreen({ onDone }) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const started = performance.now()
    let doneTimer
    let exitTimer

    const finish = () => {
      const elapsed = performance.now() - started
      const remaining = Math.max(0, MIN_LOAD_MS - elapsed)
      doneTimer = window.setTimeout(() => {
        setExiting(true)
        exitTimer = window.setTimeout(onDone, EXIT_MS)
      }, remaining)
    }

    if (document.readyState === 'complete') {
      finish()
    } else {
      window.addEventListener('load', finish, { once: true })
    }

    return () => {
      window.removeEventListener('load', finish)
      window.clearTimeout(doneTimer)
      window.clearTimeout(exitTimer)
    }
  }, [onDone])

  return (
    <div
      className={`kirik-loader${exiting ? ' kirik-loader--exit' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading KIRIK"
    >
      <div className="kirik-loader__inner">
        <img
          className="kirik-loader__logo"
          src={assetUrl('/images/kirik-logo.png')}
          alt="KIRIK"
          loading="eager"
          decoding="async"
        />
        <DosaBabuAvatar size="lg" className="kirik-loader__babu" animated />
        <p className="kirik-loader__title">BEING KIRIK</p>
        <p className="kirik-loader__tagline">Dosa went rogue. Crunch loading…</p>
        <div className="kirik-loader__bar" aria-hidden="true">
          <span className="kirik-loader__bar-fill" />
        </div>
      </div>
    </div>
  )
}
