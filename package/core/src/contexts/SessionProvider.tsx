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

export const SessionContext = createContext<SessionProps | null | undefined>(
  undefined,
);
export const SessionContextDispatch = createContext<
  Dispatch<SetStateAction<SessionProps | null | undefined>>
>(() => {});

type SessionProviderProps = {
  children: ReactNode;
};

const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  const [session, setSession] = useState<SessionProps | null | undefined>(
    undefined,
  );

  return (
    <SessionContext.Provider value={session}>
      <SessionContextDispatch.Provider value={setSession}>
        {children}
      </SessionContextDispatch.Provider>
    </SessionContext.Provider>
  );
};

export default SessionProvider;
