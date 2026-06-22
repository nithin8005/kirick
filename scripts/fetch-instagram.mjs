import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const outputPath = join(root, 'public', 'instagram-feed.json')
const handle = 'kirikdosachips'
const limit = 12

const fields = [
  'id',
  'caption',
  'media_type',
  'media_url',
  'thumbnail_url',
  'permalink',
  'timestamp',
  'children{media_type,media_url,thumbnail_url}',
].join(',')

function mapMediaItem(item) {
  if (item.media_type === 'CAROUSEL_ALBUM' && item.children?.data?.length) {
    const child = item.children.data[0]
    return {
      id: item.id,
      mediaUrl:
        child.media_type === 'VIDEO'
          ? child.thumbnail_url || child.media_url
          : child.media_url,
      permalink: item.permalink,
      caption: item.caption || '',
      mediaType: child.media_type || 'IMAGE',
      timestamp: item.timestamp,
    }
  }

  return {
    id: item.id,
    mediaUrl:
      item.media_type === 'VIDEO'
        ? item.thumbnail_url || item.media_url
        : item.media_url,
    permalink: item.permalink,
    caption: item.caption || '',
    mediaType: item.media_type,
    timestamp: item.timestamp,
  }
}

async function fetchInstagramFeed(token) {
  const url = new URL('https://graph.instagram.com/me/media')
  url.searchParams.set('fields', fields)
  url.searchParams.set('limit', String(limit))
  url.searchParams.set('access_token', token)

  const response = await fetch(url)
  const payload = await response.json()

  if (!response.ok) {
    throw new Error(payload.error?.message || `Instagram API error (${response.status})`)
  }

  if (!Array.isArray(payload.data) || payload.data.length === 0) {
    throw new Error('Instagram API returned no posts')
  }

  return payload.data.map(mapMediaItem)
}

function writeFeed(file, data) {
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
}

async function main() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN

  if (!token) {
    console.warn(
      '[instagram] INSTAGRAM_ACCESS_TOKEN not set — writing empty feed. Add the secret in GitHub Actions for live posts.',
    )
    writeFeed(outputPath, {
      handle,
      profileUrl: `https://www.instagram.com/${handle}/`,
      fetchedAt: null,
      posts: [],
      configured: false,
    })
    return
  }

  try {
    const posts = await fetchInstagramFeed(token)
    writeFeed(outputPath, {
      handle,
      profileUrl: `https://www.instagram.com/${handle}/`,
      fetchedAt: new Date().toISOString(),
      posts,
      configured: true,
    })
    console.log(`[instagram] Saved ${posts.length} posts to public/instagram-feed.json`)
  } catch (error) {
    console.error(`[instagram] Fetch failed: ${error.message}`)
    writeFeed(outputPath, {
      handle,
      profileUrl: `https://www.instagram.com/${handle}/`,
      fetchedAt: new Date().toISOString(),
      posts: [],
      configured: true,
      error: error.message,
    })
    process.exitCode = 1
  }
}

main()
