import { createContext, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useComicTheme } from './useComicTheme'

const ComicThemeContext = createContext(null)

export function ComicThemeProvider({ children }) {
  const value = useComicTheme()
  return <ComicThemeContext.Provider value={value}>{children}</ComicThemeContext.Provider>
}

export function useComicPath() {
  const context = useContext(ComicThemeContext)
  if (!context) {
    throw new Error('useComicPath must be used within ComicThemeProvider')
  }
  return context
}

export function AppLink({ to, ...props }) {
  const { resolvePath } = useComicPath()
  return <Link to={resolvePath(to)} {...props} />
}
