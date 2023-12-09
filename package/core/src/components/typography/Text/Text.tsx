import styled from "@emotion/native";

import { TextProps } from "./DefaultProps";
import { ThemeProps } from "../../../styles/Theme";
import { GetColorValue, GetTextSizeValue } from "../../../helpers";

const Text = styled.Text<TextProps & ThemeProps>((props) => {
  const { theme, style, children, ...componentProps } = props;
  const defaultProps = props.theme?.components.Text.default;
  const merged = { ...defaultProps, ...componentProps };

  return {
    ...merged,
    color: merged.color && theme.colors[merged.color],
    fontSize: GetTextSizeValue(props.fontSize, theme.fontSizes.text),
  };
});

export default Text;
