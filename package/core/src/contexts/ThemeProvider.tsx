import { ThemeProvider as RThemeProvider, Theme } from "@emotion/react";
import React, { FC, ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
  theme: Theme;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme }) => {
  return <RThemeProvider children={children} theme={theme} />;
};

export default ThemeProvider;
