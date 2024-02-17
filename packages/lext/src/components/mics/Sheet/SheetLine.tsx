import React from "react";
import { css } from "@emotion/native";
import Animated from "react-native-reanimated";
import { useColor, useTheme } from "../../../hooks";

const SheetLine = () => {
  const getColor = useColor();
  const { theme } = useTheme();
  const lineCss = css({
    width: 75,
    height: 4,
    backgroundColor: getColor(theme.components.BottomSheet.default.lineColor),
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: theme.defaultOptions.borderRadius / 2,
  });

  return <Animated.View style={lineCss} />;
};

export default SheetLine;
