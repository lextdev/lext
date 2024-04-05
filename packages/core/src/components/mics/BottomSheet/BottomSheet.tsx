import { BottomSheetComponentProps } from "@/interfaces"
import { forwardRef } from "react"
import { useTheme } from "@/hooks"
import RNBottomSheet, { BottomSheetMethods } from "@devvie/bottom-sheet"
import React from "react"

const BottomSheet = forwardRef<BottomSheetMethods, BottomSheetComponentProps>(
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
