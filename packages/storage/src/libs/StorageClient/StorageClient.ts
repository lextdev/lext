import { StorageClientInterface } from "@/interfaces"

class StorageClient {
  constructor(private client: StorageClientInterface) {}

  async get(key: string): Promise<string | null> {
    return this.client.get(key)
  }

  async set(key: string, value: string): Promise<void> {
    await this.client.set(key, value)
  }

  async remove(key: string): Promise<void> {
    await this.client.remove(key)
  }
}

export default StorageClient
