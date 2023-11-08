import { FlexStyle } from "react-native"

export type GridProps = {
  alignItems?: FlexStyle["alignItems"]
  justifyContent?: FlexStyle["justifyContent"]
  gap?: FlexStyle["gap"]
  flex?: FlexStyle["flex"]
}

export type GridComponentThemeProps = {
  default: GridProps
  classes?: {}
}

export const GridComponentThemeData: GridComponentThemeProps = {
  default: {},
}
