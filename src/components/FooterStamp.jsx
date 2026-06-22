import { assetUrl } from '../lib/assets.js'

export default function FooterStamp() {
  return (
    <img
      src={assetUrl('/images/cheeky-snack-factory-stamp.png')}
      alt="Cheeky Snack Factory"
      className="footer-stamp"
      loading="lazy"
      decoding="async"
    />
  )
}
