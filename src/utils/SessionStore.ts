/**
 * @deprecated
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
import { SessionProps } from "../interfaces";

const ASYNCSTORAGE_SESSION_KEY = "lext_session";

export default async function (): Promise<SessionProps | null> {
  const result = await AsyncStorage.getItem(ASYNCSTORAGE_SESSION_KEY);
  const typeResult = typeof result !== null && typeof result === "string";

  const convert = (result: string): SessionProps =>
    JSON.parse(result) as SessionProps;

  return typeResult ? convert(result) : null;
}
