import { ColorsProps } from "../../styles/Colors"

export type ColorTypeProps = keyof ColorsProps | `${keyof ColorsProps}.${number}`

const GetColorValue = (color?: ColorTypeProps, colors?: ColorsProps): string | undefined => {
  if (!color || !colors) {
    return undefined
  }

  if (color.toString().includes(".")) {
    const [mainColor, subColorIndex] = color.toString().split(".") as [keyof ColorsProps, string]
    const index = parseInt(subColorIndex)

    if (colors[mainColor] && colors[mainColor][index]) {
      return colors[mainColor][index]
    }
  } else {
    const currentColor = color as keyof ColorsProps
    if (colors[currentColor] && colors[currentColor][0]) {
      return colors[currentColor][0]
    }
  }

  return undefined
}

export default GetColorValue
