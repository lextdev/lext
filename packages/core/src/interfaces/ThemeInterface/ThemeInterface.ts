import { ThemeColorInterface } from ".."
import {
  ThemeComponentBoxInterface,
  ThemeComponentButtonInterface,
  ThemeComponentCheckboxInterface,
  ThemeComponentInputInterface,
  ThemeComponentSelectInterface,
  ThemeComponentSheetInterface,
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
    dark: ThemeColorInterface
    light: ThemeColorInterface
  }
  components: {
    Text: ThemeComponentTextInterface
    Box: ThemeComponentBoxInterface
    Button: ThemeComponentButtonInterface
    Input: ThemeComponentInputInterface
    Switch: ThemeComponentSwitchInterface
    Select: ThemeComponentSelectInterface
    Checkbox: ThemeComponentCheckboxInterface
    Sheet: ThemeComponentSheetInterface
  }
}
