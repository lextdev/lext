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

const selectBoxData = [
  {
    label: "Example Name",
    value: "1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image:
      "https://res.cloudinary.com/dczeivoxt/image/upload/c_thumb,w_38,g_face/v1701344564/thumbnail_pizza_l9k4rj_68ef06d179.png",
  },
  {
    label: "Example Name",
    value: "2",
  },
  {
    label: "Example Name",
    value: "3",
  },
  {
    label: "Example Name",
    value: "4",
  },
  {
    label: "Example Name",
    value: "5",
  },
]

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
          data={selectBoxData}
          value="1"
          onChange={(item) => {
            console.log("Test", item)
          }}
          layout={{
            label: "SelectBox",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
