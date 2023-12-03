import { DimensionValue, TouchableOpacityProps } from "react-native";

import { ColorTypeProps } from "../../helpers/GetColorValue";

export type ActionButtonProps = TouchableOpacityProps & {
  backgroundColor?: ColorTypeProps;
  width?: DimensionValue;
  variant?: "filled" | "outline" | "transparent";
  paddingVertical?: number;
  paddingHorizontal?: number;
  borderRadius?: number;
  size?: "lg" | "md" | "sm";
  minHeight?: DimensionValue;
};

export type ActionButtonComponentThemeProps = {
  default: ActionButtonProps;
  classes?: object;
};

export const ActionButtonComponentThemeData: ActionButtonComponentThemeProps = {
  default: {
    backgroundColor: "primary",
    variant: "filled",
    size: "md",
  },
};
