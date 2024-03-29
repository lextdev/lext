type SessionProps =
  | {
      id: number | string
      jwt: string
      [key: string]: string | number
    }
  | undefined

export default SessionProps
