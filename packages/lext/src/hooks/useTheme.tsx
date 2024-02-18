import { useContext } from "react";
import {
  ColorSchemeContext,
  ColorSchemeContextDispatch,
} from "../contexts/ColorSchemeProvider";
import { useTheme as EUseTheme } from "@emotion/react";
import { ThemeInterface } from "../interfaces";
import useStore from "./useStore";

export const COLOR_SCHEME_KEY = "lext_color";

const useTheme = () => {
  const colorScheme = useContext(ColorSchemeContext);
  const setColorSchemeState = useContext(ColorSchemeContextDispatch);
  const { setItem } = useStore();
  const theme = EUseTheme() as ThemeInterface;

  const setColorScheme = async (colorScheme: "lighten" | "darken") => {
    await setItem(COLOR_SCHEME_KEY, colorScheme);
    setColorSchemeState(colorScheme);
  };

  return {
    colorScheme,
    setColorScheme,
    theme,
  };
};

export default useTheme;
