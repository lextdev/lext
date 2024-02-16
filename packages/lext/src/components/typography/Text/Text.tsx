import styled from "@emotion/native";

import { TextProps } from "./DefaultProps";
import { ThemeProps } from "../../../styles/Theme";
import { GetTextSizeValue } from "../../../helpers";
import { useColor } from "../../../hooks";

const Text = styled.Text<TextProps & ThemeProps>(props => {
  const getColor = useColor();
  const { theme, style, children, ...componentProps } = props;
  const defaultProps = props.theme?.components.Text.default;
  const merged = { ...defaultProps, ...componentProps };

  return {
    ...merged,
    fontFamily: theme.fontFamily.text,
    color: merged.color && getColor(merged.color),
    fontSize: GetTextSizeValue(merged.fontSize, theme.fontSizes.text),
  };
});

export default Text;
