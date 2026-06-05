import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import DosaBabuAvatar from './DosaBabuAvatar'
import {
  DOSA_BABU_QUICK_REPLIES,
  getDosaBabuReply,
  getQuickReplyMessage,
  getQuickReplyResponse,
  getRandomOpening,
} from '../lib/dosaBabu'

function BotMessage({ message }) {
  return (
    <div className="dosa-babu__bubble dosa-babu__bubble--bot">
      <p>{message.text}</p>
      {message.links?.length > 0 && (
        <div className="dosa-babu__links">
          {message.links.map((link) =>
            link.href ? (
              <a key={link.href + link.label} href={link.href} className="dosa-babu__chip">
                {link.label}
              </a>
            ) : (
              <Link key={link.to + link.label} to={link.to} className="dosa-babu__chip">
                {link.label}
              </Link>
            ),
          )}
        </div>
      )}
    </div>
  )
}

export default function DosaBabu() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([{ role: 'bot', ...getRandomOpening() }])
  const [typing, setTyping] = useState(false)
  const listRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, typing, open])

  function pushBotReply(text, useMenu = false) {
    setTyping(true)
    window.setTimeout(() => {
      const reply = useMenu ? getQuickReplyResponse(text) : getDosaBabuReply(text)
      setMessages((prev) => [...prev, { role: 'bot', ...reply }])
      setTyping(false)
    }, 500)
  }

  function sendUserMessage(text) {
    const trimmed = text.trim()
    if (!trimmed) return
    setMessages((prev) => [...prev, { role: 'user', text: trimmed }])
    setInput('')
    pushBotReply(trimmed)
  }

  function handleSubmit(e) {
    e.preventDefault()
    sendUserMessage(input)
  }

  function handleMenuClick(id) {
    const label = getQuickReplyMessage(id)
    setMessages((prev) => [...prev, { role: 'user', text: label }])
    pushBotReply(id, true)
  }

  function handleOpen() {
    setOpen((wasOpen) => {
      if (!wasOpen) {
        setMessages([{ role: 'bot', ...getRandomOpening() }])
      }
      return !wasOpen
    })
  }

  return (
    <div className={`dosa-babu${open ? ' dosa-babu--open' : ''}`}>
      {open && (
        <section
          id="dosa-babu-panel"
          className="dosa-babu__panel"
          role="dialog"
          aria-labelledby="dosa-babu-title"
          aria-live="polite"
        >
          <header className="dosa-babu__header">
            <DosaBabuAvatar size="sm" className="dosa-babu__header-avatar" />
            <div>
              <h2 id="dosa-babu-title" className="dosa-babu__title">
                Dosa Babu
              </h2>
              <p className="dosa-babu__subtitle">Smart snack assistant · KIRIK</p>
            </div>
            <button
              type="button"
              className="dosa-babu__close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </header>

          <div className="dosa-babu__menu" role="group" aria-label="Menu options">
            {DOSA_BABU_QUICK_REPLIES.map((q) => (
              <button
                key={q.id}
                type="button"
                className="dosa-babu__menu-btn"
                onClick={() => handleMenuClick(q.id)}
                disabled={typing}
              >
                {q.label}
              </button>
            ))}
          </div>

          <div className="dosa-babu__messages" ref={listRef}>
            {messages.map((msg, i) =>
              msg.role === 'user' ? (
                <div key={`u-${i}`} className="dosa-babu__bubble dosa-babu__bubble--user">
                  <p>{msg.text}</p>
                </div>
              ) : (
                <BotMessage key={`b-${i}`} message={msg} />
              ),
            )}
            {typing && (
              <div className="dosa-babu__bubble dosa-babu__bubble--bot dosa-babu__bubble--typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          <form className="dosa-babu__form" onSubmit={handleSubmit}>
            <label htmlFor="dosa-babu-input" className="visually-hidden">
              Message Dosa Babu
            </label>
            <input
              id="dosa-babu-input"
              ref={inputRef}
              type="text"
              className="dosa-babu__input"
              placeholder="Ask Babu anything…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={typing}
              autoComplete="off"
            />
            <button type="submit" className="dosa-babu__send" disabled={typing || !input.trim()}>
              Send
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        className="dosa-babu__launcher"
        onClick={handleOpen}
        aria-expanded={open}
        aria-controls="dosa-babu-panel"
        aria-label={open ? 'Close Dosa Babu' : 'Open Dosa Babu assistant'}
      >
        <DosaBabuAvatar size="lg" className="dosa-babu__launcher-dosa" />
        <span className="dosa-babu__launcher-label">Dosa Babu</span>
      </button>
    </div>
  )
}
