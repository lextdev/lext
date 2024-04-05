import { ColorSchemeContext } from "@/contexts"
import { ThemeProps } from "@/types"
import { useTheme as emotionUseTheme } from "@emotion/react"
import { useContext } from "react"

const useTheme = () => {
  const theme = emotionUseTheme() as ThemeProps
  const scheme = useContext(ColorSchemeContext)

  return {
    ...theme,
    ...scheme,
  }
}

export default useTheme
