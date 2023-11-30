import { useContext } from "react"

import { SessionContext, SessionContextDispatch } from "../../contexts/SessionProvider"
import { AsyncSessionProps } from "../../types/Session"
import { removeSessionLocale, setSessionLocale } from "../../utils/Store"

const useSession = () => {
  const session = useContext(SessionContext)
  const setSessionContext = useContext(SessionContextDispatch)

  const signIn = async (data: AsyncSessionProps) => {
    await setSessionLocale(data)
    await setSessionContext(data)
  }

  const signOut = async () => {
    await removeSessionLocale()
    await setSessionContext(null)
  }

  return { session, signIn, signOut }
}

export default useSession
