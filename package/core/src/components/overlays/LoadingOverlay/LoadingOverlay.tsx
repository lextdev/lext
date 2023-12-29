import React, { FC, ReactNode } from "react";
import StyledLoadingOverlay from "./Styled";
import { LoadingOverlayProps } from "./DefaultProps";
import { StyleProp, ViewStyle } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

const LoadingOverlay: FC<
  LoadingOverlayProps & { children: ReactNode; style?: StyleProp<ViewStyle> }
> = (props) => {
  const { children, style, ...loadingOverlayProps } = props;

  return (
    <Animated.View entering={FadeIn} style={style}>
      <StyledLoadingOverlay {...loadingOverlayProps}>
        {children}
      </StyledLoadingOverlay>
    </Animated.View>
  );
};

export default LoadingOverlay;
