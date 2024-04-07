import { BoxComponentProps } from "@/interfaces"
import { ThemeProps } from "@/types"
import styled from "@emotion/native"

const Box = styled.View<BoxComponentProps>(
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
