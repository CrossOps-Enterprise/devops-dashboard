export const colors = {
  hd1: '#05f', // dark blue
  help: '#08f', // light blue
  hl1: '#f50', // Orange
  hl1a: '#f504', // Orange with alpha
  hl2: '#40d', // Purple
  hl2a: '#40d4', // Purple with alpha
  hl3: '#888', // Gray
  hl3a: '#8884', // Gray with alpha
  bg1: '#fff', // White
  bg2: '#ddd', // Light gray
  bg3: '#ccc', // Medium gray
  brd: '#111', // Dark gray
  tx1: '#000', // Black
  tx2: '#fff', // White
  tx3: '#444', // Dark gray
  red: '#f00', // Red
  gre: '#0f0', // Green
  bro: '#f60' // Orange
}

export const theme = {
  primary: colors.hd1,
  secondary: colors.bro,
  error: colors.red,
  warning: colors.bro,
  success: colors.gre,
  ...colors
}
