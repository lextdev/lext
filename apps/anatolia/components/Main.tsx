import { Button, SafeAreaView, Select, Text } from "@lextdev/core"
import React, { useState } from "react"

const Main = () => {
  const [visible, setVisible] = useState(false)

  return (
    <SafeAreaView backgroundColor="muted">
      <Select
        header={<Text>Header</Text>}
        presentationStyle="formSheet"
        onChange={() => setVisible(false)}
        data={[
          {
            label: "Test",
            value: "Hello",
          },
        ]}
        visible={visible}
      />

      <Button label="Click on me!" onPress={() => setVisible(true)} />
    </SafeAreaView>
  )
}

export default Main
