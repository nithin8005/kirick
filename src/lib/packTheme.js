/** Flavors built with PackShowcase (CSS scene + transparent pack PNG). */
export const PACK_THEMED_FLAVORS = new Set([])

export function packThemeClass(id) {
  return PACK_THEMED_FLAVORS.has(id) ? `pack-theme--${id}` : ''
}

/** Featured cards with full FMCG art or PackShowcase styling. */
export function isShowcaseCard(product) {
  return PACK_THEMED_FLAVORS.has(product.id) || Boolean(product.showcaseImage)
}
