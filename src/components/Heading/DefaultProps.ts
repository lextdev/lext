import { ColorTypeProps } from "../../helpers/GetColorValue";
import { HeadingSizesProps } from "../../styles/HeadingSizes";

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
    color: "black",
    fontSize: "h1",
    fontFamily: "UrbanistBold",
  },
};
