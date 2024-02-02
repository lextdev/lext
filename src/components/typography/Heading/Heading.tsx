import styled from "@emotion/native";

import { HeadingProps } from "./DefaultProps";
import { ThemeProps } from "../../../styles/Theme";
import { GetHeadingSizeValue } from "../../../helpers";
import { useColor } from "../../../hooks";

type HeadingStyledProps = HeadingProps & ThemeProps;

const Heading = styled.Text<HeadingStyledProps>(props => {
  const { theme, style, children, ...componentProps } = props;
  const defaultProps = props.theme?.components.Heading.default;
  const merged = { ...defaultProps, ...componentProps };
  const getColor = useColor();

  return {
    fontFamily: theme.fontFamily.heading,
    ...merged,
    color: merged.color && getColor(merged.color),
    fontSize: GetHeadingSizeValue(props.fontSize, theme.fontSizes.heading),
  };
});

export default Heading;
