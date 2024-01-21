import {
  Box,
  Button,
  SafeAreaView,
  SelectBox,
  StepsRef,
  Text,
  View,
} from "@ynssenem/lext";
import { useRef, useState } from "react";

const IndexScreen = () => {
  const flatListRef = useRef<StepsRef>(null);
  const [showModal, setModal] = useState(false);
  return (
    <SafeAreaView>
      <Box>
        <SelectBox
          searchable
          searchLabel="Search"
          searchPlaceholderText="placeholder"
          searchLeft={<Text>Left</Text>}
          searchRight={<Text>Right</Text>}
          searchDescription="Hello World"
          onPress={() => setModal(true)}
          modal={{
            visible: showModal,
            header: {
              left: (
                <View>
                  <Button size="sm" onPress={() => setModal(false)}>
                    Hello World
                  </Button>
                </View>
              ),
            },
          }}
          data={[
            {
              label: "Yunus",
              value: "1",
            },

            {
              label: "Emre",
              value: "2",
            },
            {
              label: "Tolga",
              value: "3",
            },
            {
              label: "Emine",
              value: "4",
            },
            {
              label: "Metin",
              value: "5",
            },
          ]}
          value="1"
        />
      </Box>
    </SafeAreaView>
  );
};

export default IndexScreen;
