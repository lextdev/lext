import {
  Box,
  Button,
  SafeAreaView,
  SelectBox,
  Switch,
  Text,
  TextInput,
  Textarea,
  useTheme,
} from "@ynssenem/lext"
import { useState } from "react"

const IndexScreen = () => {
  const { colorScheme, setColorScheme } = useTheme()
  const [value, setValue] = useState("")
  const [switchValue, setSwitchValue] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const onChangeValue = (value: string) => {
    setValue(value)
  }

  return (
    <SafeAreaView>
      <Box>
        <Button
          onPress={() => setColorScheme((prev) => (prev == "lighten" ? "darken" : "lighten"))}
          backgroundColor="primary"
          variant="filled"
        >
          changeColorScheme: {colorScheme}
        </Button>
      </Box>
      <Box flex={1} gap={25}>
        <TextInput
          value={value}
          layout={{
            label: "Adınız ve Soyadınız",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          }}
        />
        <Textarea
          value={value}
          onChangeText={onChangeValue}
          layout={{
            label: "Textarea",
            error: "Message",
          }}
        />

        <Switch
          layout={{
            label: "Textarea",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          }}
          value={switchValue}
          onChange={() => setSwitchValue((prev) => !prev)}
        />

        <SelectBox
          layout={{
            label: "SelectBox",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            right: <Text>He</Text>,
            left: <Text>He</Text>,
          }}
          modal={{
            visible: showModal,
            header: {
              left: (
                <Button
                  size="sm"
                  backgroundColor="primary"
                  variant="outline"
                  onPress={() => setShowModal((prev) => !prev)}
                >
                  Close
                </Button>
              ),
            },
          }}
          onPress={() => setShowModal((prev) => !prev)}
        />
      </Box>
    </SafeAreaView>
  )
}

export default IndexScreen
