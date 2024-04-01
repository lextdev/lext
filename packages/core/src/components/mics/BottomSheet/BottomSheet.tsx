import { ReactNode, forwardRef } from "react"
import { ViewStyle } from "@/interfaces"
import { useTheme } from "@/hooks"
import RNBottomSheet, {
  BottomSheetMethods,
  BottomSheetProps as RNBottomSheetProps,
} from "@devvie/bottom-sheet"
import React from "react"

type BottomSheetProps = RNBottomSheetProps & {
  children: ReactNode
  variant?: string
  style?: ViewStyle
  dragHandleStyle?: ViewStyle
}

const BottomSheet = forwardRef<BottomSheetMethods, BottomSheetProps>(
  ({ children, variant, style, dragHandleStyle, ...props }, ref) => {
    const { getComponent, styleParse } = useTheme()

    const variantName = variant ?? getComponent?.BottomSheet?.defaultVariant
    const defaultProps = getComponent?.BottomSheet?.variants[variantName]

    const styleProps = { ...defaultProps.style, ...style }
    const dragHandleStyleProps = {
      ...defaultProps.dragHandleStyle,
      dragHandleStyle,
    }

    return (
      <RNBottomSheet
        ref={ref}
        style={styleParse(styleProps)}
        dragHandleStyle={styleParse(dragHandleStyleProps)}
        {...props}
      >
        {children}
      </RNBottomSheet>
    )
  },
)
BottomSheet.displayName = "BottomSheet"

export default BottomSheet
