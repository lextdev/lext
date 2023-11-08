import styled from "@emotion/native"
import { HeadingProps } from "./DefaultProps"
import { ThemeProps } from "../../utils/Theme"
import { GetColorValue, GetHeadingSizeValue } from "../../helpers"

type HeadingStyledProps = HeadingProps & ThemeProps

const Heading = styled.Text<HeadingStyledProps>((props) => {
  const { theme, style, children, ...componentProps } = props
  const defaultProps = props.theme?.components.Heading.default
  const merged = { ...defaultProps, ...componentProps }

  return {
    ...merged,
    color: GetColorValue(merged.color, theme.colors),
    fontSize: GetHeadingSizeValue(props.fontSize, theme.fontsSizes.heading),
  }
})

export default Heading
