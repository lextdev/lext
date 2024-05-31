import {
  Box,
  Button,
  SafeAreaView,
  Select,
  SelectDataProps,
  TextArea,
  TextInput,
  useTheme,
} from "@lextdev/core"
import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"

const Main = () => {
  const [value, setValue] = useState("")
  const [visible, setVisible] = useState(false)
  const { colorScheme, setColorScheme } = useTheme()
  const datas: SelectDataProps[] = [
    {
      label: "Hello",
      value: 1,
      customFields: {
        hello: "World",
      },
    },
    {
      label: "World",
      value: 2,
    },
  ]

  console.log(colorScheme)

  return (
    <SafeAreaView>
      <StatusBar style="inverted" />
      <Select
        data={datas}
        visible={visible}
        value={2}
        onChange={(value) => console.log(value)}
        onSelect={() => setVisible(false)}
      />
      <Box variant="container" gap={25}>
        <Button
          label="Click on me! Light"
          onPress={() => setColorScheme("light")}
        />
        <Button
          label="Click on me! Dark"
          onPress={() => setColorScheme("dark")}
        />
        <Button
          label="Click on me! System"
          onPress={() => setColorScheme("system")}
        />
        <Button label="Open Select" onPress={() => setVisible(true)} />

        <TextInput
          label="Hello World"
          value={value}
          onChangeText={(value) => setValue(value)}
        />

        <TextArea
          label="Hello World"
          value={value}
          onChangeText={(value) => setValue(value)}
        />
      </Box>
    </SafeAreaView>
  )
}

export default Main
