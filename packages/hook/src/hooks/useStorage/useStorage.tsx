/* eslint-disable @typescript-eslint/no-explicit-any */
import { AsyncStorageInterface, MMKVInterface } from "@lextdev/storage"
import { getItem, removeItem, setItem } from "@lextdev/storage"
import { useEffect, useState } from "react"
type SetValue<T> = (value: T) => Promise<void>
type ClearValue = () => Promise<void>

type T = any

const useStorage = (
  key: string,
  initialValue: T,
  storage: AsyncStorageInterface | MMKVInterface,
): [T, SetValue<T>, ClearValue] => {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    const getStoredValue = async () => {
      try {
        const jsonValue = await getItem(key, storage)
        if (jsonValue !== null) {
          setStoredValue(jsonValue)
        }
      } catch (error) {
        console.error("Error loading data from AsyncStorage:", error)
      }
    }

    getStoredValue()
  }, [key, storage])

  const setValue: SetValue<T> = async (value) => {
    try {
      await setItem(key, value, storage)
      setStoredValue(value)
    } catch (error) {
      console.error("Error saving data to AsyncStorage:", error)
    }
  }

  const clearValue: ClearValue = async () => {
    try {
      await removeItem(key, storage)
      setStoredValue(initialValue)
    } catch (error) {
      console.error("Error clearing data from AsyncStorage:", error)
    }
  }

  return [storedValue, setValue, clearValue]
}

export default useStorage
