import { FlexStyle } from "react-native";

export type StackProps = {
  alignItems?: FlexStyle["alignItems"];
  justifyContent?: FlexStyle["justifyContent"];
  gap?: FlexStyle["gap"];
  flex?: FlexStyle["flex"];
};

export type StackComponentThemeProps = {
  default: StackProps;
  classes?: object;
};

export const StackComponentThemeData: StackComponentThemeProps = {
  default: {},
};
