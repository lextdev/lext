/// <reference types="react" />
import { GroupProps } from "./DefaultProps";
import { ThemeProps } from "../../../styles/Theme";
declare const Group: import("@emotion/native").StyledComponent<import("react-native").ViewProps & {
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & GroupProps & ThemeProps, {}, {
    ref?: import("react").Ref<import("react-native").View> | undefined;
}>;
export default Group;
