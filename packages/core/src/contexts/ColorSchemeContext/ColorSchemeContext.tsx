import { Dispatch, SetStateAction, createContext } from "react"
import { ThemeColorScheme } from "@/interfaces"

type ColorSchemeContextProps = {
  colorScheme: ThemeColorScheme
  setColorScheme: Dispatch<SetStateAction<ThemeColorScheme>>
}

const ColorSchemeContext = createContext<ColorSchemeContextProps>({
  colorScheme: "lighten",
  setColorScheme: () => {},
})

export default ColorSchemeContext