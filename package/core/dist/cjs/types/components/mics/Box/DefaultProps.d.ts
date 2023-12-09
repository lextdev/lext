import { FlexStyle } from "react-native";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
export type BoxProps = {
    backgroundColor?: ColorTypeProps;
} & FlexStyle;
export type BoxComponentThemeProps = {
    default: BoxProps;
    classes?: object;
};
export declare const BoxComponentThemeData: BoxComponentThemeProps;
