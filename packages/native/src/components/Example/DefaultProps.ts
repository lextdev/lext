import { FlexStyle } from "react-native"

export type ExampleProps = {
  alignItems?: FlexStyle["alignItems"]
  justifyContent?: FlexStyle["justifyContent"]
  gap?: FlexStyle["gap"]
  flex?: FlexStyle["flex"]
}

export type ExampleComponentThemeProps = {
  default: ExampleProps
  classes?: {}
}

export const ExampleComponentThemeData: ExampleComponentThemeProps = {
  default: {},
}
