import PackShowcase from './PackShowcase'
import { packThemeClass } from '../lib/packTheme'

export default function ProductImage({
  src,
  alt,
  showcaseImage = '',
  showNew = false,
  className = '',
  framed = true,
  themeId = '',
}) {
  const themeClass = themeId && !showcaseImage ? packThemeClass(themeId) : ''

  return (
    <div
      className={`product-image${framed ? ' product-image--framed' : ''}${showcaseImage ? ' product-image--prebuilt' : ''}${themeClass ? ` ${themeClass}` : ''} ${className}`.trim()}
    >
      {showNew && (
        <span className="badge-new badge-new--on-image" aria-label="New product">
          NEW
        </span>
      )}
      {showcaseImage ? (
        <img src={showcaseImage} alt={alt} className="product-image__showcase" loading="lazy" />
      ) : (
        <PackShowcase src={src} alt={alt} themeId={themeId} imgClassName="product-image__img" />
      )}
    </div>
  )
}
