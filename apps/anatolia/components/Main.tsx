import {
  Box,
  Button,
  Modal,
  SafeAreaView,
  Stack,
  Text,
  TextInput,
} from "@lextdev/core"
import { useStorage } from "@lextdev/hook"
import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { useState } from "react"

const Main = () => {
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState("")
  const [storedValue, setValue, clearValue] = useStorage("key", 0, AsyncStorage)

  const handleSetValue = async () => {
    try {
      await setValue(name)
    } catch (error) {
      console.error("Error saving data to AsyncStorage:", error)
    }
  }

  const handleClearValue = async () => {
    try {
      await clearValue()
    } catch (error) {
      console.error("Error clearing data from AsyncStorage:", error)
    }
  }

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
      <Box>
        <Text>{JSON.stringify(storedValue)}</Text>
      </Box>

      <Box>
        <TextInput value={name} onChangeText={setName} />

        <Button label="Save" onPress={handleSetValue} />

        <Button label="Clear" onPress={handleClearValue} />
      </Box>
    </SafeAreaView>
  )
}

export default Main
