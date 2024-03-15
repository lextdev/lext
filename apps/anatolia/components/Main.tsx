import { ActivityIndicator } from "react-native"
import {
  Box,
  Button,
  Group,
  SafeAreaView,
  Stack,
  Text,
  useTheme,
} from "@lextdev/core"
import React from "react"

const Main = () => {
  const { setColorScheme, colorScheme } = useTheme()

  return (
    <SafeAreaView backgroundColor="background">
      <Stack flex={1} gap={25} justifyContent="space-between">
        <Text variant="global">Welcome To Lext</Text>
        <ActivityIndicator color={"blue"} size={"small"} />
        <Box>
          <Group justifyContent="space-between">
            <Text variant="global">Global 1</Text>
            <Button
              label="Hello World"
              onPress={() => {
                console.log("Hello World")
              }}
            />
          </Group>
        </Box>
      </Stack>
    </SafeAreaView>
  )
}

export default Main
