import { StyleType } from ".."
import { ThemeInterface } from "@/interfaces"
import {
  ThemeMainColorInterface,
  ThemeTextColorInterface,
} from "@/interfaces/ThemeColorInterface/ThemeColorInterface"

type ColorResultProps = string | undefined

export type ThemeProps = {
  theme: ThemeInterface
  getMainColor: (color?: keyof ThemeMainColorInterface) => ColorResultProps
  getTextColor: (color?: keyof ThemeTextColorInterface) => ColorResultProps
  styleParse: (style: StyleType) => StyleType
  getComponent: ThemeInterface["components"]
}
