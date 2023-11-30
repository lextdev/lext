import React from "react";
import { ImageBackground, StatusBar } from "react-native";

import Loader from "./Loader";
import BackgroundImage from "../../assets/greenPatternBackground.jpg";
import AppShell from "../../layouts/AppShell";
import Stack from "../Stack";

function LoaderScreen() {
  return (
    <ImageBackground style={{ flex: 1 }} source={BackgroundImage}>
      <AppShell>
        <StatusBar barStyle="light-content" />
        <Stack flex={1} justifyContent="center" alignItems="center">
          <Loader />
        </Stack>
      </AppShell>
    </ImageBackground>
  );
}

export default LoaderScreen;
