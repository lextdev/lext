import { MMKV } from "react-native-mmkv"
import { StorageClientInterface } from "@/interfaces"

class MMKVStorageAdapter implements StorageClientInterface {
  constructor(private storage: MMKV) {}

  async get(key: string): Promise<string | null> {
    return this.storage.getString(key) ?? null
  }

  async set(key: string, value: string): Promise<void> {
    this.storage.set(key, value)
  }

  async remove(key: string): Promise<void> {
    this.storage.delete(key)
  }
}

export default MMKVStorageAdapter
