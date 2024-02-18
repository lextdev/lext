import React, {
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import SheetLine from "./SheetLine";
import View from "../View/View";
import { css } from "@emotion/native";
import { useColor, useTheme } from "../../../hooks";
import { LayoutChangeEvent, useWindowDimensions } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

type SheetContentProps = {
  children: ReactNode;
  isVisible: boolean;
  snaps: Array<"auto" | number>;
  onLayout?: (event: LayoutChangeEvent) => void;
  onClose?: () => void;
};

export type SheetContentRef = {
  scrollToClose: () => void;
  scrollToIndex: (index: number) => void;
  hardReSize: () => void;
};

const defaultCss = css({
  width: "100%",
  maxHeight: "100%",
  zIndex: 2,
  position: "absolute",
  paddingBottom: 25,
  bottom: 0,
});

const BUFFER_HEIGHT = 50;
const CLOSE_HEIGHT_PERCENT = 10;
const SheetContent = forwardRef<SheetContentRef, SheetContentProps>(
  ({ children, isVisible, snaps, onLayout, onClose }, ref) => {
    const getColor = useColor();
    const { theme } = useTheme();
    const borderRadius = theme.defaultOptions.borderRadius;
    const backgroundColor = theme.components.Sheet.default.backgroundColor;
    const [contentDefaultHeight, setContentDefaultHeight] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const [index, setIndex] = useState(0);
    const dimensions = useWindowDimensions();
    const sheetContentCss = css({
      backgroundColor: getColor(backgroundColor),
      borderRadius: borderRadius,
    });

    const context = useSharedValue({ y: 0, index: 0 });
    const opacity = useSharedValue(0);
    const height = useSharedValue(0);
    const translateY = useSharedValue(0);

    const sheetContentAnimationCss = useAnimatedStyle(() => ({
      opacity: opacity.value,
      height: contentDefaultHeight > 0 ? `${height.value}%` : "auto",
      transform: [{ translateY: translateY.value }],
    }));

    const customOnLayout = (event: LayoutChangeEvent) => {
      if (onLayout) {
        onLayout(event);
      }
    };

    const calculateAutoHeight = (height: number) =>
      Math.round(((height + BUFFER_HEIGHT) / dimensions.height) * 100);

    const onLayoutView = (event: LayoutChangeEvent) => {
      const getHeight = event.nativeEvent.layout.height;
      if (!isReady) {
        setIsReady(true);
        setContentDefaultHeight(getHeight);
      }
    };

    const scrollToWithOpacity = useCallback((destination: number) => {
      "worklet";

      opacity.value = 1;
      scrollTo(destination);
    }, []);

    const scrollToIndex = useCallback((index: number) => {
      "worklet";

      const snap = snaps[index];

      if (!snap) {
        return;
      }

      setIndex(index);
      if (snap === "auto") {
        hardReSize();
      } else {
        scrollTo(snap);
      }
    }, []);

    const scrollTo = useCallback((destination: number) => {
      "worklet";

      opacity.value = 1;
      height.value = withSpring(destination, {
        damping: 10,
      });
    }, []);

    const scrollToClose = useCallback(() => {
      "worklet";

      height.value = withSpring(1);
      opacity.value = withDelay(30, withSpring(0));
    }, []);

    const hardReSize = () => {
      setIsReady(false);
    };

    const resize = () => {
      const percentHeight = calculateAutoHeight(contentDefaultHeight);
      scrollToWithOpacity(percentHeight);
    };

    useImperativeHandle(
      ref,
      () => ({
        scrollToIndex,
        scrollToClose,
        hardReSize,
      }),
      [scrollToIndex, scrollToClose, hardReSize]
    );

    const tapGestureHandler = Gesture.Tap()
      .onBegin(event => {
        context.value = {
          y: calculateAutoHeight(Math.abs(event.absoluteY - dimensions.height)),
          index: index,
        };
      })
      .onTouchesMove(event => {
        const newHeight = calculateAutoHeight(
          Math.abs(event.allTouches[0].absoluteY - dimensions.height)
        );
        const previousHeight = context.value.y;

        if (newHeight > previousHeight) {
          height.value = newHeight;
        } else {
          height.value = previousHeight + newHeight - previousHeight;
        }
      })
      .onFinalize(() => {
        const newHeight = height.value;
        const previousHeight = context.value.y;

        if (
          newHeight > previousHeight &&
          Math.abs(newHeight - previousHeight) > 5 &&
          snaps[context.value.index + 1]
        ) {
          scrollToIndex(context.value.index + 1);
        } else if (
          newHeight < previousHeight &&
          Math.abs(newHeight - previousHeight) > 5 &&
          snaps[context.value.index - 1]
        ) {
          scrollToIndex(context.value.index - 1);
        } else if (newHeight < CLOSE_HEIGHT_PERCENT) {
          if (onClose) onClose();
        } else {
          scrollToIndex(context.value.index);
        }
      });

    useEffect(() => {
      const firstSnap = snaps[0];
      if (isVisible && contentDefaultHeight > 0 && firstSnap === "auto") {
        setIndex(0);
        resize();
      }

      if (isVisible && firstSnap !== "auto") {
        scrollTo(firstSnap);
      }
    }, [isVisible, isReady]);

    return (
      <GestureDetector gesture={tapGestureHandler}>
        <Animated.View
          onLayout={customOnLayout}
          style={[defaultCss, sheetContentCss, sheetContentAnimationCss]}
        >
          <SheetLine />
          <View onLayout={onLayoutView}>{children}</View>
        </Animated.View>
      </GestureDetector>
    );
  }
);
export default SheetContent;
