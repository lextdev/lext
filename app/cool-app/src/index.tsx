import {
  BottomSheet,
  BottomSheetRefProps,
  Box,
  Button,
  SafeAreaView,
  SelectBox,
  Text,
  View,
  useLoadingOverlay,
  useSession,
} from "@ynssenem/lext";
import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";

const IndexScreen = () => {
  const { setLoading, isLoading } = useLoadingOverlay();
  const { session, signIn, signOut } = useSession();
  const [visible, setVisible] = useState(false);
  const bottomSheetRef = useRef<BottomSheetRefProps>(null);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setLoading(false), 3000);
    }
  }, [isLoading]);

  return (
    <SafeAreaView>
      <Box gap={10}>
        <Button onPress={() => setLoading(true)}>Click Animation</Button>
        <Button onPress={() => bottomSheetRef.current?.snapToIndex(1)}>
          Open BottomSheet
        </Button>
        <Button onPress={() => signOut()}>Clear</Button>
        <Button
          onPress={() =>
            signIn({
              id: 2,
              jwt: "jwt key",
            })
          }
        >
          Sign {session?.id}
        </Button>
      </Box>
      <BottomSheet ref={bottomSheetRef} snaps={[30, 60]}>
        <ScrollView>
          <Text>Hello World</Text>
        </ScrollView>
      </BottomSheet>
      <Box flex={1} justifyContent="center">
        <SelectBox
          onSelectionChange={() => setVisible(true)}
          onPress={() => setVisible(true)}
          modal={{
            visible,
            header: {
              left: (
                <View>
                  <Button size="sm" onPress={() => setVisible(false)}>
                    Hello World
                  </Button>
                </View>
              ),
            },
          }}
          data={[
            {
              label: "Hello",
              value: "1",
            },
          ]}
        />
      </Box>
    </SafeAreaView>
  );
};

export default IndexScreen;
