import styled from "@emotion/native"
import { TextProps } from "./DefaultProps"
import { ThemeProps } from "../../utils/Theme"
import { GetColorValue, GetTextSizeValue } from "../../helpers"

const Text = styled.Text<TextProps & ThemeProps>((props) => {
  const { theme, style, children, ...componentProps } = props
  const defaultProps = props.theme?.components.Text.default
  const merged = { ...defaultProps, ...componentProps }

  return {
    ...merged,
    color: GetColorValue(merged.color, theme.colors),
    fontSize: GetTextSizeValue(props.fontSize, theme.fontsSizes.text),
  }
})

export default Text
