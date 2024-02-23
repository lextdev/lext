import {
  Box,
  Button,
  Group,
  Heading,
  SafeAreaView,
  Sheet,
  SheetRef,
  Stack,
  Text,
  TextInput,
  View,
} from "@ynssenem/lext";
import { useRef, useState } from "react";

export default function () {
  const sheetRef = useRef<SheetRef>(null);

  const [visible, setVisible] = useState(false);
  const [hideMessage, setHideMessage] = useState(false);
  return (
    <SafeAreaView>
      <Box gap={10}>
        <Group justifyContent="space-between">
          <Button
            flex={1}
            onPress={() => {
              setVisible(true);
            }}
          >
            Open Modal
          </Button>
          <View flex={1}>
            <TextInput
              layout={{
                variant: "md",
              }}
              style={{ flex: 1 }}
            />
          </View>
        </Group>
      </Box>

      <Box></Box>

      <Sheet
        open={visible}
        ref={sheetRef}
        stateAction={setVisible}
        snaps={["auto", 70]}
        canTouchMove={true}
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
