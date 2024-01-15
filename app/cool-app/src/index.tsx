import {
  Box,
  Button,
  SafeAreaView,
  Stack,
  Steps,
  StepsRef,
  Text,
} from "@ynssenem/lext";
import { useRef } from "react";

const IndexScreen = () => {
  const flatListRef = useRef<StepsRef>(null);

  return (
    <SafeAreaView>
      <Stack flex={1}>
        <Steps
          ref={flatListRef}
          scrollEnabled
          data={[
            <Box flex={1} backgroundColor="primary">
              <Text>Hello World</Text>
            </Box>,
            <Box flex={1} backgroundColor="secondary">
              <Text>Hello World 2</Text>
            </Box>,
            <Box flex={1} backgroundColor="muted">
              <Text>Hello World 3</Text>
            </Box>,
          ]}
        />
        <Box>
          <Button
            onPress={() => {
              flatListRef.current?.scrollToIndex({
                animated: true,
                index: 1,
              });
            }}
          >
            Hello
          </Button>
        </Box>
      </Stack>
    </SafeAreaView>
  );
};

export default IndexScreen;
