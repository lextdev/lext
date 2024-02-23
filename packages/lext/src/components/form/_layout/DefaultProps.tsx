import { TextProps } from "../../typography/Text/DefaultProps";

export type FormLayoutComponentThemeProps = {
  classes: {
    label: TextProps;
    description: TextProps;
    error: TextProps;
  };
  sm: {
    height: number;
  };
  md: {
    height: number;
  };
};

export const FormLayoutComponentThemeData: FormLayoutComponentThemeProps = {
  classes: {
    label: {
      fontSize: "caption",
    },
    description: {
      fontSize: "caption",
      color: "emphasis",
    },
    error: {
      fontSize: "caption",
      color: "danger",
    },
  },
  sm: {
    height: 40,
  },
  md: {
    height: 50,
  },
};
