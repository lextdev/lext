import { SessionProps } from "../interfaces";
declare function getSessionLocale(): Promise<SessionProps | null>;
declare function setSessionLocale(data: SessionProps): Promise<void>;
declare function removeSessionLocale(): Promise<void>;
declare const _default: {
    getSessionLocale: typeof getSessionLocale;
    setSessionLocale: typeof setSessionLocale;
    removeSessionLocale: typeof removeSessionLocale;
};
export default _default;
