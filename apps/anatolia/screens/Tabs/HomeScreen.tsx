import {
  BottomSheet,
  BottomSheetRefProps,
  Box,
  Button,
  Heading,
  SafeAreaView,
  Sheet,
  Text,
} from "@ynssenem/lext";
import { useRef, useState } from "react";
import { Modal, Pressable, StyleSheet } from "react-native";

export default function () {
  const bottomSheetRef = useRef<BottomSheetRefProps>(null);
  const [modal, setModal] = useState(false);
  const [hideMessage, setHideMessage] = useState(false);
  return (
    <SafeAreaView>
      <Box gap={10}>
        <Button
          onPress={() => {
            bottomSheetRef.current?.snapToIndex(1);
          }}
        >
          Open BottomSheet
        </Button>

        <Button
          onPress={() => {
            setModal(true);
          }}
        >
          Open Modal
        </Button>
      </Box>
      <BottomSheet ref={bottomSheetRef} snaps={["fit", 50, 70]}>
        <Box backgroundColor="primary">
          <Heading>Hello World</Heading>
          {hideMessage && (
            <Text style={{ height: 200 }}>Lorem ipsum dolor sit amet</Text>
          )}
          <Button
            onPress={() => {
              setHideMessage(!hideMessage);
            }}
          >
            Click
          </Button>
        </Box>
      </BottomSheet>
      {/* <Sheet
        visible={modal}
        snaps={["fit", 50]}
        onPressable={() => {
          setModal(false);
        }}
      >
        <Box>
          <Heading>Hello World</Heading>
          {hideMessage && (
            <Text style={{ height: 200 }}>Lorem ipsum dolor sit amet</Text>
          )}
          <Button
            onPress={() => {
              setHideMessage(!hideMessage);
            }}
          >
            Click
          </Button>
        </Box>
      </Sheet> */}
    </SafeAreaView>
  );
}
