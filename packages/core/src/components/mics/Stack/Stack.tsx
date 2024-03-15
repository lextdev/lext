import { FlexStyle } from "react-native"
import styled from "@emotion/native"

const Stack = styled.View<FlexStyle>(
  ({ theme: _theme, style: _style, children: _children, ...attrProps }) => {
    return {
      flexDirection: "column",
      ...attrProps,
    }
  },
)

export default Stack
