import {
  ArrowDown,
  Box,
  SafeAreaView,
  TextInput,
  Textarea,
  useLoadingOverlay,
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
      <Box flex={1} justifyContent="center">
        <TextInput
          layout={{
            left: <ArrowDown color="black" />,
            label: "Hello World",
          }}
        />

        <Textarea
          layout={{
            left: <ArrowDown color="black" />,
            label: "Hello World",
          }}
          placeholder="Deneme"
        />
      </Box>
    </SafeAreaView>
  );
};

export default IndexScreen;
