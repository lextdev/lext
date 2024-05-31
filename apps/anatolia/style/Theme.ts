import { CreateStyle } from "@lextdev/core"

const ThemeData = CreateStyle({
  colors: {
    light: {
      main: {
        background: "#FFFFFF",
        primary: "#FF204E",
        secondary: "#000000",
        muted: "#F0F0F0",
      },
      text: {
        global: "#000000",
        emphasis: "#858585",
        inverse: "#FFFFFF",
      },
    },
    dark: {
      main: {
        background: "#0e0e0e",
        primary: "#FF204E",
        secondary: "#FFFFFF",
        muted: "#141414",
      },
      text: {
        global: "#FFFFFF",
        emphasis: "#858585",
        inverse: "#000000",
      },
    },
  },
  components: {
    Text: {
      defaultVariant: "body",
      variants: {
        h1: {
          fontSize: 53,
        },
        h2: {
          fontSize: 43,
        },
        h3: {
          fontSize: 34,
        },
        h4: {
          fontSize: 27,
        },
        h5: {
          fontSize: 22,
        },
        body: {
          fontSize: 14,
        },
        lead: {
          fontSize: 18,
        },
        small: {
          fontSize: 11,
        },
        meta: {
          fontSize: 14,

          letterSpacing: 0.42,
          textTransform: "capitalize",
        },
      },
    },
    Box: {
      defaultVariant: "default",
      variants: {
        default: {},
        container: {
          paddingVertical: 15,
          paddingHorizontal: 30,
          gap: 15,
        },
      },
    },
    Button: {
      defaultVariant: "filled",
      variants: {
        filled: {
          box: {
            backgroundColor: "secondary",
            alignItems: "center",
            paddingHorizontal: 30,
            paddingVertical: 20,
            borderRadius: 15,
          },
          label: {
            textAlign: "center",
            color: "inverse",
            fontSize: 14,

            letterSpacing: 0.42,
            textTransform: "capitalize",
          },
        },
      },
    },
    Input: {
      defaultVariant: "default",
      variants: {
        default: {
          error: {
            color: "global",
            fontSize: 12,
            marginTop: 5,
          },
          input: {
            height: 55,
            flex: 1,
            marginHorizontal: 5,
            color: "global",
          },
          label: {
            color: "global",
          },
          layout: {
            height: 55,
            borderRadius: 15,
            borderColor: "muted",
            borderWidth: 1,
            paddingHorizontal: 15,
            paddingVertical: 15,
          },
          errorLayout: {
            borderColor: "primary",
          },
        },
      },
    },
    Checkbox: {
      defaultVariant: "default",
      variants: {
        default: {
          box: {
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
          },
          checkbox: {
            borderColor: "muted",
            borderWidth: 1,
            width: 24,
            height: 24,
            borderRadius: 5,
          },
          checkboxActive: {
            borderColor: "secondary",
            backgroundColor: "secondary",
          },
          label: {
            color: "emphasis",
          },
        },
      },
    },
  },
})

export default ThemeData
