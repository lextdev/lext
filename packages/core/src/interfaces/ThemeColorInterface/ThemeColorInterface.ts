interface ThemeColorInterface {
  main: {
    background: string
    primary: string
    secondary: string
    muted: string
  }
  text: {
    global: string
    emphasis: string
    inverse: string
  }
  custom?: Record<string, string>
}

export default ThemeColorInterface
