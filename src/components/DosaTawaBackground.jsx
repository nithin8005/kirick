import { useEffect, useRef, useState } from 'react'
import { assetUrl } from '../lib/assets'
import { heroTawaVideo } from '../data/content'

function CssTawaScene() {
  return (
    <div className="dosa-tawa-bg__css-scene">
      <div className="dosa-tawa-bg__pan">
        <div className="dosa-tawa-bg__heat" />
        <div className="dosa-tawa-bg__batter" />
        <div className="dosa-tawa-bg__steam">
          <span />
          <span />
          <span />
        </div>
        <div className="dosa-tawa-bg__spatula" aria-hidden="true" />
      </div>
    </div>
  )
}

export default function DosaTawaBackground() {
  const videoRef = useRef(null)
  const [useCssScene, setUseCssScene] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setUseCssScene(true)
      return undefined
    }

    const video = videoRef.current
    if (!video) return undefined

    const onError = () => setUseCssScene(true)
    const play = () => {
      video.play().catch(onError)
    }

    video.addEventListener('canplay', play)
    video.addEventListener('error', onError)

    if (video.readyState >= 2) play()

    return () => {
      video.removeEventListener('canplay', play)
      video.removeEventListener('error', onError)
    }
  }, [])

  return (
    <div className="dosa-tawa-bg" aria-hidden="true">
      <div className="dosa-tawa-bg__media">
        {!useCssScene && (
          <video
            ref={videoRef}
            className="dosa-tawa-bg__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            tabIndex={-1}
          >
            <source src={assetUrl(heroTawaVideo.src)} type="video/mp4" />
          </video>
        )}
        {useCssScene && <CssTawaScene />}
      </div>
      <div className="dosa-tawa-bg__scrim" />
    </div>
  )
}
