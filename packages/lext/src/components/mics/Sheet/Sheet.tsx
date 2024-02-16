import React, { FC, ReactNode, useCallback, useEffect, useState } from "react";
import {
  LayoutChangeEvent,
  Modal,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { HexToRGBA } from "../../../helpers";
import { useColor, useTheme } from "../../../hooks";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { css } from "@emotion/native";
import View from "../View/View";

type SheetProps = {
  visible: boolean;
  onPressable?: () => void;
  children: ReactNode;
  toIndex?: number;
  snaps: Array<
    | "fit"
    | 10
    | 15
    | 20
    | 25
    | 30
    | 35
    | 40
    | 45
    | 50
    | 55
    | 60
    | 65
    | 70
    | 75
    | 80
    | 85
    | 90
  >;
};

const BUFFER_HEIGHT = 50;

const Sheet: FC<SheetProps> = props => {
  const getColor = useColor();
  const { theme } = useTheme();
  const dimension = useWindowDimensions();
  const height = useSharedValue<number>(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    console.log("height view", height);
  };

  const lineCss = css({
    width: 75,
    height: 4,
    backgroundColor: getColor(theme.components.BottomSheet.default.lineColor),
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: theme.defaultOptions.borderRadius / 2,
  });

  const sheetContainerCss = css({
    position: "absolute",
    zIndex: 1,
    bottom: 0,
    width: "100%",
    maxHeight: dimension.height - BUFFER_HEIGHT,
    backgroundColor: getColor(
      theme.components.BottomSheet.default.backgroundColor
    ),
  });

  const sheetHeightCss = useAnimatedStyle(() => {
    return {
      height: `${height.value}%`,
    };
  });

  const onChangeHeight = useCallback((value: number) => {
    "worklet";

    height.value = withSpring(value, {
      damping: 12,
    });
  }, []);

  const onTouchPressable = async () => {
    onChangeHeight(50);
    if (props.onPressable) {
      //props.onPressable();
    }
  };

  useEffect(() => {
    console.log("height on", height.value);
  }, [height.value]);

  useEffect(() => {
    if (props.visible) {
      onChangeHeight(-1);
    } else {
      onChangeHeight(0);
    }
  }, [props.visible]);

  return (
    <Modal visible={props.visible} animationType="fade" transparent>
      <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        onTouchStart={onTouchPressable}
        style={{
          zIndex: 0,
          flex: 1,
          backgroundColor: HexToRGBA(getColor("secondary"), 0.5),
          ...StyleSheet.absoluteFillObject,
        }}
      />
      <PanGestureHandler>
        <Animated.View style={[sheetContainerCss, sheetHeightCss]}>
          <View style={lineCss} />
          <View onLayout={onLayout}>{props.children}</View>
        </Animated.View>
      </PanGestureHandler>
    </Modal>
  );
};

export default Sheet;
