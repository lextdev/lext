import { Dispatch, SetStateAction, createContext } from "react"
import { SessionProps } from "@/types"

type SessionContextProps = {
  status: "loading" | "auth" | "anonymous"
  setStatus: Dispatch<SetStateAction<"loading" | "auth" | "anonymous">>
  storageName: string
  session: SessionProps
  setSession: Dispatch<SetStateAction<SessionProps>>
  fetchStorage: () => Promise<void>
  setStorage: (data: SessionProps) => Promise<void>
  removeStorage: () => Promise<void>
}

const SessionContext = createContext<SessionContextProps>({
  status: "loading",
  setStatus: () => {},
  storageName: "lextStorage",
  session: undefined,
  setSession: () => {},
  fetchStorage: async () => {},
  setStorage: async () => {},
  removeStorage: async () => {},
})

export default SessionContext
