import styled from "@emotion/native"
import { BoxProps } from "./DefaultProps"
import { ThemeProps } from "../../utils"
import { GetColorValue } from "../../helpers"

const Box = styled.View<BoxProps & ThemeProps>((props) => {
  const { theme, style, children, ...componentProps } = props
  const defaultProps = props.theme?.components.Box.default
  const merged = { ...defaultProps, ...componentProps }

  return {
    padding: theme.defaultOptions.padding,
    ...merged,
    backgroundColor: GetColorValue(merged.backgroundColor, props.theme?.colors),
  }
})

export default Box
