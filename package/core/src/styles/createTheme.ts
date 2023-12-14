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
          classes: newTheme.components?.Text?.classes || {},
        },
        Heading: {
          default: {
            ...defaultTheme.components.Heading.default,
            ...(newTheme.components?.Heading?.default || {}),
          },
          classes: newTheme.components?.Heading?.classes || {},
        },
        Stack: {
          default: {
            // Stack - add updates for component here
            ...(newTheme.components?.Stack?.default || {}),
          },
          // Other features will be added here
        },
        Group: {
          default: {
            // Group - add updates for component here
            ...(newTheme.components?.Group?.default || {}),
          },
          // Other features will be added here
        },
        Grid: {
          default: {
            // Grid - add updates for component here
            ...(newTheme.components?.Grid?.default || {}),
          },
          // Other features will be added here
        },
        Box: {
          default: {
            // Box - add updates for component here
            ...(newTheme.components?.Box?.default || {}),
          },
          // Other features will be added here
        },
        Button: {
          default: {
            // Button - add updates for component here
            ...(newTheme.components?.Button?.default || {}),
          },
          // Other features will be added here
        },
        ActionButton: {
          default: {
            // ActionButton - add updates for component here
            ...(newTheme.components?.ActionButton?.default || {}),
          },
          // Other features will be added here
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
