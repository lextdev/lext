import { Theme } from "@emotion/react";
import { FC, ReactNode } from "react";
type ThemeProviderProps = {
    children: ReactNode;
    theme: Theme;
};
declare const ThemeProvider: FC<ThemeProviderProps>;
export default ThemeProvider;
