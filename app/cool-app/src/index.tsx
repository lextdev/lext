import {
  ArrowLeft,
  Box,
  Button,
  MaskInput,
  Menu,
  SafeAreaView,
  Text,
  TextInput,
  useTheme,
} from "@ynssenem/lext"
import { useState } from "react"

const IndexScreen = () => {
  const { colorScheme, setColorScheme } = useTheme()
  const [getOpenMenu, setOpenMenu] = useState(false)

  return (
    <SafeAreaView>
      <Box alignItems="center">
        <Button
          onPress={() => setColorScheme((prev) => (prev == "lighten" ? "darken" : "lighten"))}
        >
          changeColorScheme: {colorScheme}
        </Button>
      </Box>
      <Box>
        <MaskInput layout={{ label: "Hello World", description: "lorem ipsum dolor sit amet" }} />
      </Box>
      <Box flex={1} gap={50} justifyContent="center" alignItems="baseline">
        <Menu
          width={250}
          visible={getOpenMenu}
          onVisible={() => setOpenMenu((prev) => !prev)}
          renderItemPosition="bottomLeft"
          renderItem={
            <Box
              backgroundColor="secondary"
              paddingHorizontal={5}
              paddingVertical={5}
              style={{ borderRadius: 1 }}
              width={150}
            >
              <Button onPress={() => console.log("Hello World")} size="sm">
                Hello
              </Button>
              <Text fontSize={"caption"} color="global">
                Hello World
              </Text>
            </Box>
          }
        >
          <Button size="sm">Hello World</Button>
        </Menu>
      </Box>
      <ArrowLeft color={"#000"} />

      <Box>
        <TextInput placeholder="Hes" />
      </Box>
    </SafeAreaView>
  )
}

export default IndexScreen
