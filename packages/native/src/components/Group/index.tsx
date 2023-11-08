import styled from "@emotion/native"
import { GroupProps } from "./DefaultProps"
import { ThemeProps } from "../../utils"

const Group = styled.View<GroupProps & ThemeProps>((props) => {
  const { theme, style, children, ...componentProps } = props
  const defaultProps = props.theme?.components.Group.default
  const merged = { ...defaultProps, ...componentProps }

  return {
    gap: props.theme.defaultOptions.gap,
    flexDirection: "row",
    ...merged,
  }
})

export default Group
