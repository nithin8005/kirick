import { Link } from 'react-router-dom'
import { assetUrl } from '../lib/assets.js'
import { products } from '../data/content.js'

function SpeechBubble({ children, tail = 'left', className = '' }) {
  return (
    <div className={`comic-bubble comic-bubble--${tail} ${className}`.trim()}>
      <p>{children}</p>
    </div>
  )
}

function Sfx({ children, tone = 'orange', className = '' }) {
  return (
    <span className={`comic-sfx comic-sfx--${tone} ${className}`.trim()} aria-hidden="true">
      {children}
    </span>
  )
}

function Panel({ children, className = '', label }) {
  return (
    <article className={`comic-panel ${className}`.trim()}>
      {label && <span className="comic-panel__label">{label}</span>}
      {children}
    </article>
  )
}

const comicColors = ['yellow', 'cream', 'lime', 'peach']

export default function Comic() {
  return (
    <div className="page page--comic">
      <header className="comic-cover">
        <div className="comic-cover__halftone" aria-hidden="true" />
        <div className="container comic-cover__inner">
          <div className="comic-cover__meta">
            <span>Issue #1</span>
            <span>₹38/-</span>
            <span>Cheeky Snack Factory</span>
          </div>
          <p className="comic-cover__series">KIRIK Chronicles</p>
          <h1 className="comic-cover__title">
            The Origin
            <br />
            of <span className="comic-cover__title-accent">Crunch</span>
          </h1>
          <p className="comic-cover__tagline">Dosa walked. We ran.</p>
          <div className="comic-cover__badges">
            <span className="comic-cover__badge">Real dosa</span>
            <span className="comic-cover__badge">Gluten free</span>
            <span className="comic-cover__badge">Rice bran oil</span>
          </div>
        </div>
      </header>

      <section className="comic-strip section">
        <div className="container comic-strip__grid">
          <Panel label="01" className="comic-panel--tall">
            <Sfx tone="lime" className="comic-sfx--float-top-right">
              sizzle!
            </Sfx>
            <div className="comic-panel__art comic-panel__art--warm">
              <img
                src={assetUrl('/images/dosa-chip.png')}
                alt=""
                className="comic-panel__img comic-panel__img--chip"
                loading="lazy"
              />
            </div>
            <SpeechBubble tail="left">
              Every dosa has those crispy golden edges everyone fights over at the table...
            </SpeechBubble>
          </Panel>

          <Panel label="02">
            <div className="comic-panel__art">
              <img
                src={assetUrl('/images/dosa-babu.png')}
                alt=""
                className="comic-panel__img comic-panel__img--babu"
                loading="lazy"
              />
            </div>
            <SpeechBubble tail="right">
              What if we turned the best part of dosa into a chip? Plot twist incoming.
            </SpeechBubble>
            <p className="comic-caption">Taylor Forman — founder &amp; crunch architect</p>
          </Panel>

          <Panel label="03" className="comic-panel--wide">
            <Sfx tone="orange" className="comic-sfx--center-burst">
              CRUNCH!
            </Sfx>
            <div className="comic-panel__art comic-panel__art--scatter">
              <img
                src={assetUrl('/images/chips-scatter.png')}
                alt=""
                className="comic-panel__img comic-panel__img--scatter"
                loading="lazy"
              />
            </div>
            <SpeechBubble tail="left" className="comic-bubble--wide">
              Not your regular dosa. Bold flavors. Certified chaos. Kirik was born.
            </SpeechBubble>
          </Panel>

          <Panel label="04" className="comic-panel--stamp">
            <img
              src={assetUrl('/images/cheeky-snack-factory-stamp.png')}
              alt=""
              className="comic-panel__stamp"
              loading="lazy"
            />
            <p className="comic-panel__stamp-text">Approved by the factory</p>
          </Panel>

          <Panel label="05" className="comic-panel--howto">
            <p className="comic-panel__chapter">How to eat KIRIK</p>
            <img
              src={assetUrl('/images/how-to-eat-kirik.png')}
              alt="How to eat KIRIK — comic guide"
              className="comic-panel__howto-img"
              loading="lazy"
            />
          </Panel>

          {products.map((product, index) => (
            <Panel
              key={product.id}
              label={String(6 + index).padStart(2, '0')}
              className={`comic-panel--product comic-panel--${comicColors[index % comicColors.length]}`}
            >
              <Sfx tone={index % 2 === 0 ? 'orange' : 'lime'} className="comic-sfx--product">
                {index === 0 ? 'ZEST!' : index === 1 ? 'TANG!' : index === 2 ? 'FIRE!' : 'SWEET!'}
              </Sfx>
              <div className="comic-panel__product-art">
                <img
                  src={product.showcaseImage}
                  alt={product.imageLabel}
                  className="comic-panel__product-img"
                  loading="lazy"
                />
              </div>
              <h3 className="comic-panel__product-name">{product.name}</h3>
              <p className="comic-panel__product-tag">{product.tagline}</p>
            </Panel>
          ))}

          <Panel label="10" className="comic-panel--wide comic-panel--finale">
            <div className="comic-finale">
              <Sfx tone="lime" className="comic-sfx--finale">
                KIRIK!
              </Sfx>
              <h2 className="comic-finale__title">To be continued...</h2>
              <p className="comic-finale__copy">
                No rules. Just vibe. Just scenes. Grab a bag and join the crunch club.
              </p>
              <div className="comic-finale__actions">
                <Link to="/products" className="btn btn--primary comic-finale__btn">
                  Shop flavors
                </Link>
                <Link to="/about" className="btn btn--outline comic-finale__btn comic-finale__btn--secondary">
                  Read our story
                </Link>
              </div>
            </div>
          </Panel>
        </div>
      </section>
    </div>
  )
}
