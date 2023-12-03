import {
  ThemeProvider as RThemeProvider,
  ColorsProps,
  Theme,
} from "@emotion/react";
import React, { FC, ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
  theme: Theme;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme }) => {
  const getPrimaryColorKey = theme.primaryColor;
  const getPrimaryColor = theme.colors[getPrimaryColorKey];
  const colors: ColorsProps = { ...theme.colors, primary: getPrimaryColor };

  const overrideTheme = { ...theme, colors };
  return <RThemeProvider children={children} theme={overrideTheme} />;
};

export default ThemeProvider;
