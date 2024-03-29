# Lext/Storage Management

A brief description of your project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

```bash
npm install @lextdev/storage
```

### Install Other Dependencies

AsyncStorage: Recommended version `^1.21.0`

```bash
npm install @react-native-async-storage/async-storage@^1.21.0
```

OR

MMKV: Recommended version `^2.12.2`

```bash
npm install react-native-mmkv@^2.12.2
```

## Usage

### For AsyncStorage

```ts
import {
  AsyncStorageAdapter,
  StorageClient,
  StorageProvider,
} from "@lextdev/storage"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Main from "./components/Main"
import React from "react"

const storage = new StorageClient(new AsyncStorageAdapter(AsyncStorage))

export default function App() {
  return (
    <StorageProvider storage={storage}>
      <Main />
    </StorageProvider>
  )
}
```

OR

### For MMKV

```ts
import { MMKV } from "react-native-mmkv"
import {
  MMKVStorageAdapter,
  StorageClient,
  StorageProvider,
} from "@lextdev/storage"
import Main from "./components/Main"
import React from "react"

const storage = new StorageClient(new MMKVStorageAdapter(new MMKV()))

export default function App() {
  return (
    <StorageProvider storage={storage}>
      <Main />
    </StorageProvider>
  )
}
```

### Example

```ts
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
```

Instructions on how to use your project and any relevant examples.
