import { Pressable } from "react-native"
import { TextStyle, ViewStyle } from "@/interfaces"
import { ThemeMainColorInterface } from "@/interfaces/ThemeColorInterface/ThemeColorInterface"
import { useTheme } from "@/hooks"
import Box from "@/components/mics/Box/Box"
import React, { FC, useState } from "react"
import Text from "@/components/typography/Text/Text"

type CheckboxProps = {
  label: string
  checked: boolean
  onChange: (isChecked: boolean) => void
  labelStyle?: TextStyle
  checkboxStyle?: ViewStyle
  containerStyle?: ViewStyle
  variant?: string
  checkedColor?: keyof ThemeMainColorInterface
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  variant,
  checkboxStyle,
  labelStyle,
  containerStyle,
  checkedColor,
}) => {
  const [isChecked, setIsChecked] = useState(checked)
  const { getComponent, styleParse, getMainColor } = useTheme()

  const variantName = variant ?? getComponent?.Checkbox?.defaultVariant
  const defaultProps = getComponent?.Checkbox?.variants[variantName]

  const currentLabelStyle = { ...defaultProps?.label, ...labelStyle }
  const currentCheckboxStyle = { ...defaultProps?.checkbox, ...checkboxStyle }
  const currentContainerStyle = { ...defaultProps?.container, containerStyle }
  const currentCheckedColor = checkedColor ?? defaultProps?.checkedColor

  const toggleCheckbox = () => {
    const newValue = !isChecked
    setIsChecked(newValue)
    onChange(newValue)
  }

  return (
    <Pressable
      onPress={toggleCheckbox}
      style={styleParse(currentContainerStyle)}
    >
      <Box
        style={[
          styleParse(currentCheckboxStyle),
          isChecked
            ? { backgroundColor: getMainColor(currentCheckedColor) }
            : null,
        ]}
      />
      <Text style={styleParse(currentLabelStyle)}>{label}</Text>
    </Pressable>
  )
}

export default Checkbox
