import { ThemeProvider as RThemeProvider, Theme } from "@emotion/react";
import React, { FC, ReactNode } from "react";
import ColorSchemeProvider from "./ColorSchemeProvider";

type ThemeProviderProps = {
  children: ReactNode;
  theme: Theme;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme }) => {
  console.log("State ThemeProvider", theme.colorScheme);
  return (
    <RThemeProvider theme={theme}>
      <ColorSchemeProvider themeColorScheme={theme.colorScheme}>
        {children}
      </ColorSchemeProvider>
    </RThemeProvider>
  );
};

export default ThemeProvider;
