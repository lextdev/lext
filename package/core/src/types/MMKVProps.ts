type MMKVType = {
  set: (key: string, value: boolean | string | number | Uint8Array) => void;

  getString: (key: string) => string | undefined;

  delete: (key: string) => void;
};

export default MMKVType;
