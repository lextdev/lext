import { Button, SafeAreaView, Stack } from "@lextdev/core"
import { useSession, useStorage } from "@lextdev/storage"
import React, { useEffect, useState } from "react"
const Main = () => {
  const [storageMessage, setStorageMessage] = useState("")
  const session = useSession()
  const storage = useStorage()

  const onSetHandler = async () => {
    const testJwt = Date.now().toString()
    await storage.set("test", testJwt)

    await session.signIn({
      id: 1,
      jwt: testJwt,
      testMessageString: "Hello World",
      testMessageStringTwo: "Hello World Two",
    })

    await onGetHandler()
  }

  const onGetHandler = async () => {
    const result = await storage.get("test")
    setStorageMessage(result || "")
  }

  useEffect(() => {
    onGetHandler()
  }, [])

  useEffect(() => {
    console.log("Status", session.session?.jwt)
  }, [session])

  return (
    <SafeAreaView backgroundColor="background">
      <Stack>
        <Button label={`Set Item ${storageMessage}`} onPress={onSetHandler} />
        {session.getStatus === "loading" && <Button label="Loading" />}
        {session.getStatus === "auth" && (
          <Button
            label="SignOut"
            onPress={() => {
              session.signOut()
            }}
          />
        )}
      </Stack>
    </SafeAreaView>
  )
}

export default Main
