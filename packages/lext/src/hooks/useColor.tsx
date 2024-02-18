import { ColorsProps } from "../types";
import useTheme from "./useTheme";

const useColor = () => {
  const { colorScheme, theme } = useTheme();
  const { colors } = theme;

  const getColor = (color: keyof ColorsProps) => colors[colorScheme][color];

  return getColor;
};

export default useColor;
