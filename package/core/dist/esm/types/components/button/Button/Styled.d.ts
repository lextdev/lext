/// <reference types="react" />
import { ThemeProps } from "../../../styles/Theme";
declare const StyledButton: import("@emotion/native").StyledComponent<import("react-native").TouchableOpacityProps & {
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("../../../interfaces/ButtonInterface").default & {
    backgroundColor?: keyof import("../../../types/ColorsProps").default | undefined;
    width?: import("react-native").DimensionValue | undefined;
    variant?: "filled" | "outline" | undefined;
    paddingVertical?: number | undefined;
    paddingHorizontal?: number | undefined;
    borderRadius?: number | undefined;
    size?: "lg" | "md" | "sm" | undefined;
    minHeight?: import("react-native").DimensionValue | undefined;
    color?: keyof import("../../../types/ColorsProps").default | undefined;
} & ThemeProps, {}, {
    ref?: import("react").Ref<import("react-native").TouchableOpacity> | undefined;
}>;
export default StyledButton;
