import React from "react"
import { ThemeProvider, createTheme } from "@ynssenem/lext"
import IndexScreen from "./src"

export default function App() {
  const theme = createTheme({
    colors: {
      darken: {
        background: "#2B2A4C",
        global: "#FFF",
        primary: "#83A2FF",
      },
      lighten: {
        background: "#FFF",
        global: "#000",
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <IndexScreen />
    </ThemeProvider>
  )
}
