import { SessionProps } from "../interfaces";
declare const useSession: () => {
    session: SessionProps | null;
    signIn: (data: SessionProps) => Promise<void>;
    signOut: () => Promise<void>;
};
export default useSession;
