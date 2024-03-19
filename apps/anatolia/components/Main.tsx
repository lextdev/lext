import { Box, Button, Modal, SafeAreaView, Stack, Text } from "@lextdev/core"
import React, { useState } from "react"

const Main = () => {
  const [visible, setVisible] = useState(false)

  return (
    <SafeAreaView backgroundColor="background">
      <Modal visible={visible} presentationStyle="pageSheet">
        <Box>
          <Text>Hello World</Text>
          <Button label="Kapat" onPress={() => setVisible(false)} />
        </Box>
      </Modal>
      <Stack flex={1}>
        <Box
          justifyContent="center"
          alignItems="center"
          backgroundColor="primary"
        >
          <Text variant="global">Welcome To Lext</Text>
        </Box>
        <Box>
          <Button label="Open Modal" onPress={() => setVisible(true)} />
        </Box>
      </Stack>
    </SafeAreaView>
  )
}

export default Main
