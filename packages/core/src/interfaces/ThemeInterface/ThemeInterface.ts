import { ThemeColorInterface } from "../"
import {
  ThemeComponentBottomSheetInterface,
  ThemeComponentBoxInterface,
  ThemeComponentButtonInterface,
  ThemeComponentCheckboxInterface,
  ThemeComponentInputInterface,
  ThemeComponentSelectInterface,
  ThemeComponentSwitchInterface,
  ThemeComponentTextInterface,
} from "../ThemeComponentInterface/ThemeComponentInterface"

/**
 * @name ThemeInterface
 * @description
 * Interface for the theme object
 */
export interface ThemeInterface {
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
    Checkbox: ThemeComponentCheckboxInterface
  }
}
