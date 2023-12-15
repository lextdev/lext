import { FC, ReactNode } from "react";
import LayoutProps from "../_types/LayoutProps";
import { DimensionValue, FlexStyle } from "react-native";
type CustomLayoutProps = {
    children: ReactNode;
    height?: DimensionValue;
    alignItems?: FlexStyle["alignItems"];
    transparent?: boolean;
};
declare const Layout: FC<LayoutProps & CustomLayoutProps>;
export default Layout;
