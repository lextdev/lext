import { TextStyle } from "react-native";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
import { HeadingSizesProps } from "../../../types";

export type HeadingProps = {
  color?: ColorTypeProps;
  fontSize?: keyof HeadingSizesProps | number;
  fontFamily?: string;
  textAlign?: TextStyle["textAlign"];
  letterSpacing?: TextStyle["letterSpacing"];
  lineHeight?: TextStyle["lineHeight"];
  textDecorationLine?: TextStyle["textDecorationLine"];
  textDecorationStyle?: TextStyle["textDecorationStyle"];
  textDecorationColor?: TextStyle["textDecorationColor"];
  textShadowColor?: TextStyle["textShadowColor"];
  textShadowOffset?: TextStyle["textShadowOffset"];
  textShadowRadius?: TextStyle["textShadowRadius"];
  textTransform?: TextStyle["textTransform"];
  testID?: string;
};

export type HeadingComponentThemeProps = {
  default: HeadingProps;
};

export const HeadingComponentThemeData: HeadingComponentThemeProps = {
  default: {
    color: "global",
    fontSize: "h1",
  },
};
