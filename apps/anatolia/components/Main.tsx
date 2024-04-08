import { Box, Button, ImageBackground, SafeAreaView } from "@lextdev/core"
import React from "react"

const Main = () => {
  return (
    <ImageBackground flex={1}>
      <SafeAreaView>
        <Box>
          <Button label="Test" backgroundColor="primary" color="global" />
        </Box>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Main
