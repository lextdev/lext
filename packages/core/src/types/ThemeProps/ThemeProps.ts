import { ThemeInterface } from "@/interfaces"
import { ThemeMainColorInterface, ThemeTextColorInterface } from "@/interfaces/ThemeColorInterface/ThemeColorInterface"

type ThemeProps = {
  theme: ThemeInterface
  getMainColor: (backgroundColor: keyof ThemeMainColorInterface) => string
  getTextColor: (textColor: keyof ThemeTextColorInterface) => string
  getComponent: ThemeInterface["components"],
}

export default ThemeProps
