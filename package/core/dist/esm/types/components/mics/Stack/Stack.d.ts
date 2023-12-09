/// <reference types="react" />
import { StackProps } from "./DefaultProps";
import { ThemeProps } from "../../../styles/Theme";
declare const Stack: import("@emotion/native").StyledComponent<import("react-native").ViewProps & {
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & StackProps & ThemeProps, {}, {
    ref?: import("react").Ref<import("react-native").View> | undefined;
}>;
export default Stack;
