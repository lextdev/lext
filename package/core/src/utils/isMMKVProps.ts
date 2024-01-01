import { AsyncStorageProps, MMKVProps } from "../types";

function isMMKVProps(
  storage: AsyncStorageProps | MMKVProps,
): storage is MMKVProps {
  return (storage as MMKVProps).getString !== undefined;
}

export default isMMKVProps;
