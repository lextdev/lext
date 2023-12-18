import { ColorTypeProps } from "../../../helpers/GetColorValue";
import { TextSizesProps } from "../../../types";

export type TextProps = {
  color?: ColorTypeProps;
  fontSize?: keyof TextSizesProps | number;
  fontFamily?: string;
};

export type TextComponentThemeProps = {
  default: TextProps;
};

export const TextComponentThemeData: TextComponentThemeProps = {
  default: {
    color: "global",
    fontSize: "body",
  },
};
