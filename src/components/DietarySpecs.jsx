export default function DietarySpecs({ features }) {
  return (
    <section className="dietary-icons section dietary-icons--band">
      <div className="container">
        <div className="dietary-icons__row">
          {features.map((f) => (
            <div key={f.id} className={`dietary-icons__item dietary-icons__item--${f.id}`}>
              <div className="dietary-icons__circle" aria-hidden="true">
                {f.id === 'no-bad' && (
                  <span className="dietary-icons__icon-svg" aria-hidden="true">
                    <svg viewBox="0 0 48 48" width="40" height="40">
                      <path
                        d="M14 38 L24 8 L34 38 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      />
                      <line x1="10" y1="38" x2="38" y2="10" stroke="#d12027" strokeWidth="3" />
                    </svg>
                  </span>
                )}
                {f.id === 'organic' && (
                  <span className="dietary-icons__icon-svg" aria-hidden="true">
                    <svg viewBox="0 0 48 48" width="40" height="40">
                      <path
                        d="M24 42 C24 42 10 28 10 18 C10 12 16 8 24 14 C32 8 38 12 38 18 C38 28 24 42 24 42Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      />
                      <path
                        d="M24 14 L24 42 M18 22 L30 30 M30 22 L18 30"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                )}
                {f.id === 'non-gmo' && (
                  <span className="dietary-icons__gmo">
                    GMO
                    <span className="dietary-icons__gmo-slash" aria-hidden="true" />
                  </span>
                )}
              </div>
              <p className="dietary-icons__label">{f.label}</p>
            </div>
          ))}
        </div>
        <p className="dietary-icons__note ref-note center">
          
        </p>
      </div>
    </section>
  )
}
