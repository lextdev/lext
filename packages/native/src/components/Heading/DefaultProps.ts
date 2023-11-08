import { TextStyle } from "react-native"
import { HeadingSizesProps } from "../../styles/HeadingSizes"
import { ColorTypeProps } from "../../helpers/GetColorValue"

export type HeadingProps = {
  color?: ColorTypeProps
  fontWeight?: TextStyle["fontWeight"]
  fontSize?: keyof HeadingSizesProps | number
  fontFamily?: string
}

export type HeadingComponentThemeProps = {
  default: HeadingProps
  classes?: {}
}

export const HeadingComponentThemeData: HeadingComponentThemeProps = {
  default: {
    color: "black",
    fontSize: "h1",
    fontWeight: "normal",
  },
}
