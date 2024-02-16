import { useContext, useEffect, useState } from "react";
import {
  SessionContext,
  SessionContextDispatch,
} from "../contexts/SessionProvider";
import { SessionProps } from "../interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useSession = () => {
  const ASYNCSTORAGE_SESSION_KEY = "lext_session";
  const [isLoading, setLoading] = useState(true);

  const session = useContext(SessionContext);
  const setSessionContext = useContext(SessionContextDispatch);

  const signIn = async (data: SessionProps) => {
    await AsyncStorage.setItem(ASYNCSTORAGE_SESSION_KEY, JSON.stringify(data));
    setSessionContext(data);
  };

  const signOut = async () => {
    await AsyncStorage.removeItem(ASYNCSTORAGE_SESSION_KEY);
    setSessionContext(undefined);
  };

  useEffect(() => {
    async function loadSession() {
      const result = await AsyncStorage.getItem(ASYNCSTORAGE_SESSION_KEY);
      if (result) {
        setSessionContext(JSON.parse(result));
      }
      setLoading(false);
    }

    loadSession();
  }, []);

  return { session, signIn, signOut, sessionLoading: isLoading };
};

export default useSession;
