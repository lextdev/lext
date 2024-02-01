import "react-native-gesture-handler";
import {
  LoadingOverlayProvider,
  SessionProvider,
  Text,
  ThemeProvider,
  createTheme,
} from "@ynssenem/lext";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";

import Index from "./src";

const theme = createTheme({
  colorScheme: "lighten",
  colors: {
    lighten: {
      background: "#FFF",
    },
  },
  components: {
    BottomSheet: {
      default: {
        backgroundColor: "muted",
        lineColor: "secondary",
      },
    },
  },
});

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Urbanist-Black": require("./src/fonts/Urbanist-Black.otf"),
    "Urbanist-Regular": require("./src/fonts/Urbanist-Regular.otf"),
    "Urbanist-Thin": require("./src/fonts/Urbanist-Thin.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider
      theme={theme}
      gestureHandlerRootView
      reactNavigationProvider
      onLayout={onLayoutRootView}
    >
      <SessionProvider>
        <LoadingOverlayProvider
          content={<Text color="danger">Starting Animation</Text>}
        >
          <Index />
        </LoadingOverlayProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
