import { TextComponentProps } from "@/interfaces"
import { ThemeProps } from "@/types"
import styled from "@emotion/native"

const Text = styled.Text<TextComponentProps>(
  ({ variant, theme, style: _style, children: _children, ...attrProps }) => {
    const { getComponent, styleParse } = theme as ThemeProps

    const variantName = variant ?? getComponent?.Text?.defaultVariant
    const defaultProps = getComponent?.Text?.variants[variantName] ?? {}

    return styleParse({
      ...defaultProps,
      ...attrProps,
    })
  },
)

export default Text
