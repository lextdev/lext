import { FlexStyle, PressableProps } from "react-native"
import { ColorTypeProps } from "../../helpers/GetColorValue"

export type BoxProps = {
  backgroundColor?: ColorTypeProps
} & FlexStyle

export type BoxComponentThemeProps = {
  default: BoxProps
  classes?: {}
}

export const BoxComponentThemeData: BoxComponentThemeProps = {
  default: {},
}
