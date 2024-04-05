import { SafeAreaView, Text, useTheme } from "@lextdev/core"
import React from "react"

const Main = () => {
  const { getMainColor } = useTheme()

  getMainColor("main")

  return (
    <SafeAreaView backgroundColor="background">
      <Text>Hello World</Text>
    </SafeAreaView>
  )
}

export default Main
