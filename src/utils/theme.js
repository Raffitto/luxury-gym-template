export function applyBrandTheme(colors = {}) {
  const root = document.documentElement
  const map = {
    black: '--color-black',
    yellow: '--color-yellow',
    white: '--color-white',
    gray: '--color-gray',
    surface: '--color-surface',
    border: '--color-border',
  }

  Object.entries(map).forEach(([key, variable]) => {
    if (colors[key]) root.style.setProperty(variable, colors[key])
  })
}
