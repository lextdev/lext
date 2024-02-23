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
  canTouchMove: boolean;
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

const BUFFER_HEIGHT = 75;
const CLOSE_HEIGHT_PERCENT = 15;
const SheetContent = forwardRef<SheetContentRef, SheetContentProps>(
  (
    { children, isVisible, snaps, onLayout, onClose, canTouchMove = true },
    ref
  ) => {
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

      opacity.value = withDelay(20, withSpring(1));
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
      height.value = withSpring(destination, {
        damping: 10,
      });
      opacity.value = withDelay(50, withSpring(1));
    }, []);

    const scrollToClose = useCallback(() => {
      "worklet";

      opacity.value = 0;
      height.value = withSpring(1.5);
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
          scrollTo(newHeight + 30);
        } else {
          scrollTo(previousHeight + newHeight - previousHeight - 50);
        }
      })
      .onFinalize(() => {
        const newHeight = height.value;
        const previousHeight = context.value.y;
        if (
          newHeight > previousHeight &&
          Math.abs(newHeight - previousHeight) > 2 &&
          snaps[context.value.index + 1] !== undefined
        ) {
          scrollToIndex(context.value.index + 1);
        } else if (
          newHeight < previousHeight &&
          Math.abs(previousHeight - newHeight) > 2 &&
          snaps[context.value.index - 1] !== undefined
        ) {
          scrollToIndex(context.value.index - 1);
        } else {
          const cal = Math.abs(newHeight - previousHeight);
          if (
            newHeight < previousHeight &&
            cal > CLOSE_HEIGHT_PERCENT &&
            onClose
          ) {
            onClose();
          } else {
            scrollToIndex(context.value.index);
          }
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
      <Animated.View
        onLayout={customOnLayout}
        style={[defaultCss, sheetContentCss, sheetContentAnimationCss]}
      >
        {canTouchMove && (
          <GestureDetector gesture={tapGestureHandler}>
            <SheetLine />
          </GestureDetector>
        )}
        <View onLayout={onLayoutView}>{children}</View>
      </Animated.View>
    );
  }
);
export default SheetContent;
