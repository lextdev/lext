import React from "react";
import { Theme, ThemeProvider } from "@react-navigation/native";
import { FC, ReactNode } from "react";
import { useColor, useTheme } from "../hooks";

const ReactNavigationProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { colorScheme } = useTheme();
  const getColor = useColor();

  const value: Theme = {
    dark: colorScheme === "darken",
    colors: {
      background: getColor("background"),
      border: getColor("muted"),
      card: getColor("muted"),
      notification: getColor("secondary"),
      primary: getColor("primary"),
      text: getColor("global"),
    },
  };

  return <ThemeProvider value={value}>{children}</ThemeProvider>;
};

export default ReactNavigationProvider;
