const featureIcons = {
  'rice-bran-oil': (
    <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
      <path
        d="M24 8 C18 8 14 14 14 22 C14 32 24 42 24 42 C24 42 34 32 34 22 C34 14 30 8 24 8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path d="M20 18 C22 22 26 22 28 18" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  'tradition-twisted': (
    <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
      <path
        d="M34 14 C34 14 30 8 22 10 C14 12 12 20 16 26 C20 32 28 34 32 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M14 34 C14 34 18 40 26 38 C34 36 36 28 32 22 C28 16 20 14 16 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <polygon points="32,28 38,30 34,36" fill="currentColor" />
      <polygon points="16,20 10,18 14,12" fill="currentColor" />
    </svg>
  ),
  'gluten-free': (
    <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
      <path
        d="M24 8 L24 16 M24 16 C18 16 12 20 12 28 C12 36 18 40 24 40 C30 40 36 36 36 28 C36 20 30 16 24 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line x1="10" y1="38" x2="38" y2="10" stroke="#E67E22" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  'real-dosa': (
    <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
      <ellipse
        cx="24"
        cy="26"
        rx="17"
        ry="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="17" cy="22" r="1.5" fill="currentColor" />
      <circle cx="27" cy="24" r="1.5" fill="currentColor" />
      <circle cx="21" cy="30" r="1.5" fill="currentColor" />
      <circle cx="30" cy="29" r="1.5" fill="currentColor" />
    </svg>
  ),
}

export default function DietarySpecs({ features }) {
  return (
    <section className="dietary-icons section dietary-icons--band">
      <div className="container">
        <header className="dietary-icons__header">
          <p className="eyebrow">Real talk</p>
          <h2 className="dietary-icons__title">The good stuff in every bag</h2>
          <p className="dietary-icons__lead">
            No fake claims — just dosa chips your amma would actually nod at.
          </p>
        </header>
        <div className="dietary-icons__row">
          {features.map((f) => (
            <div key={f.id} className={`dietary-icons__item dietary-icons__item--${f.id}`}>
              <div className="dietary-icons__circle" aria-hidden="true">
                <span className="dietary-icons__icon-svg">{featureIcons[f.id]}</span>
              </div>
              <p className="dietary-icons__label">{f.label}</p>
              {f.blurb && <p className="dietary-icons__sublabel">{f.blurb}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
