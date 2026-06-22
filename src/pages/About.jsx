import { aboutContent, brandTags } from '../data/content'

export default function About() {
  const { paragraphs, tagline, founder, closing } = aboutContent

  return (
    <div className="page page--about">
      <section className="page-hero section section--alt">
        <div className="container page-hero__inner">
          <p className="eyebrow">About us</p>
          <h1>About Us</h1>
          <div className="page-hero__tags">
            {brandTags.map((t) => (
              <span key={t} className="badge">
                {t}
              </span>
            ))}
          </div>
          <nav className="about-jump" aria-label="On this page">
            <a href="#founder">Founder</a>
          </nav>
        </div>
      </section>

      <section className="section about-prose-section">
        <div className="container about-prose about-prose--single">
          <div className="about-prose__main">
            {paragraphs.map((text) => (
              <p key={text.slice(0, 40)}>{text}</p>
            ))}
            <p className="about-tagline">{tagline}</p>
          </div>
        </div>
      </section>

      <section id="founder" className="section section--warm about-founder-section">
        <div className="container about-founder">
          <h2 className="about-founder__title">{founder.title}</h2>
          {founder.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
          <p className="about-tagline about-tagline--accent">{founder.bornTagline}</p>
          <p className="about-founder__closing">{closing}</p>
        </div>
      </section>
    </div>
  )
}
