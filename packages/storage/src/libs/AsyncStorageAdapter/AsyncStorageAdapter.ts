import { AsyncStorageStatic } from "@react-native-async-storage/async-storage"
import { StorageClientInterface } from "@/interfaces"

class AsyncStorageAdapter implements StorageClientInterface {
  constructor(private storage: AsyncStorageStatic) {}

  async get(key: string): Promise<string | null> {
    return this.storage.getItem(key)
  }

  async set(key: string, value: string): Promise<void> {
    await this.storage.setItem(key, value)
  }

  async remove(key: string): Promise<void> {
    await this.storage.removeItem(key)
  }
}

export default AsyncStorageAdapter
