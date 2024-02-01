import {
  BottomSheet,
  BottomSheetRefProps,
  Box,
  Button,
  SafeAreaView,
  Text,
} from "@ynssenem/lext";
import { useRef } from "react";

export default function () {
  const bottomSheetRef = useRef<BottomSheetRefProps>(null);

  return (
    <>
      <BottomSheet ref={bottomSheetRef} snaps={[50]}>
        <Box>
          <Text>Hello World</Text>
        </Box>
      </BottomSheet>
      <SafeAreaView>
        <Box flex={1} justifyContent="center" alignItems="center">
          <Button
            onPress={() => {
              bottomSheetRef.current?.snapToIndex(1);
            }}
          >
            Open BottomSheet
          </Button>
        </Box>
      </SafeAreaView>
    </>
  );
}
