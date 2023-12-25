import { ColorTypeProps } from "../../../helpers/GetColorValue";

export type BottomSheetStyleProps = {
  backgroundColor: ColorTypeProps;
  lineColor: ColorTypeProps;
};

export type BottomSheetComponentThemeProps = {
  default: BottomSheetStyleProps;
};

export const BottomSheetComponentThemeData: BottomSheetComponentThemeProps = {
  default: {
    backgroundColor: "background",
    lineColor: "muted",
  },
};
