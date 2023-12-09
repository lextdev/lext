import React from "react";
import { GridProps } from "./DefaultProps";
import { ThemeProps } from "../../../styles/Theme";
declare const _default: {
    Container: import("@emotion/native").StyledComponent<import("react-native").ViewProps & {
        theme?: import("@emotion/react").Theme | undefined;
        as?: React.ElementType<any> | undefined;
    } & GridProps & ThemeProps, {}, {
        ref?: React.Ref<import("react-native").View> | undefined;
    }>;
    Item: React.FC<{
        children: React.ReactNode;
        span: 2 | 1 | 10 | 5 | 12 | 7 | 3 | 4 | 6 | 8 | 9 | 11;
    }>;
};
export default _default;
