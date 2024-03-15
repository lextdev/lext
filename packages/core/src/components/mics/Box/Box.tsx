import ThemeProps from "@/types/ThemeProps/ThemeProps"
import ViewStyle from "@/interfaces/ViewStyle/ViewStyle"
import styled from "@emotion/native"

type CustomBoxProps = ViewStyle & {
  variant?: string
}

const Box = styled.View<CustomBoxProps>(
  ({ variant, theme, style: _style, children: _children, ...attrProps }) => {
    const { getComponent, getMainColor } = theme as ThemeProps

    const variantName = variant ?? getComponent?.Box?.defaultVariant
    const defaultProps = getComponent?.Box?.variants[variantName] ?? {}

    const backgroundColor = getMainColor(
      attrProps.backgroundColor ?? defaultProps.backgroundColor ?? "background",
    )

    return {
      ...defaultProps,
      ...attrProps,
      backgroundColor,
    }
  },
)

export default Box
