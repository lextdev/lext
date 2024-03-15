import { Text, useTheme } from "@lextdev/core"
import { TouchableOpacity, View } from "react-native"
import React from "react"

const Main = () => {
  const { setColorScheme, colorScheme } = useTheme()

  return (
    <View>
      <Text>Hello World {colorScheme}</Text>
      <TouchableOpacity
        onPress={() => {
          setColorScheme(colorScheme === "lighten" ? "darken" : "lighten")
        }}
      >
        <Text
         color="global"
        >
          Change Color Scheme
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Main
