import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { ColorSchemeProps } from "../types";
import { StatusBar } from "react-native";

export const ColorSchemeContext = createContext<ColorSchemeProps>("lighten");
export const ColorSchemeContextDispatch = createContext<
  Dispatch<SetStateAction<ColorSchemeProps>>
>(() => {});

const ColorSchemeProvider: FC<{
  children: ReactNode;
  themeColorScheme?: ColorSchemeProps;
}> = ({ children, themeColorScheme }) => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeProps>("lighten");

  useEffect(() => {
    if (themeColorScheme) {
      setColorScheme(themeColorScheme);
    }
  }, []);

  const barStyle = colorScheme === "darken" ? "dark-content" : "light-content";

  return (
    <ColorSchemeContext.Provider value={colorScheme}>
      <ColorSchemeContextDispatch.Provider value={setColorScheme}>
        <StatusBar barStyle={barStyle} />
        {children}
      </ColorSchemeContextDispatch.Provider>
    </ColorSchemeContext.Provider>
  );
};

export default ColorSchemeProvider;
