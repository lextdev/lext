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
    backgroundColor: getColor(theme.components.Sheet.default.lineColor),
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: theme.defaultOptions.borderRadius / 2,
  });

  return (
    <Animated.View
      style={{
        borderRadius: theme.defaultOptions.borderRadius / 2,
        width: "100%",
        height: 40,
        justifyContent: "center",
      }}
    >
      <Animated.View style={lineCss} />
    </Animated.View>
  );
};

export default SheetLine;
