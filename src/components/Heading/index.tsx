import styled from "@emotion/native";

import { HeadingProps } from "./DefaultProps";
import { GetColorValue, GetHeadingSizeValue } from "../../helpers";
import { ThemeProps } from "../../utils/Theme";

type HeadingStyledProps = HeadingProps & ThemeProps;

const Heading = styled.Text<HeadingStyledProps>((props) => {
  const { theme, style, children, ...componentProps } = props;
  const defaultProps = props.theme?.components.Heading.default;
  const merged = { ...defaultProps, ...componentProps };

  return {
    ...merged,
    color: GetColorValue(merged.color, theme.colors),
    fontSize: GetHeadingSizeValue(
      props.fontSize ?? "h1",
      theme.fontsSizes.heading,
    ),
  };
});

export default Heading;
