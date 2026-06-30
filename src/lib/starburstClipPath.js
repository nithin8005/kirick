/** 14-point starburst clip-path for CSS (vector-like, no image) */
const STAR_POINTS = 14
const INNER_RATIO = 0.68

function buildStarburstClip(points = STAR_POINTS, innerRatio = INNER_RATIO) {
  const parts = []
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? 50 : 50 * innerRatio
    const angle = (i * Math.PI) / points - Math.PI / 2
    const x = 50 + r * Math.cos(angle)
    const y = 50 + r * Math.sin(angle)
    parts.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`)
  }
  return `polygon(${parts.join(', ')})`
}

export const STARBURST_CLIP_PATH = buildStarburstClip()
