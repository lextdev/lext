import { StorageClient } from "@/libs"
import React, { FC, ReactNode } from "react"
import StorageContext from "@/contexts/StorageContext/StorageContext"

type StorageProviderProps = { children: ReactNode; storage: StorageClient }

const StorageProvider: FC<StorageProviderProps> = ({ children, storage }) => {
  return (
    <StorageContext.Provider value={storage}>
      {children}
    </StorageContext.Provider>
  )
}

export default StorageProvider
