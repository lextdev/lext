import { ViewStyle as RNViewStyle } from "react-native"
import { ThemeMainColorInterface } from "../ThemeColorInterface/ThemeColorInterface"

interface ViewStyles extends RNViewStyle {
  backgroundColor?: keyof ThemeMainColorInterface
}

export default ViewStyles
