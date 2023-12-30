import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { SessionProps } from "../interfaces";
import SessionStore from "../utils/SessionStore";

export const SessionContext = createContext<SessionProps | null>(null);
export const SessionContextDispatch = createContext<
  Dispatch<SetStateAction<SessionProps | null>>
>(() => {});

type SessionProviderProps = {
  children: ReactNode;
};

const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  const [session, setSession] = useState<SessionProps | null>(null);

  const onHandlerSession = async () => {
    const result = await SessionStore.getSessionLocale();
    await setSession(result);
  };

  useEffect(() => {
    onHandlerSession();
  }, []);

  return (
    <SessionContext.Provider value={session}>
      <SessionContextDispatch.Provider value={setSession}>
        {children}
      </SessionContextDispatch.Provider>
    </SessionContext.Provider>
  );
};

export default SessionProvider;
