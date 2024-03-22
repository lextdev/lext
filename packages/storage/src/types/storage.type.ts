export type CallbackWithResult<T> = (
  error?: Error | null,
  result?: T | null,
) => void
export type Callback = (error?: Error | null) => void
