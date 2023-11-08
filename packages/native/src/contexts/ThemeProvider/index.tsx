import { ThemeProvider as RThemeProvider, Theme } from "@emotion/react"
import React, { FC, ReactNode } from "react"
import { ThemeDefineProps } from "../../utils"
import { ColorsProps } from "../../styles/Colors"

type ThemeProviderProps = {
  children: ReactNode
  theme: ThemeDefineProps
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme }) => {
  const getPrimaryColorKey = theme.primaryColor
  const getPrimaryColor = theme.colors[getPrimaryColorKey]
  const colors: ColorsProps = { ...theme.colors, primary: getPrimaryColor }

  const overrideTheme = { ...theme, colors }
  return <RThemeProvider theme={overrideTheme}>{children}</RThemeProvider>
}

export default ThemeProvider
