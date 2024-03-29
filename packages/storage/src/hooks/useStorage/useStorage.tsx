import { StorageClient } from "@/libs"
import { StorageContext } from "@/contexts"
import { useContext } from "react"

const useStorage = (): StorageClient => {
  const storage = useContext(StorageContext)

  return storage
}

export default useStorage
