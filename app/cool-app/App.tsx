import React from "react"
import { View } from "react-native"
import { SafeAreaView, Text, ThemeProvider, createTheme } from "@ynssenem/lext"

export default function App() {
  const theme = createTheme({
    colors: {
      background: "#FFF78A",
      global: "#000",
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View>
          <Text>Hello World</Text>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  )
}
