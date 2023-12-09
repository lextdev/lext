# Lext - React Native UI Library

Lext is a customizable and easy-to-use UI library for your React Native applications. Developed with TypeScript support, this library helps you quickly create user interfaces.

## Getting Started

### Installation

To add Lext to your project, you can use the following command:

```
npm install @ynssenem/lext
# or
yarn add @ynssenem/lext
```

### Usage

After including Lext in your project, you can easily use the components. Here's a simple example:

```ts
import React from "react";
import { View } from "react-native";
import { SafeAreaView, Text, ThemeProvider, createTheme } from "@ynssenem/lext";

export default function App() {
  const theme = createTheme({
    colors: {
      background: "#FFF78A",
      global: "#000",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View>
          <Text>Hello World</Text>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}
```

For more examples and usage details, you can check our [Documentation](docs/) page.

## Contributing

If you want to help make Lext better, please feel free to contribute. You can check our [CONTRIBUTING.md](CONTRIBUTING.md) file for contribution guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for detailed information.

---

**Lext** ❤️ React Native
