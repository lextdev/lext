import AsyncStore from "@react-native-async-storage/async-storage"

import { AsyncSessionProps } from "../../types/Session"
import { ASYNCSTORAGE_INTRO_PASS_KEY, ASYNCSTORAGE_SESSION_KEY } from "../Define"

export async function getSessionLocale(): Promise<AsyncSessionProps | null> {
  const result = await AsyncStore.getItem(ASYNCSTORAGE_SESSION_KEY)

  if (result) {
    return JSON.parse(result) as AsyncSessionProps
  }

  return null
}

export async function setSessionLocale(data: AsyncSessionProps) {
  await AsyncStore.setItem(ASYNCSTORAGE_SESSION_KEY, JSON.stringify(data))
}

export async function removeSessionLocale() {
  await AsyncStore.removeItem(ASYNCSTORAGE_SESSION_KEY)
}

export async function getIntroPass(): Promise<boolean> {
  const result = await AsyncStore.getItem(ASYNCSTORAGE_INTRO_PASS_KEY)
  return result !== null
}

export async function removeIntroPass(): Promise<void> {
  return await AsyncStore.removeItem(ASYNCSTORAGE_INTRO_PASS_KEY)
}

export async function setIntroPass(): Promise<void> {
  return await AsyncStore.setItem(ASYNCSTORAGE_INTRO_PASS_KEY, "true")
}

export default {
  getSessionLocale,
  getIntroPass,
  setIntroPass,
  removeIntroPass,
}
