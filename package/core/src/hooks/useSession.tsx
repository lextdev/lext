import { useContext } from "react";
import {
  SessionContext,
  SessionContextDispatch,
} from "../contexts/SessionProvider";
import { SessionProps } from "../interfaces";
import SessionStore from "../utils/SessionStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useSession = () => {
  const session = useContext(SessionContext);
  const setSessionContext = useContext(SessionContextDispatch);

  const signIn = (data: SessionProps) => {
    // await SessionStore.setSessionLocale(data, storage, storageType);
    setSessionContext(data);
  };

  const signOut = () => {
    // await SessionStore.removeSessionLocale(storage, storageType);
    setSessionContext(null);
  };

  return { session, signIn, signOut };
};

export default useSession;
