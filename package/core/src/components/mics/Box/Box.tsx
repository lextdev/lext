import styled from "@emotion/native";

import { BoxProps } from "./DefaultProps";
import { ThemeProps } from "../../../styles/Theme";
import { GetColorValue } from "../../../helpers";

const Box = styled.View<BoxProps & ThemeProps>((props) => {
  const { theme, style, children, ...componentProps } = props;
  const defaultProps = props.theme?.components.Box.default;
  const merged = { ...defaultProps, ...componentProps };

  return {
    paddingHorizontal: theme.defaultOptions.paddingHorizontal,
    paddingVertical: theme.defaultOptions.paddingVertical,
    ...merged,
    backgroundColor:
      merged.backgroundColor && theme.colors[merged.backgroundColor],
  };
});

export default Box;
