import { ThemeProps } from "@/types"
import { ViewStyle } from "@/interfaces"
import styled from "@emotion/native"

const ImageBackground = styled.ImageBackground<ViewStyle>(
  ({ children: _children, theme, ...props }) => {
    const { styleParse } = theme as ThemeProps

    return styleParse(props)
  },
)

export default ImageBackground
