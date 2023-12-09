import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, View } from "react-native"
import { Theme, ThemeProvider } from "@ynssenem/lext"

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
