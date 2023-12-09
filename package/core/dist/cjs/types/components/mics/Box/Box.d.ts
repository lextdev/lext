/// <reference types="react" />
import { ThemeProps } from "../../../styles/Theme";
declare const Box: import("@emotion/native").StyledComponent<import("react-native").ViewProps & {
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & {
    backgroundColor?: keyof import("../../../types/ColorsProps").default | undefined;
} & import("react-native").FlexStyle & ThemeProps, {}, {
    ref?: import("react").Ref<import("react-native").View> | undefined;
}>;
export default Box;
