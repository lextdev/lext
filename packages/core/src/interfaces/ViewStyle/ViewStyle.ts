import { ViewStyle as RNViewStyle } from "react-native"
import { ThemeMainColorInterface } from "../ThemeColorInterface/ThemeColorInterface"

interface ViewStyle extends RNViewStyle {
  backgroundColor?: keyof ThemeMainColorInterface
  borderBlockColor?: keyof ThemeMainColorInterface
  borderBlockEndColor?: keyof ThemeMainColorInterface
  borderBlockStartColor?: keyof ThemeMainColorInterface
  borderBottomColor?: keyof ThemeMainColorInterface
  borderColor?: keyof ThemeMainColorInterface
  borderEndColor?: keyof ThemeMainColorInterface
  borderLeftColor?: keyof ThemeMainColorInterface
  borderRightColor?: keyof ThemeMainColorInterface
  borderStartColor?: keyof ThemeMainColorInterface
  borderTopColor?: keyof ThemeMainColorInterface
}

export default ViewStyle
