import { ColorTypeProps } from "../../../helpers/GetColorValue";

export type TouchableOpacityProps = {
  backgroundColor?: ColorTypeProps;
  width?: number;
  variant?: "filled" | "outline";
  paddingVertical?: number;
  paddingHorizontal?: number;
  borderRadius?: number;
  size?: "lg" | "md" | "sm";
  color?: ColorTypeProps;
  activeOpacity?: number;
  flex?: number;
};

export type TouchableOpacityComponentThemeProps = {
  default: TouchableOpacityProps;
};

export const TouchableOpacityComponentThemeData: TouchableOpacityComponentThemeProps =
  {
    default: {
      backgroundColor: "primary",
      variant: "filled",
      size: "md",
      color: "inverse",
      activeOpacity: 0.7,
    },
  };
