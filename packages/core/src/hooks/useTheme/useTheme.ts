import { ColorSchemeContext } from "@/contexts"
import { useTheme as emotionUseTheme } from "@emotion/react"
import { useContext } from "react"
import ThemeProps from "@/types/ThemeProps/ThemeProps"

const useTheme = () => {
  const theme = emotionUseTheme() as ThemeProps
  const scheme = useContext(ColorSchemeContext)
  return {
    ...theme,
    ...scheme,
  }
}

export default useTheme
