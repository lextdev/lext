import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { ColorSchemeProps } from "../types";
import { useStore } from "../hooks";
import { COLOR_SCHEME_KEY } from "../hooks/useTheme";

export const ColorSchemeContext = createContext<ColorSchemeProps>("lighten");
export const ColorSchemeContextDispatch = createContext<
  Dispatch<SetStateAction<ColorSchemeProps>>
>(() => {});

const ColorSchemeProvider: FC<{
  children: ReactNode;
  themeColorScheme: ColorSchemeProps;
}> = ({ children, themeColorScheme }) => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeProps>("lighten");
  const { getItem } = useStore();

  const onColorSchemeChange = async () => {
    const storeColorScheme = (await getItem(
      COLOR_SCHEME_KEY
    )) as ColorSchemeProps | null;
    setColorScheme(storeColorScheme || themeColorScheme);
  };

  useEffect(() => {
    onColorSchemeChange();
  }, []);

  return (
    <ColorSchemeContext.Provider value={colorScheme}>
      <ColorSchemeContextDispatch.Provider value={setColorScheme}>
        {children}
      </ColorSchemeContextDispatch.Provider>
    </ColorSchemeContext.Provider>
  );
};

export default ColorSchemeProvider;
