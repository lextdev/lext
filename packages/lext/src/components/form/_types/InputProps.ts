import { ColorTypeProps } from "../../../helpers/GetColorValue";
import { TextSizesProps } from "../../../types";

export type InputProps = {
  color?: ColorTypeProps;
  fontSize?: keyof TextSizesProps;
  placeholderTextColor?: ColorTypeProps;
};

export type InputComponentThemeProps = {
  default: InputProps;
};

export const InputComponentThemeData: InputComponentThemeProps = {
  default: {
    color: "global",
    fontSize: "body",
    placeholderTextColor: "muted",
  },
};
