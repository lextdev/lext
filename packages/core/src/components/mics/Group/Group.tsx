import { FlexStyle } from "react-native"
import styled from "@emotion/native"

const Group = styled.View<FlexStyle>(
  ({ theme: _theme, style: _style, children: _children, ...attrProps }) => {
    return {
      flexDirection: "row",
      ...attrProps,
    }
  },
)

export default Group
