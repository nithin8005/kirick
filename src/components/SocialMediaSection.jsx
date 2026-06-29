import { useEffect, useRef, useState } from 'react'
import { assetUrl } from '../lib/assets'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../lib/instagram'
import { socialVideos } from '../data/content'

function VolumeIcon({ muted }) {
  if (muted) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="social-wire__volume-icon">
        <path
          fill="currentColor"
          d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-wire__volume-icon">
      <path
        fill="currentColor"
        d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
      />
    </svg>
  )
}

function SocialVideoCard({ video }) {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    el.disablePictureInPicture = true
    el.controls = false
  }, [])

  function toggleMute() {
    const el = videoRef.current
    if (!el) return

    const nextMuted = !el.muted
    el.muted = nextMuted
    setMuted(nextMuted)
  }

  return (
    <div className="social-wire__post social-wire__post--video">
      <video
        ref={videoRef}
        className="social-wire__video"
        src={assetUrl(video.src)}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
        aria-label={video.label}
      />
      <div className="social-wire__video-shield" aria-hidden="true" />
      <button
        type="button"
        className="social-wire__volume"
        onClick={toggleMute}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
      >
        <VolumeIcon muted={muted} />
      </button>
    </div>
  )
}

export default function SocialMediaSection({ comicTitle = false, sectionId }) {
  return (
    <section
      id={sectionId}
      className="social-wire section section--warm"
    >
      <div className="container">
        <div className="social-wire__header">
          <h2 className={comicTitle ? 'comic-section-title comic-section-title--social' : 'wire-title wire-title--center'}>
            {comicTitle ? (
              <>
                GET TO KNOW THE <span className="comic-section-title__handle">@{INSTAGRAM_HANDLE}</span>
              </>
            ) : (
              'Social Media'
            )}
          </h2>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="social-wire__follow"
          >
            @{INSTAGRAM_HANDLE}
          </a>
        </div>

        <div className="social-wire__feed" aria-label="Social media videos">
          {socialVideos.map((video) => (
            <SocialVideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  )
}
