import { SafeAreaProvider } from "react-native-safe-area-context"
import { ThemeProvider } from "@lextdev/core"
import Main from "./components/Main"
import React from "react"
import ThemeData from "./style/Theme"

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={ThemeData} colorScheme="system">
        <Main />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
