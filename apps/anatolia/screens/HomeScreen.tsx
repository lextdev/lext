import {
  SafeAreaView,
  Text,
  Button,
  Box,
  Group,
  ActionButton,
  Window,
  Heading,
  BottomSheet,
  BottomSheetRefProps,
} from "@ynssenem/lext";
import { useRef } from "react";

export default function ({}) {
  const bottomSheetRef = useRef<BottomSheetRefProps>(null);

  return (
    <SafeAreaView>
      <Box flex={1} gap={20}>
        <Button
          onPress={() => {
            bottomSheetRef.current?.snapToIndex(1);
          }}
        >
          Open BottomSheet
        </Button>

        <Button
          backgroundColor="secondary"
          onPress={() => {
            bottomSheetRef.current?.snapToIndex(1);
          }}
        >
          Go To Tabs
        </Button>
      </Box>
      <BottomSheet ref={bottomSheetRef} snaps={[40, 60, 80]}>
        <Box>
          <Heading>Hello World</Heading>
          <Text>Lorem ipsum dolor sit amet</Text>
        </Box>
      </BottomSheet>
    </SafeAreaView>
  );
}
