import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { Modal, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import SheetContent, { SheetContentRef } from "./SheetContent";
import { useColor, useTheme } from "../../../hooks";
import { HexToRGBA } from "../../../helpers";

type SheetProps = {
  children: ReactNode;
  snaps: Array<"auto" | number>;
  open: boolean;
  stateAction: Dispatch<SetStateAction<boolean>>;
  canClosePressable?: boolean;
  canTouchMove?: boolean;
};

export type SheetRef = {
  hardReSize: () => void;
  scrollToClose: () => void;
  scrollToIndex: (index: number) => void;
};

const Sheet = forwardRef<SheetRef, SheetProps>((props, ref) => {
  const sheetContentRef = useRef<SheetContentRef>(null);
  const { canClosePressable = true, canTouchMove = true } = props;
  const { theme } = useTheme();
  const getColor = useColor();
  const hardReSize = () => {
    if (sheetContentRef.current) {
      sheetContentRef.current.hardReSize();
    }
  };

  const scrollToClose = () => {
    sheetContentRef.current?.scrollToClose();

    setTimeout(() => {
      props.stateAction(false);
    }, 250);
  };

  const scrollToIndex = (index: number) => {
    if (sheetContentRef.current) {
      sheetContentRef.current.scrollToIndex(index);
    }
  };

  useImperativeHandle(
    ref,
    () => ({
      hardReSize,
      scrollToIndex,
      scrollToClose,
    }),
    [hardReSize, scrollToIndex, scrollToClose]
  );

  return (
    <Modal
      visible={props.open}
      animationType={props.open ? "fade" : "slide"}
      transparent
    >
      <Animated.View
        onTouchStart={() => {
          if (canClosePressable) {
            scrollToClose();
          }
        }}
        style={{
          backgroundColor: HexToRGBA(
            getColor(theme.components.Sheet.default.pressableBackgroundColor),
            theme.components.Sheet.default.pressableBackgroundOpacity
          ),
          zIndex: 1,
          ...StyleSheet.absoluteFillObject,
        }}
      />
      <SheetContent
        ref={sheetContentRef}
        isVisible={props.open}
        snaps={props.snaps}
        children={props.children}
        onClose={scrollToClose}
        canTouchMove={canTouchMove}
      />
    </Modal>
  );
});

export default Sheet;
