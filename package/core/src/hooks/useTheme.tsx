import { useContext } from "react";
import {
  ColorSchemeContext,
  ColorSchemeContextDispatch,
} from "../contexts/ColorSchemeProvider";
import { useTheme as EUseTheme } from "@emotion/react";

const useTheme = () => {
  const colorScheme = useContext(ColorSchemeContext);
  const setColorScheme = useContext(ColorSchemeContextDispatch);
  const theme = EUseTheme();

  return {
    colorScheme,
    setColorScheme,
    theme,
  };
};

export default useTheme;
