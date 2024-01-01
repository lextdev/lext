type CallbackWithResult<T> = (error?: Error | null, result?: T | null) => void;
type Callback = (error?: Error | null) => void;

type AsyncStorageType = {
  getItem: (
    key: string,
    callback?: CallbackWithResult<string>,
  ) => Promise<string | null>;

  setItem: (key: string, value: string, callback?: Callback) => Promise<void>;

  removeItem: (key: string, callback?: Callback) => Promise<void>;
};

export default AsyncStorageType;
