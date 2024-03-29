import { SessionContext } from "@/contexts"
import { SessionProps } from "@/types"
import { useContext } from "react"

const useSession = () => {
  const sessionContext = useContext(SessionContext)

  const signOut = async () => {
    await sessionContext.removeStorage()
    await sessionContext.setSession(undefined)
    await sessionContext.setStatus("anonymous")
  }

  const signIn = async (data: SessionProps) => {
    await sessionContext.setStorage(data)
    await sessionContext.setSession(data)
    await sessionContext.setStatus("auth")
  }

  const getID = () => {
    return sessionContext.session?.id
  }

  const getStatus = sessionContext.status

  return {
    signIn,
    signOut,
    getID,
    getStatus,
    session: sessionContext.session,
  }
}

export default useSession
