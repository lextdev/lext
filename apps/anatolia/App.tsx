import { CreateStyle, ThemeProvider } from "@lextdev/core"
import { SafeAreaProvider } from "react-native-safe-area-context"
import Main from "./components/Main"
import React from "react"

export default function App() {
  const createTheme = CreateStyle({
    components: {
      Button: {
        defaultVariant: "test",
        variants: {
          test: {
            box: {
              padding: 10,
              borderRadius: 10,
              backgroundColor: "secondary",
            },
            label: {
              color: "inverse",
            },
          },
        },
      },
    },
  })
  return (
    <ThemeProvider theme={createTheme} colorScheme="light">
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
