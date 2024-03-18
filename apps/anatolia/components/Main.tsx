import { Box, SafeAreaView, Stack, Text, TextInput } from "@lextdev/core"
import React from "react"

const Main = () => {
  return (
    <SafeAreaView backgroundColor="background">
      <Stack flex={1}>
        <Box
          justifyContent="center"
          alignItems="center"
          backgroundColor="primary"
        >
          <Text variant="global">Welcome To Lext</Text>
        </Box>
        <Box variant="global">
          <TextInput right={<Text>Te</Text>} />
        </Box>
      </Stack>
    </SafeAreaView>
  )
}

export default Main
