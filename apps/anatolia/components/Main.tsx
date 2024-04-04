import { Box, Button, Checkbox, SafeAreaView, Select } from "@lextdev/core"
import React, { useState } from "react"

const Main = () => {
  const [visible, setVisible] = useState(false)

  return (
    <SafeAreaView backgroundColor="background">
      <Box gap={50}>
        <Checkbox
          variant="demo"
          label="Hello World"
          checked={visible}
          onChange={setVisible}
        />
        <Button
          label={`Open Modal ${visible}`}
          onPress={() => setVisible(true)}
        />
      </Box>
    </SafeAreaView>
  )
}

export default Main
