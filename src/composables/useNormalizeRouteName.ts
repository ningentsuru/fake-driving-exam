export function useNormalizeRouteName() {
  const normalizeRouteName = (str: string): string => {
    if (!str) return ''

    const capitalized = str.charAt(0).toUpperCase() + str.slice(1)

    return capitalized.replace(/([A-Z])/g, ' $1').trim()
  }

  return { normalizeRouteName }
}
