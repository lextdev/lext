import "react-native-gesture-handler"
import React, { useCallback } from "react"
import { SessionProvider, ThemeProvider, createTheme } from "@ynssenem/lext"
import * as SplashScreen from "expo-splash-screen"

import TwoScreen from "./src"
import { useFonts } from "expo-font"

const theme = createTheme({
  colorScheme: "lighten",
  components: {
    Input: {
      default: {
        placeholderTextColor: "primary",
      },
    },
  },
})

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    "Urbanist-Black": require("./src/fonts/Urbanist-Black.otf"),
    "Urbanist-Regular": require("./src/fonts/Urbanist-Regular.otf"),
    "Urbanist-Thin": require("./src/fonts/Urbanist-Thin.otf"),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme} gestureHandlerRootView onLayout={onLayoutRootView}>
      <SessionProvider>
        <TwoScreen />
      </SessionProvider>
    </ThemeProvider>
  )
}
