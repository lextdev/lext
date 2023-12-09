import { useContext } from "react";
import {
  SessionContext,
  SessionContextDispatch,
} from "../contexts/SessionProvider";
import { SessionProps } from "../interfaces";
import SessionStore from "../utils/SessionStore";

const useSession = () => {
  const session = useContext(SessionContext);
  const setSessionContext = useContext(SessionContextDispatch);

  const signIn = async (data: SessionProps) => {
    await SessionStore.setSessionLocale(data);
    await setSessionContext(data);
  };

  const signOut = async () => {
    await SessionStore.removeSessionLocale();
    await setSessionContext(null);
  };

  return { session, signIn, signOut };
};

export default useSession;
