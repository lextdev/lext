import {
  TextStyle,
  TextStyleAndroid,
  TextStyleIOS,
  ViewStyle,
} from "react-native";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
import { TextSizesProps } from "../../../types";

export type TextProps = TextStyleIOS &
  TextStyleAndroid &
  ViewStyle & {
    color?: ColorTypeProps;
    fontSize?: keyof TextSizesProps | number;
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
    testID?: TextStyle["testID"];
  };

export type TextComponentThemeProps = {
  default: TextProps;
};

export const TextComponentThemeData: TextComponentThemeProps = {
  default: {
    color: "global",
    fontSize: "body",
  },
};
