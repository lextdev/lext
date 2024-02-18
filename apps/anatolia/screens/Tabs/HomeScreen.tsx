import {
  BottomSheetRefProps,
  Box,
  Button,
  Heading,
  SafeAreaView,
  Sheet,
  SheetRef,
  Stack,
  Text,
} from "@ynssenem/lext";
import { useRef, useState } from "react";

export default function () {
  const bottomSheetRef = useRef<BottomSheetRefProps>(null);
  const sheetRef = useRef<SheetRef>(null);

  const [visible, setVisible] = useState(false);
  const [hideMessage, setHideMessage] = useState(false);
  return (
    <SafeAreaView>
      <Box gap={10}>
        <Button
          onPress={() => {
            setVisible(true);
          }}
        >
          Open Modal
        </Button>
      </Box>

      <Sheet
        open={visible}
        ref={sheetRef}
        close={setVisible}
        snaps={["auto", 80, 70]}
      >
        <Box>
          <Heading>Hello World</Heading>
          {hideMessage && (
            <Text style={{ height: 200 }}>Lorem ipsum dolor sit amet</Text>
          )}
          <Stack>
            <Button
              onPress={() => {
                sheetRef.current?.hardReSize();
                setHideMessage(!hideMessage);
              }}
            >
              HardReSize
            </Button>
            <Button
              onPress={() => {
                sheetRef.current?.scrollToIndex(1);
              }}
            >
              Index To 1
            </Button>
            <Button
              onPress={() => {
                sheetRef.current?.scrollToIndex(0);
              }}
            >
              Index To 0 (Auto)
            </Button>
            <Button
              onPress={() => {
                sheetRef.current?.scrollToIndex(3);
              }}
            >
              No Index
            </Button>
            <Button
              onPress={() => {
                sheetRef.current?.scrollToClose();
              }}
            >
              Close
            </Button>
          </Stack>
        </Box>
      </Sheet>
    </SafeAreaView>
  );
}
