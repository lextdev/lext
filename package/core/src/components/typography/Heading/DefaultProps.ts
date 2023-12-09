import { ColorTypeProps } from "../../../helpers/GetColorValue";
import { HeadingSizesProps } from "../../../types";

export type HeadingProps = {
  color?: ColorTypeProps;
  fontSize?: keyof HeadingSizesProps | number;
  fontFamily?: string;
};

export type HeadingComponentThemeProps = {
  default: HeadingProps;
  classes?: object;
};

export const HeadingComponentThemeData: HeadingComponentThemeProps = {
  default: {
    color: "global",
    fontSize: "h1",
  },
};
