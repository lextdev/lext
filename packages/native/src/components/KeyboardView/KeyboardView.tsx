import { FC, ReactNode, useCallback, useEffect } from "react";
import { ViewProps } from "react-native";
import Animated, {
  AnimateProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { useKeyboard } from "../../hooks";

type KeyboardViewProps = AnimateProps<ViewProps> & {
  showIf?: boolean;
  children: ReactNode;
};

export const KeyboardView: FC<KeyboardViewProps> = (props) => {
  const { showIf = false, children, style, ...animatedViewProps } = props;
  const { isKeyboardOpen } = useKeyboard();
  const translateY = useSharedValue(0);

  const startAnimation = useCallback(() => {
    translateY.value = withSpring(-200);
  }, [translateY]);

  const endAnimation = () => {
    translateY.value = withSpring(0);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  useEffect(() => {
    if (isKeyboardOpen) {
      startAnimation();
    } else {
      endAnimation();
    }
  }, [isKeyboardOpen]);

  return (
    <Animated.View {...animatedViewProps} style={[style, animatedStyle]}>
      {children}
    </Animated.View>
  );
};
