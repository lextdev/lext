import {
  AsyncStorageAdapter,
  StorageClient,
  StorageProvider,
} from "@lextdev/storage"
import { SafeAreaView, ThemeDefaultData, ThemeProvider } from "@lextdev/core"
import { StatusBar } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Main from "./components/Main"
import React from "react"

export default function App() {
  const storage = new StorageClient(new AsyncStorageAdapter(AsyncStorage))

  return (
    <StorageProvider storage={storage}>
      <ThemeProvider theme={ThemeDefaultData}>
        <SafeAreaView backgroundColor="background">
          <StatusBar barStyle="light-content" />
          <Main />
        </SafeAreaView>
      </ThemeProvider>
    </StorageProvider>
  )
}
