import { Box, Button, SafeAreaView, useTheme } from "@ynssenem/lext"

const IndexScreen = () => {
  const { colorScheme, setColorScheme } = useTheme()

  return (
    <SafeAreaView>
      <Box flex={1} justifyContent="center" gap={15} alignItems="center">
        <Button
          onPress={() => setColorScheme((prev) => (prev == "lighten" ? "darken" : "lighten"))}
          backgroundColor="primary"
          variant="filled"
        >
          changeColorScheme: {colorScheme}
        </Button>
      </Box>
    </SafeAreaView>
  )
}

export default IndexScreen
