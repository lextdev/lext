import { css } from "@emotion/native";
import React from "react";
import { ImageBackground, useWindowDimensions } from "react-native";

import BackgroundImage from "../../assets/greenPatternBackground.jpg";
import Loader from "../LoaderScreen/Loader";

function LoaderAbsolute() {
  const { height, width } = useWindowDimensions();
  const boxCSS = css({
    position: "absolute",
    height,
    width,
    zIndex: 99,
    justifyContent: "center",
    alignItems: "center",
  });

  return (
    <ImageBackground style={boxCSS} source={BackgroundImage}>
      <Loader />
    </ImageBackground>
  );
}

export default LoaderAbsolute;
