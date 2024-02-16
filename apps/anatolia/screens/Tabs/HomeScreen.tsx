import {
  BottomSheet,
  BottomSheetRefProps,
  Box,
  Button,
  Heading,
  SafeAreaView,
  Text,
} from "@ynssenem/lext";
import { useRef, useState } from "react";
import { Modal, Pressable, StyleSheet } from "react-native";

export default function () {
  const bottomSheetRef = useRef<BottomSheetRefProps>(null);
  const [modal, setModal] = useState(false);
  return (
    <SafeAreaView>
      <Modal animationType="fade" transparent visible={modal}>
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "black",
            opacity: 0.5,
            ...StyleSheet.absoluteFillObject,
          }}
        />
        <Box>
          <Heading>Hello World</Heading>
          <Text>Lorem ipsum dolor sit amet</Text>
          <Button
            onPress={() => {
              setModal(false);
            }}
          >
            Close Modal
          </Button>
        </Box>
      </Modal>
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
      <Text>Tabs</Text>
      <BottomSheet ref={bottomSheetRef} snaps={[40, 60, 80]}>
        <Box>
          <Heading>Hello World</Heading>
          <Text>Lorem ipsum dolor sit amet</Text>
        </Box>
      </BottomSheet>
    </SafeAreaView>
  );
}
