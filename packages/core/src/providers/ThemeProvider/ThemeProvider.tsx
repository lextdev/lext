import {
  ChildrenInterface,
  ThemeColorScheme,
  ThemeInterface,
} from "@/interfaces"
import { ColorSchemeContext } from "@/contexts"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import {
  ThemeMainColorInterface,
  ThemeTextColorInterface,
} from "@/interfaces/ThemeColorInterface/ThemeColorInterface"
import React, { FC, useState } from "react"

const ThemeProvider: FC<ChildrenInterface & { theme: ThemeInterface, colorScheme?: ThemeColorScheme }> = ({
  children,
  theme,
  colorScheme = "lighten"
}) => {
  const [getColorScheme, setColorScheme] = useState<ThemeColorScheme>(colorScheme)

  return (
    <EmotionThemeProvider
      theme={{
        theme: theme,
        getMainColor: (backgroundColor: keyof ThemeMainColorInterface) =>
          theme.colors[getColorScheme].main[backgroundColor],
        getTextColor: (textColor: keyof ThemeTextColorInterface) =>
          theme.colors[getColorScheme].text[textColor],
        getComponent: theme.components,
      }}
    >
      <ColorSchemeContext.Provider
        value={{
          colorScheme: getColorScheme,
          setColorScheme,
        }}
      >
        {children}
      </ColorSchemeContext.Provider>
    </EmotionThemeProvider>
  )
}

export default ThemeProvider
