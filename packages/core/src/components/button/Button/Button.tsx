import { ButtonComponentProps } from "@/interfaces"
import { TouchableOpacity } from "react-native"
import { useTheme } from "@/hooks"
import Group from "@/components/mics/Group/Group"
import React, { FC } from "react"
import Stack from "@/components/mics/Stack/Stack"
import Text from "@/components/typography/Text/Text"
import View from "@/components/mics/View/View"

const Button: FC<ButtonComponentProps> = ({
  label,
  description,
  backgroundColor,
  borderColor,
  color,
  gap = 5,
  left,
  right,
  variant,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  onBlur,
  onFocus,
  disabled,
  pressRetentionOffset,
  activeOpacity = 0.8,
  delayLongPress,
  delayPressIn,
  delayPressOut,
  hitSlop,
  onLayout,
  ...props
}) => {
  const { getComponent } = useTheme()
  const variantName = variant ?? getComponent?.Button?.defaultVariant
  const defaultProps = getComponent?.Button?.variants[variantName]

  const touchableOpacityProps = {
    onPress,
    onPressIn,
    onPressOut,
    onLongPress,
    onBlur,
    onFocus,
    delayLongPress,
    disabled,
    hitSlop,
    pressRetentionOffset,
    activeOpacity,
    delayPressIn,
    delayPressOut,
    onLayout,
  }

  const gapStyle = gap ?? defaultProps.gap
  const boxStyle = {
    ...defaultProps.box,
    ...props.boxStyle,
  }
  const labelStyle = {
    ...defaultProps?.label,
    ...props.labelStyle,
  }
  const disabledBoxStyle = {
    ...defaultProps?.disabledBox,
    ...props.disabledBoxStyle,
  }
  const descriptionStyle = {
    ...defaultProps.description,
    ...props.descriptionStyle,
  }

  return (
    <TouchableOpacity {...touchableOpacityProps}>
      <View
        {...boxStyle}
        backgroundColor={backgroundColor ?? boxStyle.backgroundColor}
        borderColor={borderColor ?? boxStyle.borderColor}
        style={disabled && disabledBoxStyle}
      >
        <Group
          gap={gapStyle}
          justifyContent="space-between"
          alignItems="center"
        >
          {left && left}
          <Stack gap={0} alignItems="center">
            <Text {...labelStyle} color={color ?? labelStyle.color}>
              {label}
            </Text>
            {description && (
              <Text
                {...descriptionStyle}
                color={color ?? descriptionStyle.color}
              >
                {description}
              </Text>
            )}
          </Stack>
          {right && right}
        </Group>
      </View>
    </TouchableOpacity>
  )
}

export default Button
