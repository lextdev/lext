import { css } from "@emotion/native";
import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { TouchableOpacity, View, Animated, DimensionValue } from "react-native";

type RenderItemPositionProps =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight";

function getPosition(
  renderItemOffset: DimensionValue,
  renderItemPosition: RenderItemPositionProps
) {
  switch (renderItemPosition) {
    case "bottomLeft":
      return css({
        marginTop: renderItemOffset,
        top: "50%",
        left: 0,
      });

    case "bottomRight":
      return css({
        marginTop: renderItemOffset,
        top: "50%",
        right: 0,
      });

    case "topCenter":
      return css({
        marginBottom: renderItemOffset,
        bottom: "50%",
        left: "50%",
        transform: [{ translateX: -40 }],
      });

    case "topLeft":
      return css({
        marginBottom: renderItemOffset,
        bottom: "50%",
        left: 0,
      });

    case "topRight":
      return css({
        marginBottom: renderItemOffset,
        bottom: "50%",
        right: 0,
      });

    default:
      return css({
        marginTop: renderItemOffset,
        top: "50%",
        left: "50%",
        transform: [{ translateX: -40 }],
      });
  }
}

type MenuProps = {
  children: ReactNode;
  renderItem: ReactNode;
  renderItemOffset?: DimensionValue;
  width?: DimensionValue;
  renderItemPosition?: RenderItemPositionProps;
  animatedDuration?: number;
  visible: boolean;
  onVisible: () => void;
};

const Menu: FC<MenuProps> = ({
  children,
  animatedDuration = 250,
  renderItem,
  renderItemPosition = "bottomCenter",
  renderItemOffset = 20,
  width,
  visible,
  onVisible,
}) => {
  const [getDisplay, setDisplay] = useState<"none" | undefined>(undefined);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const viewCss = css({
    position: "relative",
    alignItems: "baseline",
    width,
  });

  const menuCss = css({
    position: "absolute",
    zIndex: 99,
  });

  const positionCss = getPosition(renderItemOffset, renderItemPosition);

  const onHandlerAnimated = () => {
    if (visible) {
      fadeAnimIn();
    } else {
      fadeAnimOut();
    }
  };

  const onHandlerButton = () => {
    if (onVisible) {
      onVisible();
    }
  };

  const fadeAnimIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: animatedDuration,
      useNativeDriver: true,
    }).start();
  };

  const fadeAnimOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: animatedDuration,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    onHandlerAnimated();

    fadeAnim.addListener(({ value }) => {
      if (value === 0) {
        setDisplay("none");
      } else {
        setDisplay(undefined);
      }
    });
  }, [visible]);

  return (
    <View style={viewCss}>
      <TouchableOpacity onPress={onHandlerButton}>{children}</TouchableOpacity>
      <Animated.View
        style={{
          ...menuCss,
          ...positionCss,
          opacity: fadeAnim,
          display: getDisplay,
        }}
      >
        {renderItem}
      </Animated.View>
    </View>
  );
};

export default Menu;
