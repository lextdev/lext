import { Text } from "react-native"
import {ThemeProvider} from "@lextdev/core"
import React from "react"

export default function App() {
  return (
    <ThemeProvider >
      <Text>Hello World</Text>
    </ThemeProvider>
  )
}
