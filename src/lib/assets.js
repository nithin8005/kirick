/** Public asset path that works locally and on GitHub Pages (/kirick/). */
export function assetUrl(path) {
  const normalized = path.replace(/^\//, '')
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${normalized}`
}
