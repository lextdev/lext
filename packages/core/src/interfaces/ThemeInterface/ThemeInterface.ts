import TextStyle from "../TextStyle/TextStyle"
import ThemeColorInterface from "../ThemeColorInterface/ThemeColorInterface"

export type ThemeKeyOfComponents = "Text"

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
    Text: {
      defaultVariant: string
      variants: Record<string, TextStyle>
    }
  }
}

export default ThemeInterface
