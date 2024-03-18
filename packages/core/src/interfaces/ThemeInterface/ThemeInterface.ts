import { StyleProp } from "react-native"
import TextStyle from "../TextStyle/TextStyle"
import ThemeColorInterface from "../ThemeColorInterface/ThemeColorInterface"
import ThemeVariantType from "@/types/ThemeVariantType/ThemeVariantType"
import ViewStyle from "../ViewStyle/ViewStyle"

/**
 * @name ThemeInterface
 * @description
 * Interface for the theme object
 */
interface ThemeInterface {
  colors: {
    darken: ThemeColorInterface
    lighten: ThemeColorInterface
  }
  components: {
    Text: ThemeVariantType<TextStyle>
    Box: ThemeVariantType<ViewStyle>
    Button: ThemeVariantType<{
      disabledBox?: ViewStyle
      gap?: number
      box?: ViewStyle
      label?: TextStyle
      description?: TextStyle
    }>
    Input: ThemeVariantType<{
      label?: TextStyle
      input?: TextStyle
      layout?: ViewStyle
      errorLayout?: ViewStyle
      description?: TextStyle
      error?: TextStyle
    }>
  }
}

export default ThemeInterface
