import {
  Box,
  Button,
  ImageBackground,
  SafeAreaView,
  Select,
  Text,
} from "@lextdev/core"
import React from "react"

const Main = () => {
  return (
    <ImageBackground flex={1}>
      <SafeAreaView>
        <Select visible={true} header={<Text>Hello World</Text>} data={[]} />
        <Box>
          <Button label="Test" backgroundColor="primary" color="global" />
        </Box>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Main
