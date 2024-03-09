import { ThemeInterface } from "../interfaces";
import Theme from "./Theme";

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

type DeepPartialTheme = DeepPartial<ThemeInterface>;

const createTheme = (newTheme?: DeepPartialTheme): ThemeInterface => {
  const defaultTheme = Theme;

  return {
    ...defaultTheme,
    ...(newTheme && {
      colorScheme: newTheme.colorScheme || defaultTheme.colorScheme,
      colors: {
        darken: {
          ...defaultTheme.colors.darken,
          ...(newTheme.colors?.darken || {}),
        },
        lighten: {
          ...defaultTheme.colors.lighten,
          ...(newTheme.colors?.lighten || {}),
        },
      },
      spacing: {
        ...defaultTheme.spacing,
        ...(newTheme.spacing || {}),
      },
      fontFamily: {
        heading:
          newTheme.fontFamily?.heading ?? defaultTheme.fontFamily.heading,
        text: newTheme.fontFamily?.text ?? defaultTheme.fontFamily.text,
        monospace:
          newTheme.fontFamily?.monospace ?? defaultTheme.fontFamily.monospace,
      },
      fontSizes: {
        heading: {
          ...defaultTheme.fontSizes.heading,
          ...(newTheme.fontSizes?.heading || {}),
        },
        text: {
          ...defaultTheme.fontSizes.text,
          ...(newTheme.fontSizes?.text || {}),
        },
      },
      components: {
        Text: {
          default: {
            ...defaultTheme.components.Text.default,
            ...(newTheme.components?.Text?.default || {}),
          },
        },
        Heading: {
          default: {
            ...defaultTheme.components.Heading.default,
            ...(newTheme.components?.Heading?.default || {}),
          },
        },
        Stack: {
          default: {
            ...defaultTheme.components.Stack.default,
            ...(newTheme.components?.Stack?.default || {}),
          },
        },
        Group: {
          default: {
            ...defaultTheme.components.Group.default,
            ...(newTheme.components?.Group?.default || {}),
          },
        },
        Grid: {
          default: {
            ...defaultTheme.components.Grid.default,
            ...(newTheme.components?.Grid?.default || {}),
          },
        },
        Box: {
          default: {
            ...defaultTheme.components.Box.default,
            ...(newTheme.components?.Box?.default || {}),
          },
        },
        Button: {
          default: {
            ...defaultTheme.components.Button.default,
            ...(newTheme.components?.Button?.default || {}),
          },
          sm: {
            ...defaultTheme.components.Button.sm,
            ...(newTheme.components?.Button?.sm || {}),
          },
          lg: {
            ...defaultTheme.components.Button.lg,
            ...(newTheme.components?.Button?.lg || {}),
          },
          md: {
            ...defaultTheme.components.Button.md,
            ...(newTheme.components?.Button?.md || {}),
          },
        },
        ActionButton: {
          default: {
            ...defaultTheme.components.ActionButton.default,
            ...(newTheme.components?.ActionButton?.default || {}),
          },
        },
        FormLayout: {
          classes: {
            label: {
              ...defaultTheme.components.FormLayout.classes.label,
              ...(newTheme.components?.FormLayout?.classes?.label || {}),
            },
            description: {
              ...defaultTheme.components.FormLayout.classes.description,
              ...(newTheme.components?.FormLayout?.classes?.description || {}),
            },
            error: {
              ...defaultTheme.components.FormLayout.classes.error,
              ...(newTheme.components?.FormLayout?.classes?.error || {}),
            },
            style: {
              ...defaultTheme.components.FormLayout.classes.style,
              ...(newTheme.components?.FormLayout?.classes?.style || {}),
            },
          },
          sm: {
            ...defaultTheme.components.FormLayout.sm,
            ...(newTheme.components?.FormLayout?.sm || {}),
          },
          md: {
            ...defaultTheme.components.FormLayout.md,
            ...(newTheme.components?.FormLayout?.md || {}),
          },
        },
        Input: {
          default: {
            ...defaultTheme.components.Input.default,
            ...(newTheme.components?.Input?.default || {}),
          },
        },
        BottomSheet: {
          default: {
            ...defaultTheme.components.BottomSheet.default,
            ...(newTheme.components?.BottomSheet?.default || {}),
          },
        },
        Sheet: {
          default: {
            ...defaultTheme.components.Sheet.default,
            ...(newTheme.components?.Sheet?.default || {}),
          },
        },
        LoadingOverlay: {
          default: {
            ...defaultTheme.components.LoadingOverlay.default,
            ...(newTheme.components?.LoadingOverlay?.default || {}),
          },
        },
        Navigation: {
          default: {
            ...defaultTheme.components.Navigation.default,
            ...(newTheme.components?.Navigation?.default || {}),
          },
        },
      },
      defaultOptions: {
        ...defaultTheme.defaultOptions,
        ...(newTheme.defaultOptions || {}),
      },
    }),
  };
};

export default createTheme;
