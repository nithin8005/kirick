import { useEffect, useRef, useState } from 'react'
import DosaBabuAvatar from './DosaBabuAvatar'

export default function DosaCursor() {
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)
  const [scrolling, setScrolling] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const scrollTimer = useRef(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!finePointer.matches || reducedMotion.matches) return

    setActive(true)
    document.body.classList.add('has-dosa-cursor')

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    const onLeave = () => setVisible(false)

    const onScroll = () => {
      setScrolling(true)
      if (scrollTimer.current) window.clearTimeout(scrollTimer.current)
      scrollTimer.current = window.setTimeout(() => setScrolling(false), 180)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      document.body.classList.remove('has-dosa-cursor')
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('scroll', onScroll)
      if (scrollTimer.current) window.clearTimeout(scrollTimer.current)
    }
  }, [])

  if (!active) return null

  return (
    <div
      className={`dosa-cursor${visible ? '' : ' dosa-cursor--hidden'}${scrolling ? ' dosa-cursor--scrolling' : ''}`}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      aria-hidden="true"
    >
      <DosaBabuAvatar size="xs" />
    </div>
  )
}
