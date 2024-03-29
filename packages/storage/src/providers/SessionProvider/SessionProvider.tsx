import { SessionContext } from "@/contexts"
import { SessionProps } from "@/types"
import { useStorage } from "@/hooks"
import React, { FC, ReactNode, useEffect, useState } from "react"

type SessionProviderProps = {
  children: ReactNode
  storageName?: string
}

const SessionProvider: FC<SessionProviderProps> = ({
  children,
  storageName = "lextStorage",
}) => {
  const storage = useStorage()
  const [status, setStatus] = useState<"loading" | "auth" | "anonymous">(
    "loading",
  )
  const [session, setSession] = useState<SessionProps>()

  const fetchStorage = async () => {
    try {
      const session = await storage.get(storageName)
      if (session !== null) {
        setSession(JSON.parse(session))
        setStatus("auth")
      } else {
        setSession(undefined)
        setStatus("anonymous")
      }
    } catch (error) {
      console.error(error)
      setStatus("anonymous")
    }
  }

  const setStorage = async (data: SessionProps) => {
    const str = JSON.stringify(data)
    await storage.set(storageName, str)
  }

  const removeStorage = async () => {
    await storage.remove(storageName)
  }

  useEffect(() => {
    fetchStorage()
  }, [])

  return (
    <SessionContext.Provider
      value={{
        session,
        setSession,
        fetchStorage,
        storageName,
        setStorage,
        removeStorage,
        status,
        setStatus,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export default SessionProvider
