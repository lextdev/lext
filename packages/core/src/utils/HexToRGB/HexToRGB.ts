const HexToRGB = (hex: string, opacity?: number): string => {
  hex = hex.replace(/^#/, "")

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("")
  }

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  if (opacity !== undefined) {
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }

  return `rgb(${r}, ${g}, ${b})`
}

export default HexToRGB
