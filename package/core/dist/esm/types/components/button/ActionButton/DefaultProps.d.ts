import { DimensionValue } from "react-native";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
import { ButtonInterface } from "../../../interfaces";
export type ActionButtonProps = ButtonInterface & {
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
export declare const ActionButtonComponentThemeData: ActionButtonComponentThemeProps;
