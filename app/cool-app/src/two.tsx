import {
  BottomSheet,
  BottomSheetRefProps,
  Box,
  Button,
  SafeAreaView,
  SelectBox,
  TextInput,
  useTheme,
} from "@ynssenem/lext"
import { useCallback, useEffect, useRef } from "react"

const IndexScreen = () => {
  const { colorScheme, setColorScheme } = useTheme()

  const bottomSheetRef = useRef<BottomSheetRefProps>(null)

  const onPressBottomSheet = useCallback((destination: number) => {
    bottomSheetRef.current?.snapToIndex(destination)
  }, [])

  console.log("HEllo Wolrd")

  return (
    <SafeAreaView>
      <Box gap={10}>
        <Button
          onPress={() => setColorScheme((prev) => (prev == "lighten" ? "darken" : "lighten"))}
        >
          changeColorScheme: {colorScheme}
        </Button>
        <Button onPress={() => onPressBottomSheet(1)}>Aç</Button>
      </Box>
      <BottomSheet ref={bottomSheetRef} snaps={[25]}>
        <Box flex={1}>
          <TextInput placeholder="Test" />
        </Box>
      </BottomSheet>
    </SafeAreaView>
  )
}

export default IndexScreen
