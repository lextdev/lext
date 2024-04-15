import {
  Button,
  SafeAreaView,
  Sheet,
  SheetRef,
  TextInput,
  View,
} from "@lextdev/core"
import React, { useRef } from "react"

const Main = () => {
  const sheetRef = useRef<SheetRef>(null)

  return (
    <SafeAreaView backgroundColor="muted">
      <Sheet ref={sheetRef}>
        <View>
          <TextInput label="Test" />
        </View>
      </Sheet>

      <Button label="Click on me!" onPress={() => sheetRef.current?.open()} />
    </SafeAreaView>
  )
}

export default Main
