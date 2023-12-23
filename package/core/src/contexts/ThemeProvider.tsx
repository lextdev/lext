import { ThemeProvider as RThemeProvider, Theme } from "@emotion/react";
import React, { FC, ReactNode } from "react";
import ColorSchemeProvider from "./ColorSchemeProvider";
import { LayoutChangeEvent, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type ThemeProviderProps = {
  children: ReactNode;
  theme: Theme;
  onLayout?: (event: LayoutChangeEvent) => void;
  gestureHandlerRootView: boolean;
};

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme,
  onLayout,
  gestureHandlerRootView = false,
}) => {
  const themeProviderContent = (
    <RThemeProvider theme={theme}>
      <ColorSchemeProvider themeColorScheme={theme.colorScheme}>
        <View style={{ flex: 1 }} onLayout={onLayout}>
          {children}
        </View>
      </ColorSchemeProvider>
    </RThemeProvider>
  );

  if (!gestureHandlerRootView) {
    return themeProviderContent;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {themeProviderContent}
    </GestureHandlerRootView>
  );
};

export default ThemeProvider;
