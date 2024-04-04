import {
  AsyncStorageAdapter,
  SessionProvider,
  StorageClient,
  StorageProvider,
} from "@lextdev/storage"
import { CreateStyle, SafeAreaView, ThemeProvider } from "@lextdev/core"
import { StatusBar } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Main from "./components/Main"
import React from "react"

export default function App() {
  const storage = new StorageClient(new AsyncStorageAdapter(AsyncStorage))
  const createTheme = CreateStyle({
    colors: {
      lighten: {
        main: {
          primary: "purple",
        },
      },
    },
    components: {
      Select: {
        defaultVariant: "test",
        variants: {
          test: {
            itemActiveStyle: {
              backgroundColor: "secondary",
            },
          },
        },
      },
    },
  })
  return (
    <StorageProvider storage={storage}>
      <SessionProvider>
        <ThemeProvider theme={createTheme}>
          <SafeAreaView backgroundColor="background">
            <Main />
          </SafeAreaView>
        </ThemeProvider>
      </SessionProvider>
    </StorageProvider>
  )
}
