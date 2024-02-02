import { ColorTypeProps } from "../../../helpers/GetColorValue";

export type BottomSheetStyleProps = {
  backgroundColor: ColorTypeProps;
  lineColor: ColorTypeProps;
  pressableBackgroundColor: ColorTypeProps;
  pressableBackgroundOpacity: number;
};

export type BottomSheetComponentThemeProps = {
  default: BottomSheetStyleProps;
};

export const BottomSheetComponentThemeData: BottomSheetComponentThemeProps = {
  default: {
    backgroundColor: "background",
    lineColor: "muted",
    pressableBackgroundColor: "background",
    pressableBackgroundOpacity: 0.5,
  },
};
