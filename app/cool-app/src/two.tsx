import { BottomSheet, BottomSheetRefProps, Box, Button, SafeAreaView, Text } from "@ynssenem/lext"
import { useCallback, useRef } from "react"

const IndexScreen = () => {
  const ref = useRef<BottomSheetRefProps>(null)

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive()
    if (isActive) {
      ref?.current?.scrollTo(0)
    } else {
      ref?.current?.scrollTo(-250)
    }
  }, [])

  return (
    <SafeAreaView>
      <Box>
        <Button onPress={onPress}>Hello</Button>
      </Box>
      <BottomSheet ref={ref}>
        <Text>Hello World</Text>
      </BottomSheet>
    </SafeAreaView>
  )
}

export default IndexScreen
