import { ColorTypeProps } from "../../../helpers/GetColorValue";

export type SheetStyleProps = {
  backgroundColor: ColorTypeProps;
  lineColor: ColorTypeProps;
  pressableBackgroundColor: ColorTypeProps;
  pressableBackgroundOpacity: number;
};

export type SheetComponentThemeProps = {
  default: SheetStyleProps;
};

export const SheetComponentThemeData: SheetComponentThemeProps = {
  default: {
    backgroundColor: "background",
    lineColor: "muted",
    pressableBackgroundColor: "background",
    pressableBackgroundOpacity: 0.5,
  },
};
