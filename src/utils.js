export function getProductionNameFromUrl(url) {
  if (!url) return null

  const parts = url.split('/')
  return parts[parts.length - 1] || null
}
