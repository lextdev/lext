import { FlexStyle } from "react-native";
export type GroupProps = {
    alignItems?: FlexStyle["alignItems"];
    justifyContent?: FlexStyle["justifyContent"];
    gap?: FlexStyle["gap"];
    flex?: FlexStyle["flex"];
};
export type GroupComponentThemeProps = {
    default: GroupProps;
    classes?: object;
};
export declare const GroupComponentThemeData: GroupComponentThemeProps;
