import ThemeInterface from "@/interfaces/ThemeInterface/ThemeInterface";

const ThemeDefaultData: ThemeInterface = {
  colorScheme: "lighten",
  colors: {
    darken: {
      main: {
        background: "#FFF",
        primary: "#000",
        secondary: "#666",
        muted: "#666",
      },
      text: {
        global: "#000",
        emphasis: "#000",
        inverse: "#FFF",
      },
    },
    lighten: {
      main: {
        background: "#FFF",
        primary: "#000",
        secondary: "#666",
        muted: "#666",
      },
      text: {
        global: "#000",
        emphasis: "#000",
        inverse: "#FFF",
      },
    },
  },
};

export default ThemeDefaultData;
