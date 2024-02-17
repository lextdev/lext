import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { Modal, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import SheetContent, { SheetContentRef } from "./SheetContent";

type SheetProps = {
  children: ReactNode;
  snaps: Array<"auto" | number>;
  open: boolean;
  close: Dispatch<SetStateAction<boolean>>;
};

export type SheetRef = {
  hardReSize: () => void;
  scrollToClose: () => void;
  scrollToIndex: (index: number) => void;
};

const Sheet = forwardRef<SheetRef, SheetProps>((props, ref) => {
  const sheetContentRef = useRef<SheetContentRef>(null);

  const hardReSize = () => {
    if (sheetContentRef.current) {
      sheetContentRef.current.hardReSize();
    }
  };

  const scrollToClose = () => {
    sheetContentRef.current?.scrollToClose();

    setTimeout(() => {
      props.close(false);
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
        onTouchStart={scrollToClose}
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1,
          ...StyleSheet.absoluteFillObject,
        }}
      />
      <SheetContent
        ref={sheetContentRef}
        isVisible={props.open}
        snaps={props.snaps}
        children={props.children}
      />
    </Modal>
  );
});

export default Sheet;
