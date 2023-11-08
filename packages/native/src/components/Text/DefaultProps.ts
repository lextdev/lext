import { TextStyle } from "react-native"
import { TextSizesProps } from "../../styles/TextSizes"
import { ColorTypeProps } from "../../helpers/GetColorValue"

export type TextProps = {
  color?: ColorTypeProps
  fontWeight?: TextStyle["fontWeight"]
  fontSize?: keyof TextSizesProps | number
  fontFamily?: string
}

export type TextComponentThemeProps = {
  default: TextProps
  classes?: {}
}

export const TextComponentThemeData: TextComponentThemeProps = {
  default: {
    color: "black",
    fontSize: "body",
    fontWeight: "normal",
  },
}
