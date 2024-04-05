import { FormSwitchComponentProps } from "@/interfaces"
import { Switch as RNSwitch } from "react-native"
import { useTheme } from "@/hooks"
import React, { FC } from "react"

const Switch: FC<FormSwitchComponentProps> = ({
  variant,
  thumbColor,
  ios_backgroundColor,
  trackColor,
  ...props
}) => {
  const { getComponent, getMainColor } = useTheme()

  const variantName = variant ?? getComponent?.Switch?.defaultVariant
  const defaultProps = getComponent?.Switch?.variants[variantName] ?? {}

  const attrProps = {
    thumbColor: getMainColor(
      thumbColor ?? defaultProps.thumbColor ?? "primary",
    ),
    ios_backgroundColor: getMainColor(
      ios_backgroundColor ?? defaultProps.ios_backgroundColor ?? "primary",
    ),
    trackColor: {
      true: getMainColor(
        trackColor?.true ?? defaultProps.trackColor?.true ?? "primary",
      ),
      false: getMainColor(
        trackColor?.false ?? defaultProps.trackColor?.false ?? "primary",
      ),
    },
  }

  return <RNSwitch {...attrProps} {...props} />
}

export default Switch
