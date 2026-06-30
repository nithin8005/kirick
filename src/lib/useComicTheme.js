/** Single-site layout — no /comic route or theme switching */
export function useComicTheme() {
  const resolvePath = (to) => to

  return {
    isComicTheme: true,
    pathPrefix: '',
    resolvePath,
  }
}
