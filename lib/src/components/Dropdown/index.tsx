import { useTheme } from "@emotion/react";
import React, { Dispatch, FC, ReactNode, SetStateAction } from "react";
import {
  DimensionValue,
  Modal,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeIn, SlideOutLeft } from "react-native-reanimated";

import { backdrop } from "../BottomSheet";
import Box from "../Box";
import Stack from "../Stack";

export const HEIGHT = 280;
export const OVERDRAG = 25;

export const BACKGROUND_COLOR = "#FFF";
export const BACKDROP_COLOR = "rgba(0, 0, 0, 0.5)";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type DropdownProps = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  height?: number;
  padding?: DimensionValue;
  activePressable?: boolean;
};

const Dropdown: FC<DropdownProps> = ({
  isOpen,
  setOpen,
  children,
  activePressable = true,
  height,
  padding,
}) => {
  const { defaultOptions } = useTheme();

  return (
    <Modal
      style={{ display: "flex", justifyContent: "center" }}
      animationType="fade"
      visible={isOpen}
      transparent
    >
      <AnimatedPressable
        style={backdrop}
        entering={FadeIn}
        exiting={SlideOutLeft}
        onPress={() => {
          if (activePressable) {
            setOpen(false);
          }
        }}
      />
      <TouchableOpacity style={{ flex: 1 }} onPress={() => setOpen(false)}>
        <View style={{ flex: 1 }} />
      </TouchableOpacity>
      <Box
        backgroundColor="white"
        padding={padding ?? defaultOptions.padding}
        style={{
          borderRadius: defaultOptions.borderRadius,
          zIndex: 1,
          margin: defaultOptions.padding,
          height,
        }}
      >
        <Stack gap={25} justifyContent="space-between" alignItems="stretch">
          {children}
        </Stack>
      </Box>
      <TouchableOpacity style={{ flex: 1 }} onPress={() => setOpen(false)}>
        <View style={{ flex: 1 }} />
      </TouchableOpacity>
    </Modal>
  );
};

export default Dropdown;
