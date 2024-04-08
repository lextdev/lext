import { CreateStyle, ThemeProvider } from "@lextdev/core"
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
          },
        },
      },
    },
  })
  return (
    <ThemeProvider theme={createTheme} colorScheme="light">
      <Main />
    </ThemeProvider>
  )
}
