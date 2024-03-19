import {
  Box,
  InputRef,
  SafeAreaView,
  Stack,
  Switch,
  Text,
  TextArea,
  TextInput,
} from "@lextdev/core"
import React, { useRef } from "react"

const Main = () => {
  const ref = useRef<InputRef>(null)

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
          <TextInput
            ref={ref}
            variant="test"
            placeholder="Test"
            label="Hello World"
          />
        </Box>
        <Box>
          <TextArea
            placeholder="Test Value"
            label="Hello World"
            description="This is a test description"
            layoutStyle={{
              height: 100,
              paddingVertical: 10,
            }}
            inputStyle={{
              height: "100%",
            }}
          />
        </Box>
        <Box>
          <Switch
            value={true}
            thumbColor={"yellow"}
            ios_backgroundColor="#3e3e3e"
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
        </Box>
      </Stack>
    </SafeAreaView>
  )
}

export default Main
