import AsyncStorage from "@react-native-async-storage/async-storage";
import { SessionProps } from "../interfaces";

const ASYNCSTORAGE_SESSION_KEY = "lext_session";

async function getSessionLocale(): Promise<SessionProps | null> {
  const result = await AsyncStorage.getItem(ASYNCSTORAGE_SESSION_KEY);

  if (result) {
    return JSON.parse(result) as SessionProps;
  }

  return null;
}

async function setSessionLocale(data: SessionProps) {
  await AsyncStorage.setItem(ASYNCSTORAGE_SESSION_KEY, JSON.stringify(data));
}

async function removeSessionLocale() {
  await AsyncStorage.removeItem(ASYNCSTORAGE_SESSION_KEY);
}

export default {
  getSessionLocale,
  setSessionLocale,
  removeSessionLocale,
};
