import {
  Box,
  Button,
  SafeAreaView,
  Select,
  SelectDataProps,
  Text,
} from "@lextdev/core"
import React, { useState } from "react"

const _dataExample: SelectDataProps[] = [
  {
    label: "Option 1",
    value: 1,
    left: <Text>Option 1</Text>,
  },
  {
    label: "Option 2",
    value: 2,
    left: <Text>Option 2</Text>,
    description: "This is option 2",
  },
]

const Main = () => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState(1)
  return (
    <SafeAreaView backgroundColor="background">
      <Select
        visible={visible}
        data={_dataExample}
        value={value}
        presentationStyle="formSheet"
        onChange={(value) => setValue(value as number)}
      />
      <Box>
        <Button label="Open Modal" onPress={() => setVisible(true)} />
      </Box>
    </SafeAreaView>
  )
}

export default Main
