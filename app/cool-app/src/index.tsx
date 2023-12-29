import {
  Box,
  Heading,
  Text,
  SafeAreaView,
  useLoadingOverlay,
  Button,
} from "@ynssenem/lext";
import { useEffect } from "react";

const IndexScreen = () => {
  const { setLoading, isLoading } = useLoadingOverlay();

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setLoading(false), 3000);
    }
  }, [isLoading]);

  return (
    <SafeAreaView>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Heading fontSize="h1">Merhaba Dünya</Heading>
        <Text>Hello World</Text>
        <Button onPress={() => setLoading((prev) => !prev)}>Set Loading</Button>
      </Box>
    </SafeAreaView>
  );
};

export default IndexScreen;
