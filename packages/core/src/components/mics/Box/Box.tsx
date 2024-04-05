import { ThemeProps } from "@/types"
import { ViewStyle } from "@/interfaces"
import styled from "@emotion/native"

type CustomBoxProps = ViewStyle & {
  variant?: string
}

const Box = styled.View<CustomBoxProps>(
  ({ variant, theme, style: _style, children: _children, ...attrProps }) => {
    const { getComponent, styleParse } = theme as ThemeProps

    const variantName = variant ?? getComponent?.Box?.defaultVariant
    const defaultProps = getComponent?.Box?.variants[variantName] ?? {}

    return styleParse({
      ...defaultProps,
      ...attrProps,
    })
  },
)

export default Box
