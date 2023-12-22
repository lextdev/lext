import { Dimensions, StyleSheet, View } from "react-native";
import React, { useCallback, useImperativeHandle } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { BottomSheetRefProps, useColor, useTheme } from "../../..";
import { css } from "@emotion/native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

type BottomSheetProps = {
  children?: React.ReactNode;
};

const BottomSheet = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(
  ({ children }, ref) => {
    const { theme } = useTheme();
    const getColor = useColor();
    const translateY = useSharedValue(0);
    const active = useSharedValue(false);

    const bottomSheetContainerCss = css({
      height: SCREEN_HEIGHT,
      width: "100%",
      backgroundColor: getColor("background"),
      position: "absolute",
      top: SCREEN_HEIGHT,
      borderRadius: theme.defaultOptions.borderRadius,
    });

    const lineCss = css({
      width: 75,
      height: 4,
      backgroundColor: getColor("muted"),
      alignSelf: "center",
      marginVertical: 15,
      borderRadius: theme.defaultOptions.borderRadius / 2,
    });

    const scrollTo = useCallback((destination: number) => {
      "worklet";
      active.value = destination !== 0;

      translateY.value = withSpring(destination, {
        damping: destination !== 0 ? 12 : 25,
      });
    }, []);

    const isActive = useCallback(() => {
      return active.value;
    }, []);

    useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
      scrollTo,
      isActive,
    ]);

    const context = useSharedValue({ y: 0 });
    const gesture = Gesture.Pan()
      .onStart(() => {
        context.value = { y: translateY.value };
      })
      .onUpdate((event) => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
      })
      .onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 3) {
          scrollTo(0);
        } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
          scrollTo(MAX_TRANSLATE_Y);
        }
      });

    const rBottomSheetStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
        [25, 5],
        Extrapolate.CLAMP
      );

      return {
        borderRadius,
        transform: [{ translateY: translateY.value }],
      };
    });

    const rBackdropStyle = useAnimatedStyle(() => {
      return {
        opacity: withSpring(active.value ? 1 : 0),
      };
    }, []);

    const rBackdropProps = useAnimatedProps(() => {
      return {
        pointerEvents: active.value ? "auto" : "none",
      } as any;
    }, []);

    return (
      <>
        <Animated.View
          onTouchStart={() => {
            scrollTo(0);
          }}
          animatedProps={rBackdropProps}
          style={[
            {
              ...StyleSheet.absoluteFillObject,
              backgroundColor: "rgba(0,0,0,0.4)",
            },
            rBackdropStyle,
          ]}
        />
        <GestureDetector gesture={gesture}>
          <Animated.View style={[bottomSheetContainerCss, rBottomSheetStyle]}>
            <View style={lineCss} />
            {children}
          </Animated.View>
        </GestureDetector>
      </>
    );
  }
);

export default BottomSheet;
