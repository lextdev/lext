import React, { FC, ReactNode } from "react";
import { ColorSchemeProps } from "../types";
export declare const ColorSchemeContext: React.Context<ColorSchemeProps>;
export declare const ColorSchemeContextDispatch: React.Context<React.Dispatch<React.SetStateAction<ColorSchemeProps>>>;
declare const ColorSchemeProvider: FC<{
    children: ReactNode;
    themeColorScheme?: ColorSchemeProps;
}>;
export default ColorSchemeProvider;
