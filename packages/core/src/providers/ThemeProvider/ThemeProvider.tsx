import {
  ChildrenInterface,
  ThemeColorScheme,
  ThemeInterface,
} from "@/interfaces"
import { ColorSchemeContext } from "@/contexts"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import { StyleType } from "@/types"
import {
  ThemeMainColorInterface,
  ThemeTextColorInterface,
} from "@/interfaces/ThemeColorInterface/ThemeColorInterface"
import { useColorScheme } from "react-native"
import React, { FC, useState } from "react"

const ThemeProvider: FC<
  ChildrenInterface & { theme: ThemeInterface; colorScheme?: ThemeColorScheme }
> = ({ children, theme, colorScheme = "system" }) => {
  const [getColorScheme, setColorScheme] =
    useState<ThemeColorScheme>(colorScheme)

  const systemColor = useColorScheme()

  const getSystemColorScheme = () => {
    if (typeof systemColor !== "string") {
      return "light"
    }

    return systemColor
  }

  const getMainColor = (color?: keyof ThemeMainColorInterface) => {
    return (
      color &&
      theme.colors[
        getColorScheme === "system" ? getSystemColorScheme() : getColorScheme
      ].main[color]
    )
  }

  const getTextColor = (color?: keyof ThemeTextColorInterface) => {
    return (
      color &&
      theme.colors[
        getColorScheme === "system" ? getSystemColorScheme() : getColorScheme
      ].text[color]
    )
  }

  const styleParse = (style: StyleType) => {
    const newStyle: StyleType = {}

    Object.keys(style).forEach((key) => {
      if (key.includes("Color")) {
        newStyle[key] = getMainColor(
          style[key] as keyof ThemeMainColorInterface | undefined,
        )
      } else if (key.includes("color")) {
        newStyle[key] = getTextColor(
          style[key] as keyof ThemeTextColorInterface | undefined,
        )
      } else {
        newStyle[key] = style[key]
      }
    })

    return newStyle
  }

  return (
    <EmotionThemeProvider
      theme={{
        theme: theme,
        getMainColor,
        getTextColor,
        styleParse,
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
