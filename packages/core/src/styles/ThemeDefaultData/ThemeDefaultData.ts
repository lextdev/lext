import { ThemeInterface } from "@/interfaces"

const ThemeDefaultData: ThemeInterface = {
  colors: {
    dark: {
      main: {
        background: "#000",
        primary: "blue",
        secondary: "#666",
        muted: "#d1d1d1",
      },
      text: {
        global: "#FFF",
        emphasis: "blue",
        inverse: "purple",
      },
    },
    light: {
      main: {
        background: "#FFF",
        primary: "blue",
        secondary: "#666",
        muted: "#d1d1d1",
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
      defaultVariant: "global",
      variants: {
        meta: {
          color: "emphasis",
          fontStyle: "italic",
          fontSize: 10,
        },
        button: {
          color: "global",
          fontSize: 14,
        },
        global: {
          color: "global",
          fontSize: 16,
        },
      },
    },
    Box: {
      defaultVariant: "global",
      variants: {
        global: {
          padding: 10,
        },
        muted: {
          backgroundColor: "primary",
        },
      },
    },
    Button: {
      defaultVariant: "default",
      variants: {
        default: {
          box: {
            backgroundColor: "primary",
            paddingHorizontal: 20,
          },
          label: {
            fontSize: 14,
            color: "inverse",
          },
        },
      },
    },
    Input: {
      defaultVariant: "default",
      variants: {
        default: {
          label: {
            fontSize: 14,
            fontStyle: "italic",
          },
          input: {
            flex: 1,
            fontSize: 10,
          },
          layout: {
            backgroundColor: "muted",
            paddingHorizontal: 10,
            paddingVertical: 0,
            height: 50,
          },
          errorLayout: {
            backgroundColor: "background",
          },
          description: {},
          error: {
            color: "emphasis",
            fontSize: 12,
          },
        },
        test: {
          label: {
            fontSize: 17,
            fontStyle: "italic",
          },
          input: {
            flex: 1,
            fontSize: 10,
          },
          layout: {
            backgroundColor: "muted",
            paddingHorizontal: 10,
            paddingVertical: 0,
            height: 50,
          },
          errorLayout: {
            backgroundColor: "background",
          },
          description: {},
          error: {
            color: "emphasis",
            fontSize: 12,
          },
        },
      },
    },
    Switch: {
      defaultVariant: "default",
      variants: {
        default: {
          thumbColor: "muted",
          trackColor: {
            false: "muted",
            true: "secondary",
          },
          ios_backgroundColor: "primary",
        },
      },
    },
    Select: {
      defaultVariant: "default",
      variants: {
        default: {
          itemStyle: {
            paddingVertical: 10,
            minHeight: 50,
            paddingHorizontal: 20,
            borderBottomWidth: 1,
          },
          itemActiveStyle: { backgroundColor: "primary" },
          itemDescriptionStyle: { color: "emphasis" },
          itemLeftStyle: {},
          itemTextStyle: { color: "global" },
        },
      },
    },
    Checkbox: {
      defaultVariant: "default",
      variants: {
        default: {
          checkbox: {
            width: 20,
            height: 20,
            borderWidth: 1,
            marginRight: 10,
          },
          box: {
            flexDirection: "row",
            alignItems: "center",
          },
          label: {},
          checkboxActive: {
            backgroundColor: "primary",
          },
        },
        demo: {
          checkbox: {
            width: 20,
            height: 20,
            borderWidth: 1,
            borderColor: "secondary",
            marginRight: 10,
          },
          box: {
            flexDirection: "row",
            alignItems: "center",
          },
          label: {
            color: "emphasis",
          },
          checkboxActive: {
            backgroundColor: "secondary",
            borderRadius: 100,
          },
        },
      },
    },
    Sheet: {
      defaultVariant: "default",
      variants: {
        default: {
          borderRadius: 5,
          backgroundColor: "background",
          backdropColor: "primary",
          backdropOpacity: 0.3,
          top: {
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          },
          line: {
            width: 75,
            height: 5,
            backgroundColor: "primary",
          },
        },
      },
    },
  },
}

export default ThemeDefaultData
