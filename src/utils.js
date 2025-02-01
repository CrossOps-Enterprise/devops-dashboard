export function getProductionNameFromUrl(url) {
  if (!url) return null

  const parts = url.split('/')
  return parts[parts.length - 1] || null
}

export function parseLabel(label) {
  const lines = label.split('\n')
  const name = lines[0]
  const type = lines[1].split(': ')[1]
  const status = lines[2].split(': ')[1]

  return { name, type, status }
}
