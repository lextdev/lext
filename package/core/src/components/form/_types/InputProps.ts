import { ColorTypeProps } from "../../../helpers/GetColorValue";
import { TextSizesProps } from "../../../types";

export type InputProps = {
  color?: ColorTypeProps;
  fontSize?: keyof TextSizesProps;
};

export type InputComponentThemeProps = {
  default: InputProps;
};

export const InputComponentThemeData: InputComponentThemeProps = {
  default: {
    color: "global",
    fontSize: "body",
  },
};
