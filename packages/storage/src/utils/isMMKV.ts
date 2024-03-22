import {
  AsyncStorageInterface,
  MMKVInterface,
} from "../interfaces/storage.interface"

const isMMKVProps = (
  storage: AsyncStorageInterface | MMKVInterface,
): storage is MMKVInterface => {
  return (storage as MMKVInterface).getString !== undefined
}

export default isMMKVProps
