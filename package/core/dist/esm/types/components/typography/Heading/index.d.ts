/// <reference types="react" />
import { HeadingProps } from "./DefaultProps";
import { ThemeProps } from "../../../styles/Theme";
declare const Heading: import("@emotion/native").StyledComponent<import("react-native").TextProps & {
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & HeadingProps & ThemeProps, {}, {
    ref?: import("react").Ref<import("react-native").Text> | undefined;
}>;
export default Heading;
