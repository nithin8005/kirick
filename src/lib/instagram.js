import { assetUrl } from './assets.js'

export const INSTAGRAM_HANDLE = 'kirikdosachips'
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`

export async function fetchInstagramPosts(limit = 6) {
  try {
    const response = await fetch(assetUrl('/instagram-feed.json'), {
      cache: 'no-store',
    })

    if (!response.ok) return null

    const payload = await response.json()
    if (!Array.isArray(payload.posts) || payload.posts.length === 0) return null

    return payload.posts.slice(0, limit)
  } catch {
    return null
  }
}
