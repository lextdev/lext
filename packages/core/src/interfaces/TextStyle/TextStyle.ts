import { TextStyle as RNTextStyle } from "react-native"
import { ThemeTextColorInterface } from "../ThemeColorInterface/ThemeColorInterface"

export interface TextStyle extends RNTextStyle {
  color?: keyof ThemeTextColorInterface
}
