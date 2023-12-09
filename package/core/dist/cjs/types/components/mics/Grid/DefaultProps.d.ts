import { FlexStyle } from "react-native";
export type GridProps = {
    alignItems?: FlexStyle["alignItems"];
    justifyContent?: FlexStyle["justifyContent"];
    gap?: FlexStyle["gap"];
    flex?: FlexStyle["flex"];
};
export type GridComponentThemeProps = {
    default: GridProps;
    classes?: object;
};
export declare const GridComponentThemeData: GridComponentThemeProps;
