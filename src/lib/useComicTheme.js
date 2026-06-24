import { useLocation } from 'react-router-dom'

export const COMIC_PATH_PREFIX = '/comic'

export function useComicTheme() {
  const { pathname } = useLocation()
  const isComicTheme =
    pathname === COMIC_PATH_PREFIX || pathname.startsWith(`${COMIC_PATH_PREFIX}/`)

  const pathPrefix = isComicTheme ? COMIC_PATH_PREFIX : ''

  const resolvePath = (to) => {
    if (!pathPrefix) return to
    if (to === '/') return pathPrefix
    return `${pathPrefix}${to}`
  }

  return { isComicTheme, pathPrefix, resolvePath }
}
