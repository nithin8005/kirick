import { Navigate } from 'react-router-dom'
import { useComicPath } from '../lib/ComicThemeContext'

export default function Story() {
  const { resolvePath } = useComicPath()
  return <Navigate to={resolvePath('/about')} replace />
}
