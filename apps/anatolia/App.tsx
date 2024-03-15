import { SafeAreaView, ThemeDefaultData, ThemeProvider } from "@lextdev/core"
import { StatusBar } from "react-native"
import Main from "./components/Main"
import React from "react"

export default function App() {
  return (
    <ThemeProvider theme={ThemeDefaultData}>
      <SafeAreaView backgroundColor="background">
        <StatusBar barStyle="light-content" />
        <Main />
      </SafeAreaView>
    </ThemeProvider>
  )
}
