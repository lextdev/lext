import { ThemeInterface } from "../interfaces";
import Theme from "./Theme";

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

type DeepPartialTheme = DeepPartial<ThemeInterface>;

const createTheme = (newTheme?: DeepPartialTheme): ThemeInterface => {
  const defaultTheme = Theme;
  return {
    ...defaultTheme, // varsayılan tema veya mevcut temayı buradan alabilirsiniz
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
          // Other features will be added here
        },
        Group: {
          default: {
            ...defaultTheme.components.Group.default,
            ...(newTheme.components?.Group?.default || {}),
          },
          // Other features will be added here
        },
        Grid: {
          default: {
            ...defaultTheme.components.Grid.default,
            ...(newTheme.components?.Grid?.default || {}),
          },
          // Other features will be added here
        },
        Box: {
          default: {
            ...defaultTheme.components.Box.default,
            ...(newTheme.components?.Box?.default || {}),
          },
          // Other features will be added here
        },
        Button: {
          default: {
            ...defaultTheme.components.Button.default,
            ...(newTheme.components?.Button?.default || {}),
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
