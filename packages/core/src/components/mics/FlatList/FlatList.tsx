import { FlatListStyle } from "@/interfaces"
import { ThemeProps } from "@/types"
import styled from "@emotion/native"

const FlatList = styled.FlatList<FlatListStyle>(
  ({ children: _children, theme, ...props }) => {
    const { styleParse } = theme as ThemeProps

    return styleParse(props)
  },
)

export default FlatList
