import { ColorTypeProps } from "../../helpers/GetColorValue";
import { TextSizesProps } from "../../styles/TextSizes";

export type TextProps = {
  color?: ColorTypeProps;
  fontSize?: keyof TextSizesProps | number;
  fontFamily?: string;
};

export type TextComponentThemeProps = {
  default: TextProps;
  classes?: object;
};

export const TextComponentThemeData: TextComponentThemeProps = {
  default: {
    color: "black",
    fontSize: "body",
    fontFamily: "UrbanistMedium",
  },
};
