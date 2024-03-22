import { Callback, CallbackWithResult } from "@/types/storage.type"

export interface AsyncStorageInterface {
  getItem: (
    key: string,
    callback?: CallbackWithResult<string>,
  ) => Promise<string | null>
  setItem: (key: string, value: string, callback?: Callback) => Promise<void>
  removeItem: (key: string, callback?: Callback) => Promise<void>
}

export interface MMKVInterface {
  set: (key: string, value: boolean | string | number | Uint8Array) => void
  getString: (key: string) => string | undefined
  delete: (key: string) => void
}
