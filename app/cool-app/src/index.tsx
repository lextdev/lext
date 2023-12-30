import {
  Anchor,
  Box,
  Button,
  SafeAreaView,
  SelectBox,
  useLoadingOverlay,
} from "@ynssenem/lext";
import { useEffect, useState } from "react";

const IndexScreen = () => {
  const { setLoading, isLoading } = useLoadingOverlay();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setLoading(false), 3000);
    }
  }, [isLoading]);

  return (
    <SafeAreaView>
      <Button onPress={() => setLoading(true)}>Click Animation</Button>
      <Box flex={1} justifyContent="center">
        <SelectBox
          onSelectionChange={() => setVisible(true)}
          onPress={() => setVisible(true)}
          modal={{
            visible,
            header: {
              left: (
                <Anchor onPress={() => setVisible(false)}>Hello World</Anchor>
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
