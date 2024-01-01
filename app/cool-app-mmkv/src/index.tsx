import {
  Box,
  Button,
  SafeAreaView,
  SelectBox,
  Text,
  View,
  useLoadingOverlay,
  useSession,
} from "@ynssenem/lext";
import { useEffect, useState } from "react";

const IndexScreen = () => {
  const { setLoading, isLoading } = useLoadingOverlay();
  const { session, signIn, signOut } = useSession();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setLoading(false), 3000);
    }
  }, [isLoading]);

  return (
    <SafeAreaView>
      <Button onPress={() => setLoading(true)}>Click Animation</Button>
      <Button onPress={() => signOut()}>Clear</Button>
      <Button
        onPress={() =>
          signIn({
            id: 2,
            jwt: "jwt key",
          })
        }
      >
        Sign
      </Button>
      <Text>{session?.id}</Text>
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
