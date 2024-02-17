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

type SheetContentProps = {
  children: ReactNode;
  isVisible: boolean;
  snaps: Array<"auto" | number>;
  onLayout?: (event: LayoutChangeEvent) => void;
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

const SheetContent = forwardRef<SheetContentRef, SheetContentProps>(
  ({ children, isVisible, snaps, onLayout }, ref) => {
    const getColor = useColor();
    const { theme } = useTheme();
    const borderRadius = theme.defaultOptions.borderRadius;
    const backgroundColor =
      theme.components.BottomSheet.default.backgroundColor;
    const [contentDefaultHeight, setContentDefaultHeight] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const dimensions = useWindowDimensions();

    const sheetContentCss = css({
      backgroundColor: getColor(backgroundColor),
      borderRadius: borderRadius,
    });

    // Shared
    const opacity = useSharedValue(0);
    const height = useSharedValue(0);

    const sheetContentAnimationCss = useAnimatedStyle(() => ({
      opacity: opacity.value,
      height: contentDefaultHeight > 0 ? `${height.value}%` : "auto",
    }));

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

      console.log("ScrollToWithOpacity", destination);
      opacity.value = 1;
      scrollTo(destination);
    }, []);

    const scrollToIndex = useCallback((index: number) => {
      "worklet";

      const snap = snaps[index];

      if (!snap) {
        return;
      }

      if (snap === "auto") {
        hardReSize();
      } else {
        scrollTo(snap);
      }
    }, []);

    const scrollTo = useCallback((destination: number) => {
      "worklet";

      console.log("ScrollTo", destination);
      height.value = withSpring(destination, {
        damping: 10,
      });
    }, []);

    const scrollToClose = useCallback(() => {
      "worklet";

      console.log("ScrollToClose");
      height.value = withSpring(1);
      opacity.value = withDelay(30, withSpring(0));
    }, []);

    const hardReSize = () => {
      setIsReady(false);
    };

    const resize = () => {
      console.log("Auto Height!", contentDefaultHeight);
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

    useEffect(() => {
      const firstSnap = snaps[0];

      if (isVisible && contentDefaultHeight > 0 && firstSnap === "auto") {
        resize();
      }
    }, [isVisible, isReady]);

    return (
      <Animated.View
        onLayout={onLayout}
        style={[defaultCss, sheetContentCss, sheetContentAnimationCss]}
      >
        <SheetLine />
        <View onLayout={onLayoutView}>{children}</View>
      </Animated.View>
    );
  }
);
export default SheetContent;
