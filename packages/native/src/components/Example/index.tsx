import styled from "@emotion/native"
import { ExampleProps } from "./DefaultProps"
import { ThemeProps } from "../../utils"

const Example = styled.View<ExampleProps & ThemeProps>((props) => {
  const { theme, style, children, ...componentProps } = props
  // const defaultProps = props.theme?.components.Example.default
  const defaultProps = {}
  const merged = { ...defaultProps, ...componentProps }

  return {
    ...merged,
  }
})

export default Example
