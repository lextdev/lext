import { useContext } from "react";
import {
  ColorSchemeContext,
  ColorSchemeContextDispatch,
} from "../contexts/ColorSchemeProvider";
import { useTheme as EUseTheme } from "@emotion/react";
import { ThemeInterface } from "../interfaces";

const useTheme = () => {
  const colorScheme = useContext(ColorSchemeContext);
  const setColorScheme = useContext(ColorSchemeContextDispatch);
  const theme = EUseTheme() as ThemeInterface;

  return {
    colorScheme,
    setColorScheme,
    theme,
  };
};

export default useTheme;
