import { Dimensions, StyleSheet } from "react-native";
import React, {
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { css } from "@emotion/native";
import { useColor, useTheme } from "../../../hooks";
import Animated, {
  FadeIn,
  FadeOut,
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { BottomSheetRefProps } from "../../../types";
import { HexToRGBA } from "../../../helpers";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

function getSnapSize(value: number) {
  const currentValue = SCREEN_HEIGHT * (value / 100);
  return -currentValue;
}

type BottomSheetProps = {
  children: ReactNode;
  snaps: number[];
};

const BottomSheet = forwardRef<BottomSheetRefProps, BottomSheetProps>(
  ({ children, snaps }, ref) => {
    const getColor = useColor();
    const { theme } = useTheme();
    const [snapSizes, setSnapSizes] = useState<number[]>([]);

    // Shared
    const context = useSharedValue({ y: 0, index: 0 });
    const translateY = useSharedValue(0);
    const viewHeight = useSharedValue(0);
    const index = useSharedValue<number>(0);
    // Shared

    const bottomSheetContainerCss = css({
      height: SCREEN_HEIGHT + 100,
      width: "100%",
      backgroundColor: getColor(
        theme.components.BottomSheet.default.backgroundColor,
      ),
      position: "absolute",
      top: SCREEN_HEIGHT,
      borderRadius: theme.defaultOptions.borderRadius,
      zIndex: 999,
    });

    const lineCss = css({
      width: 75,
      height: 4,
      backgroundColor: getColor(theme.components.BottomSheet.default.lineColor),
      alignSelf: "center",
      marginVertical: 15,
      borderRadius: theme.defaultOptions.borderRadius / 2,
    });

    const rBottomSheetStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: translateY.value }],
      };
    });

    const rViewHeightStyle = useAnimatedStyle(() => {
      return {
        height: viewHeight.value,
      };
    });

    const presabbleStyle = useAnimatedStyle(() => {
      return {
        display: index.value !== 0 ? "flex" : "none",
      };
    });

    const scrollTo = useCallback((destination: number) => {
      "worklet";

      viewHeight.value = withSpring(Math.round(Math.abs(destination) - 75), {
        damping: 12,
      });
      translateY.value = withSpring(destination, {
        damping: 12,
      });
    }, []);

    const snapToIndex = useCallback(
      (toIndex: number) => {
        "worklet";

        index.value = toIndex;
        scrollTo(snapSizes[toIndex]);
      },
      [snapSizes],
    );

    const snapToClose = useCallback(() => {
      "worklet";

      index.value = 0;
      scrollTo(0);
    }, []);

    const onHandlerEnd = useCallback(
      (
        context: SharedValue<{
          y: number;
          index: number;
        }>,
        nextY: number,
      ) => {
        "worklet";

        const prevIndex = context.value.index;
        const prevY = context.value.y;

        if (-50 + prevY > nextY && snapSizes[context.value.index + 1]) {
          const nextSnapIndex = context.value.index + 1;
          snapToIndex(nextSnapIndex);
        } else if (prevY + -50 < nextY && snapSizes[context.value.index - 1]) {
          const nextSnapIndex = context.value.index - 1;
          snapToIndex(nextSnapIndex);
        } else {
          snapToIndex(prevIndex);
        }
      },
      [snapSizes],
    );

    const onPanGestureEvent = useAnimatedGestureHandler({
      onStart() {
        context.value = { y: translateY.value, index: index.value };
      },
      onActive(event) {
        translateY.value = event.translationY + context.value.y;
      },
      onEnd() {
        if (translateY.value >= -125) {
          snapToIndex(0);
        } else {
          onHandlerEnd(context, translateY.value);
        }
      },
    });

    useImperativeHandle(
      ref,
      () => ({
        snapToIndex,
        snapToClose,
      }),
      [snapToIndex, snapToClose],
    );

    useEffect(() => {
      if (!snapSizes.length && snaps) {
        const value = snaps.map((snap) => getSnapSize(snap));
        value.unshift(0);
        setSnapSizes(value);
      }
    }, []);

    return (
      <>
        <Animated.View
          onTouchStart={() => {
            snapToIndex(0);
          }}
          entering={FadeIn}
          exiting={FadeOut}
          style={[
            presabbleStyle,
            {
              ...StyleSheet.absoluteFillObject,
              backgroundColor: HexToRGBA(
                getColor(
                  theme.components.BottomSheet.default.pressableBackgroundColor,
                ),
                theme.components.BottomSheet.default.pressableBackgroundOpacity,
              ),
              zIndex: 998,
            },
          ]}
        />
        <PanGestureHandler onGestureEvent={onPanGestureEvent}>
          <Animated.View style={[bottomSheetContainerCss, rBottomSheetStyle]}>
            <Animated.View style={lineCss} />
            <Animated.View style={[rViewHeightStyle]}>{children}</Animated.View>
          </Animated.View>
        </PanGestureHandler>
      </>
    );
  },
);

export default BottomSheet;
