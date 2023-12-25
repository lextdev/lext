import { TextProps } from "../../typography/Text/DefaultProps";

export type FormLayoutComponentThemeProps = {
  classes: {
    label: TextProps;
    description: TextProps;
    error: TextProps;
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
};
