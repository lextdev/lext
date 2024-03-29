import { Button, SafeAreaView, Stack } from "@lextdev/core"
import { useStorage } from "@lextdev/storage"
import React, { useEffect, useState } from "react"
const Main = () => {
  const [storageMessage, setStorageMessage] = useState("")
  const storage = useStorage()

  const onSetHandler = async () => {
    await storage.set("test", Date.now().toString())
    await onGetHandler()
  }

  const onGetHandler = async () => {
    const result = await storage.get("test")
    setStorageMessage(result || "")
  }

  useEffect(() => {
    onGetHandler()
  }, [])

  return (
    <SafeAreaView backgroundColor="background">
      <Stack>
        <Button label={`Set Item ${storageMessage}`} onPress={onSetHandler} />
      </Stack>
    </SafeAreaView>
  )
}

export default Main
