export interface ThemeMainColorInterface {
  background: string
  primary: string
  secondary: string
  muted: string
}

export interface ThemeTextColorInterface {
  global: string
  emphasis: string
  inverse: string
}

export interface ThemeColorInterface {
  main: ThemeMainColorInterface
  text: ThemeTextColorInterface
}
