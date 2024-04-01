import { TextStyle as RNTextStyle } from "react-native"
import { ThemeTextColorInterface } from "../ThemeColorInterface/ThemeColorInterface"

interface TextStyle extends RNTextStyle {
  color?: keyof ThemeTextColorInterface
}

export default TextStyle
