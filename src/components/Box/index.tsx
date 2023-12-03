import styled from "@emotion/native";

import { BoxProps } from "./DefaultProps";
import { GetColorValue } from "../../helpers";
import { ThemeProps } from "../../utils/Theme";

const Box = styled.View<BoxProps & ThemeProps>((props) => {
  const { theme, style, children, ...componentProps } = props;
  const defaultProps = props.theme?.components.Box.default;
  const merged = { ...defaultProps, ...componentProps };

  return {
    paddingHorizontal: theme.defaultOptions.paddingHorizontal,
    paddingVertical: theme.defaultOptions.paddingVertical,
    ...merged,
    backgroundColor: GetColorValue(merged.backgroundColor, props.theme?.colors),
  };
});

export default Box;
