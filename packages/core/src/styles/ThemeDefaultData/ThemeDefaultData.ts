import ThemeInterface from "@/interfaces/ThemeInterface/ThemeInterface"

const ThemeDefaultData: ThemeInterface = {
  colors: {
    darken: {
      main: {
        background: "#000",
        primary: "#000",
        secondary: "#666",
        muted: "#666",
      },
      text: {
        global: "#FFF",
        emphasis: "blue",
        inverse: "purple",
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
        emphasis: "blue",
        inverse: "red",
      },
    },
  },
  components: {
    Text: {
      defaultVariant: "meta",
      variants: {
        meta: {
          color: "inverse",
          fontStyle: "italic",
          fontSize: 40,
        },
        global: {
          color: "emphasis",
          fontSize: 20,
        },
      },
    },
  },
}

export default ThemeDefaultData
