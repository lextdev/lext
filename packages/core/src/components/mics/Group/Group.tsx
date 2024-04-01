import { FlexStyle } from "react-native"
import { ThemeProps } from "@/types"
import styled from "@emotion/native"

const Group = styled.View<FlexStyle>(
  ({ theme, style: _style, children: _children, ...attrProps }) => {
    const { styleParse } = theme as ThemeProps

    return styleParse({
      flexDirection: "row",
      ...attrProps,
    })
  },
)

export default Group
