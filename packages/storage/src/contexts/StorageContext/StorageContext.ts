import { AsyncStorageAdapter, StorageClient } from "@/libs"
import { createContext } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const storage = new StorageClient(new AsyncStorageAdapter(AsyncStorage))

const StorageContext = createContext<StorageClient>(storage)

export default StorageContext
