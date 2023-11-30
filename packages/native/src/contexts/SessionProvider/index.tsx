import { Dispatch, FC, ReactNode, SetStateAction, createContext, useEffect, useState } from "react"

import { AsyncSessionProps } from "../../types/Session"
import { getSessionLocale } from "../../utils/Store"

export const SessionContext = createContext<AsyncSessionProps | null>(null)
export const SessionContextDispatch = createContext<
  Dispatch<SetStateAction<AsyncSessionProps | null>>
>(() => {})

type SessionProviderProps = {
  children: ReactNode
}

const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  const [session, setSession] = useState<AsyncSessionProps | null>(null)

  const onHandlerSession = async () => {
    const result = await getSessionLocale()
    await setSession(result)
  }

  useEffect(() => {
    onHandlerSession()
  })

  return (
    <SessionContext.Provider value={session}>
      <SessionContextDispatch.Provider value={setSession}>
        {children}
      </SessionContextDispatch.Provider>
    </SessionContext.Provider>
  )
}

export default SessionProvider
