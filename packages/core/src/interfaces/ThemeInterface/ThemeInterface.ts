import {
  ThemeComponentBottomSheetInterface,
  ThemeComponentBoxInterface,
  ThemeComponentButtonInterface,
  ThemeComponentInputInterface,
  ThemeComponentSelectInterface,
  ThemeComponentSwitchInterface,
  ThemeComponentTextInterface,
} from "../ThemeComponentInterface/ThemeComponentInterface"
import ThemeColorInterface from "../ThemeColorInterface/ThemeColorInterface"

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
    Text: ThemeComponentTextInterface
    Box: ThemeComponentBoxInterface
    Button: ThemeComponentButtonInterface
    Input: ThemeComponentInputInterface
    Switch: ThemeComponentSwitchInterface
    BottomSheet: ThemeComponentBottomSheetInterface
    Select: ThemeComponentSelectInterface
  }
}

export default ThemeInterface
