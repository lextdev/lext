import {
  ChildrenInterface,
  ThemeColorScheme,
  ThemeInterface,
} from "@/interfaces"
import { ColorSchemeContext } from "@/contexts"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import { SafeAreaView } from "react-native"
import { ThemeDefaultData } from "@/styles"
import React, { FC, useEffect, useState } from "react"

const ThemeProvider: FC<ChildrenInterface & { theme: ThemeInterface }> = ({
  children,
  theme,
}) => {
  const [colorScheme, setColorScheme] = useState<ThemeColorScheme>("lighten")

  useEffect(() => {
    if (theme) {
      setColorScheme(theme.colorScheme)
    }
  }, [theme])

  return (
    <EmotionThemeProvider
      theme={{
        theme: ThemeDefaultData,
      }}
    >
      <ColorSchemeContext.Provider
        value={{
          colorScheme,
          setColorScheme,
        }}
      >
        <SafeAreaView>
        {children}
        </SafeAreaView>
      </ColorSchemeContext.Provider>
    </EmotionThemeProvider>
  )
}

export default ThemeProvider
