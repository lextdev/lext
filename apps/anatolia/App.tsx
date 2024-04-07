import {
  AsyncStorageAdapter,
  SessionProvider,
  StorageClient,
  StorageProvider,
} from "@lextdev/storage"
import { CreateStyle, ThemeProvider } from "@lextdev/core"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Main from "./components/Main"
import React from "react"

export default function App() {
  const storage = new StorageClient(new AsyncStorageAdapter(AsyncStorage))
  const createTheme = CreateStyle({
    colors: {
      light: {
        main: {
          primary: "purple",
          main: "blue",
        },
        text: {
          example: "yellow",
        },
      },
      dark: {
        main: {
          background: "#000",
        },
      },
    },
  })
  return (
    <StorageProvider storage={storage}>
      <SessionProvider>
        <ThemeProvider theme={createTheme} colorScheme="light">
          <Main />
        </ThemeProvider>
      </SessionProvider>
    </StorageProvider>
  )
}
