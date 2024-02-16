# Lext - React Native UI Library

![Logo](https://camo.githubusercontent.com/7433e220f833da6a77f20304354eefc7d2d53079acb3dfba5b1c2b75d97b6ffe/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64776d656a736c78352f696d6167652f75706c6f61642f635f7468756d622c775f3230302c675f666163652f76313730333532333634322f4c6578744c6f676f5f6d36636f31702e706e67)

Lext is a customizable and easy-to-use UI library for your React Native applications. Developed with TypeScript support, this library helps you quickly create user interfaces.

## Getting Started

### Installation

To add Lext to your project, you can use the following command:

```bash
npm install @emotion/native@^11.11.0 @emotion/react@^11.11.1 react-native-gesture-handler@~2.14.0 react-native-reanimated@~3.6.2 @ynssenem/lext@latest
```

### Usage

After including Lext in your project, you can easily use the components. Here's a simple example:

```ts
// ./index.ts
import React from "react";
import { ThemeProvider, createTheme } from "@ynssenem/lext";
import IndexScreen from "./src/indexScreen";

export default function App() {
  const theme = createTheme({
    colorScheme: "lighten",
    colors: {
      darken: {
        background: "#2B2A4C",
        global: "#FFF",
      },
      lighten: {
        background: "#B4BDFF",
        global: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme} gestureHandlerRootView>
      <IndexScreen />
    </ThemeProvider>
  );
}
```

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};
```

```ts
// ./src/indexScreen.ts
import React from "react";
import { Box, Button, SafeAreaView, useTheme } from "@ynssenem/lext";

const IndexScreen = () => {
  const { colorScheme, setColorScheme } = useTheme();

  return (
    <SafeAreaView>
      <Box flex={1} justifyContent="center" gap={15} alignItems="center">
        <Button
          onPress={() =>
            setColorScheme((prev) => (prev == "lighten" ? "darken" : "lighten"))
          }
          backgroundColor="primary"
          variant="filled"
        >
          changeColorScheme: {colorScheme}
        </Button>
      </Box>
    </SafeAreaView>
  );
};

export default IndexScreen;
```

For more examples and usage details, you can check our [Documentation](docs/) page.

## Contributing

If you want to help make Lext better, please feel free to contribute. You can check our [CONTRIBUTING.md](CONTRIBUTING.md) file for contribution guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for detailed information.

---

**Lext** ❤️ React Native
