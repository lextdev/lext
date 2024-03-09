import { ViewStyle } from "react-native";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
import { TextProps } from "../../typography/Text/DefaultProps";

type Style = {
  backgroundColor: ColorTypeProps;
  borderColor: ColorTypeProps;
  borderWidth: number;
  borderStyle: ViewStyle["borderStyle"];
};

export type FormLayoutComponentThemeProps = {
  classes: {
    label: TextProps;
    description: TextProps;
    error: TextProps;
    style: Style;
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
    style: {
      backgroundColor: "muted",
      borderColor: "muted",
      borderStyle: "solid",
      borderWidth: 1,
    },
  },
  sm: {
    height: 40,
  },
  md: {
    height: 50,
  },
};
