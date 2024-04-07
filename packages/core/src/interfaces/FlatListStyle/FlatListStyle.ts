import { ThemeMainColorInterface } from "../ThemeColorInterface/ThemeColorInterface"
import { ViewStyle } from "../ViewStyle/ViewStyle"

export interface FlatListStyle extends ViewStyle {
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
