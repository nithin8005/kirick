/** Public asset path that works locally and on GitHub Pages (/kirick/). */
export function assetUrl(path) {
  const normalized = path.replace(/^\//, '')
  const base = import.meta.env.BASE_URL || '/'
  const prefix = base.endsWith('/') ? base : `${base}/`
  return `${prefix}${normalized}`
}
