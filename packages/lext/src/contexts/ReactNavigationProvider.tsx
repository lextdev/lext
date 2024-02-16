import React from "react";
import { Theme, ThemeProvider } from "@react-navigation/native";
import { FC, ReactNode } from "react";
import { useColor, useTheme } from "../hooks";

const ReactNavigationProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { colorScheme, theme } = useTheme();
  const getColor = useColor();

  const value: Theme = {
    dark: colorScheme === "darken",
    colors: {
      background: getColor(theme.components.Navigation.default.background),
      border: getColor(theme.components.Navigation.default.border),
      card: getColor(theme.components.Navigation.default.card),
      notification: getColor(theme.components.Navigation.default.notification),
      primary: getColor(theme.components.Navigation.default.primary),
      text: getColor(theme.components.Navigation.default.text),
    },
  };

  return <ThemeProvider value={value}>{children}</ThemeProvider>;
};

export default ReactNavigationProvider;
