import { ThemeProvider as RThemeProvider, Theme } from "@emotion/react";
import React, { FC, ReactNode } from "react";
import ColorSchemeProvider from "./ColorSchemeProvider";
import { LayoutChangeEvent, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type ThemeProviderProps = {
  children: ReactNode;
  theme: Theme;
  onLayout?: (event: LayoutChangeEvent) => void;
};

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme,
  onLayout,
}) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RThemeProvider theme={theme}>
        <ColorSchemeProvider themeColorScheme={theme.colorScheme}>
          <View style={{ flex: 1 }} onLayout={onLayout}>
            {children}
          </View>
        </ColorSchemeProvider>
      </RThemeProvider>
    </GestureHandlerRootView>
  );
};

export default ThemeProvider;
