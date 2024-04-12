import {
  Box,
  Button,
  SafeAreaView,
  Sheet,
  SheetRef,
  Text,
  TextInput,
} from "@lextdev/core"
import React, { useRef } from "react"

const Main = () => {
  const sheetRef = useRef<SheetRef>(null)

  return (
    <>
      <SafeAreaView>
        <Button label="Test" onPress={() => sheetRef.current?.open()} />
        <Sheet ref={sheetRef} backdropColor="secondary" backdropOpacity={0.8}>
          <Box gap={10}>
            <Button label="Close" onPress={() => sheetRef.current?.close()} />
            <Text>Hello World</Text>

            <Button label="Change To 200 Height" />

            <TextInput label="Test" />
          </Box>
        </Sheet>
      </SafeAreaView>
    </>
  )
}

export default Main
