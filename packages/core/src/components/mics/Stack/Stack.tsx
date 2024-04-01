import { FlexStyle } from "react-native"
import { ThemeProps } from "@/types"
import styled from "@emotion/native"

const Stack = styled.View<FlexStyle>(
  ({ theme, style: _style, children: _children, ...attrProps }) => {
    const { styleParse } = theme as ThemeProps

    return styleParse({
      flexDirection: "column",
      ...attrProps,
    })
  },
)

export default Stack
