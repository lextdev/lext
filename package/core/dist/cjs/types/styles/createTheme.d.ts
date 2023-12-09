import { ThemeInterface } from "../interfaces";
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
type DeepPartialTheme = DeepPartial<ThemeInterface>;
declare const createTheme: (newTheme?: DeepPartialTheme) => ThemeInterface;
export default createTheme;
