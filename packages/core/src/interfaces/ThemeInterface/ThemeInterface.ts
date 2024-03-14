import ThemeColorInterface from "../ThemeColorInterface/ThemeColorInterface"

interface ThemeInterface {
  colorScheme: "lighten" | "darken"
  colors: {
    darken: ThemeColorInterface
    lighten: ThemeColorInterface
  }
}

export default ThemeInterface
