import { ThemeProps } from "@/types"
import { ViewStyle } from "@/interfaces"
import styled from "@emotion/native"

const View = styled.View<ViewStyle>(
  ({ children: _children, theme, ...props }) => {
    const { styleParse } = theme as ThemeProps

    return styleParse(props)
  },
)

export default View
