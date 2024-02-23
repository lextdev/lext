import { DimensionValue } from "react-native";
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
  color?: ColorTypeProps;
  fontFamily?: string;
};

export type ButtonComponentThemeProps = {
  default: ButtonProps;
  sm: {
    paddingHorizontal: number;
    height: number;
  };
  md: {
    paddingHorizontal: number;
    height: number;
  };
  lg: {
    paddingHorizontal: number;
    height: number;
  };
};

export const ButtonComponentThemeData: ButtonComponentThemeProps = {
  default: {
    backgroundColor: "primary",
    variant: "filled",
    size: "md",
    color: "inverse",
  },
  sm: {
    height: 40,
    paddingHorizontal: 10,
  },
  md: {
    height: 50,
    paddingHorizontal: 20,
  },
  lg: {
    height: 60,
    paddingHorizontal: 30,
  },
};
