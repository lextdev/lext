import React, { FC, ReactNode } from "react";
import { SessionProps } from "../interfaces";
export declare const SessionContext: React.Context<SessionProps | null>;
export declare const SessionContextDispatch: React.Context<React.Dispatch<React.SetStateAction<SessionProps | null>>>;
type SessionProviderProps = {
    children: ReactNode;
};
declare const SessionProvider: FC<SessionProviderProps>;
export default SessionProvider;
