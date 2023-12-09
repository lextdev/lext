import { DimensionValue, TouchableOpacityProps } from "react-native";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
import { ButtonInterface } from "../../../interfaces";

export type ButtonProps = ButtonInterface & {
  backgroundColor?: ColorTypeProps;
  width?: DimensionValue;
  variant?: "filled" | "outline";
  paddingVertical?: number;
  paddingHorizontal?: number;
  borderRadius?: number;
  size?: "lg" | "md" | "sm";
  minHeight?: DimensionValue;
};

export type ButtonComponentThemeProps = {
  default: ButtonProps;
  classes?: object;
};

export const ButtonComponentThemeData: ButtonComponentThemeProps = {
  default: {
    backgroundColor: "primary",
    variant: "filled",
    size: "md",
    minHeight: 47,
  },
};
