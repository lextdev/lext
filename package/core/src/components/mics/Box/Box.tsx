import styled from "@emotion/native";

import { BoxProps } from "./DefaultProps";
import { ThemeProps } from "../../../styles/Theme";
import { useColor } from "../../../hooks";

const Box = styled.View<BoxProps & ThemeProps>((props) => {
  const { theme, style, children, ...componentProps } = props;
  const defaultProps = props.theme?.components.Box.default;
  const merged = { ...defaultProps, ...componentProps };
  const getColor = useColor();

  return {
    paddingHorizontal: theme.defaultOptions.paddingHorizontal,
    paddingVertical: theme.defaultOptions.paddingVertical,
    ...merged,
    backgroundColor: merged.backgroundColor && getColor(merged.backgroundColor),
  };
});

export default Box;
