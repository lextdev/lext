/// <reference types="react" />
declare const useTheme: () => {
    colorScheme: import("../types/ColorSchemeProps").default;
    setColorScheme: import("react").Dispatch<import("react").SetStateAction<import("../types/ColorSchemeProps").default>>;
    theme: import("@emotion/react").Theme;
};
export default useTheme;
