/// <reference types="react" />
import { TextProps } from "./DefaultProps";
import { ThemeProps } from "../../../styles/Theme";
declare const Text: import("@emotion/native").StyledComponent<import("react-native").TextProps & {
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & TextProps & ThemeProps, {}, {
    ref?: import("react").Ref<import("react-native").Text> | undefined;
}>;
export default Text;
