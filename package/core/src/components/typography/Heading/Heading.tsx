import styled from "@emotion/native";

import { HeadingProps } from "./DefaultProps";
import { ThemeProps } from "../../../styles/Theme";
import { GetColorValue, GetHeadingSizeValue } from "../../../helpers";

type HeadingStyledProps = HeadingProps & ThemeProps;

const Heading = styled.Text<HeadingStyledProps>((props) => {
  const { theme, style, children, ...componentProps } = props;
  const defaultProps = props.theme?.components.Heading.default;
  const merged = { ...defaultProps, ...componentProps };

  return {
    ...merged,
    color: merged.color && theme.colors[merged.color],
    fontSize: GetHeadingSizeValue(props.fontSize, theme.fontSizes.heading),
  };
});

export default Heading;
