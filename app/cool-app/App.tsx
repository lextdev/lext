import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, View } from "react-native"
import { SafeAreaView, Text, Theme, ThemeProvider, createTheme } from "@ynssenem/lext"

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
        <View style={styles.container}>
          <Text>Hello World</Text>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
