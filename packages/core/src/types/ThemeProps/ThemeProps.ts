import { ThemeInterface } from "@/interfaces"
import {
  ThemeMainColorInterface,
  ThemeTextColorInterface,
} from "@/interfaces/ThemeColorInterface/ThemeColorInterface"
import StyleType from "../StyleType/StyleType"

type ColorResultProps = string | undefined

type ThemeProps = {
  theme: ThemeInterface
  getMainColor: (color?: keyof ThemeMainColorInterface) => ColorResultProps
  getTextColor: (color?: keyof ThemeTextColorInterface) => ColorResultProps
  styleParse: (style: StyleType) => StyleType
  getComponent: ThemeInterface["components"]
}

export default ThemeProps
