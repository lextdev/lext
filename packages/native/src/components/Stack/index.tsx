import styled from "@emotion/native"
import { StackProps } from "./DefaultProps"
import { ThemeProps } from "../../utils"

const Stack = styled.View<StackProps & ThemeProps>((props) => {
  const { theme, style, children, ...componentProps } = props
  const defaultProps = props.theme?.components.Stack.default
  const merged = { ...defaultProps, ...componentProps }

  return {
    gap: props.theme.defaultOptions.gap,
    ...merged,
  }
})

export default Stack
