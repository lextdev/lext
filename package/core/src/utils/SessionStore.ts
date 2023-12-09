import AsyncStore from "@react-native-async-storage/async-storage";
import { SessionProps } from "../interfaces";

const ASYNCSTORAGE_SESSION_KEY = "lext_session";

async function getSessionLocale(): Promise<SessionProps | null> {
  const result = await AsyncStore.getItem(ASYNCSTORAGE_SESSION_KEY);

  if (result) {
    return JSON.parse(result) as SessionProps;
  }

  return null;
}

async function setSessionLocale(data: SessionProps) {
  await AsyncStore.setItem(ASYNCSTORAGE_SESSION_KEY, JSON.stringify(data));
}

async function removeSessionLocale() {
  await AsyncStore.removeItem(ASYNCSTORAGE_SESSION_KEY);
}

export default {
  getSessionLocale,
  setSessionLocale,
  removeSessionLocale,
};
