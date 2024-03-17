import { SafeAreaView, Stack, Text } from "@lextdev/core"
import React from "react"

const Main = () => {
  return (
    <SafeAreaView backgroundColor="background">
      <Stack flex={1} gap={25} justifyContent="space-between">
        <Text variant="global">Welcome To Lext</Text>
      </Stack>
    </SafeAreaView>
  )
}

export default Main
