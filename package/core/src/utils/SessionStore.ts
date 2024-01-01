import { SessionProps } from "../interfaces";
import { AsyncStorageProps, MMKVProps } from "../types";
import isMMKVProps from "./isMMKVProps";

const ASYNCSTORAGE_SESSION_KEY = "lext_session";

interface StorageInterface {
  storage: AsyncStorageProps | MMKVProps;
}

async function getSessionLocale(
  storageParams: StorageInterface,
): Promise<SessionProps | null> {
  let result;

  switch (true) {
    case isMMKVProps(storageParams.storage):
      result = await storageParams.storage.getString(ASYNCSTORAGE_SESSION_KEY);
      break;
    case !isMMKVProps(storageParams.storage):
      result = await storageParams.storage.getItem(ASYNCSTORAGE_SESSION_KEY);
      break;

    default:
      result = await storageParams.storage.getItem(ASYNCSTORAGE_SESSION_KEY);
      break;
  }

  if (result) {
    return JSON.parse(result) as SessionProps;
  }

  return null;
}

async function setSessionLocale(
  data: SessionProps,
  storageParams: StorageInterface,
) {
  switch (true) {
    case isMMKVProps(storageParams.storage):
      await storageParams.storage.set(
        ASYNCSTORAGE_SESSION_KEY,
        JSON.stringify(data),
      );
      break;
    case !isMMKVProps(storageParams.storage):
      await storageParams.storage.setItem(
        ASYNCSTORAGE_SESSION_KEY,
        JSON.stringify(data),
      );
      break;

    default:
      await storageParams.storage.setItem(
        ASYNCSTORAGE_SESSION_KEY,
        JSON.stringify(data),
      );
      break;
  }
}

async function removeSessionLocale(storageParams: StorageInterface) {
  switch (true) {
    case isMMKVProps(storageParams.storage):
      await storageParams.storage.delete(ASYNCSTORAGE_SESSION_KEY);
      break;
    case !isMMKVProps(storageParams.storage):
      await storageParams.storage.removeItem(ASYNCSTORAGE_SESSION_KEY);
      break;

    default:
      await storageParams.storage.removeItem(ASYNCSTORAGE_SESSION_KEY);
      break;
  }
}

export default {
  getSessionLocale,
  setSessionLocale,
  removeSessionLocale,
};
