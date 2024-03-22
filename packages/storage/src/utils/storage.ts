import {
  AsyncStorageInterface,
  MMKVInterface,
} from "@/interfaces/storage.interface"
import isMMKVProps from "./isMMKV"

export const getItem = async (
  key: string,
  storage: AsyncStorageInterface | MMKVInterface,
): Promise<string | null> => {
  let result = null as string | null

  switch (true) {
    case isMMKVProps(storage):
      result = storage.getString(key) ?? null
      break
    case !isMMKVProps(storage):
      result = await storage.getItem(key)
      break
  }

  return result
}

export const setItem = async (
  key: string,
  value: string,
  storage: AsyncStorageInterface | MMKVInterface,
): Promise<void> => {
  switch (true) {
    case isMMKVProps(storage):
      storage.set(key, value)
      break
    case !isMMKVProps(storage):
      await storage.setItem(key, value)
      break
  }
}

export const removeItem = async (
  key: string,
  storage: AsyncStorageInterface | MMKVInterface,
): Promise<void> => {
  switch (true) {
    case isMMKVProps(storage):
      storage.delete(key)
      break
    case !isMMKVProps(storage):
      await storage.removeItem(key)
      break
  }
}
