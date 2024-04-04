import { Pressable } from "react-native"
import { TextStyle, ViewStyle } from "@/interfaces"
import { useTheme } from "@/hooks"
import Box from "@/components/mics/Box/Box"
import React, { FC } from "react"
import Text from "@/components/typography/Text/Text"

type CheckboxProps = {
  label: string
  checked: boolean
  onChange: (isChecked: boolean) => void
  labelStyle?: TextStyle
  checkboxStyle?: ViewStyle
  containerStyle?: ViewStyle
  variant?: string
  checkboxActive?: ViewStyle
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  variant,
  checkboxStyle,
  labelStyle,
  containerStyle,
  checkboxActive,
}) => {
  const { getComponent, styleParse } = useTheme()

  const variantName = variant ?? getComponent?.Checkbox?.defaultVariant
  const defaultProps = getComponent?.Checkbox?.variants[variantName]

  const currentLabelStyle = { ...defaultProps?.label, ...labelStyle }
  const currentCheckboxStyle = { ...defaultProps?.checkbox, ...checkboxStyle }
  const currentContainerStyle = {
    ...defaultProps?.container,
    ...containerStyle,
  }
  const currentCheckboxActiveColor = {
    ...defaultProps.checkboxActive,
    ...checkboxActive,
  }

  const toggleCheckbox = () => {
    if (onChange) {
      onChange(!checked)
    }
  }

  return (
    <Pressable
      onPress={toggleCheckbox}
      style={styleParse(currentContainerStyle)}
    >
      <Box
        style={[
          styleParse(currentCheckboxStyle),
          checked && styleParse(currentCheckboxActiveColor),
        ]}
      />
      <Text style={styleParse(currentLabelStyle)}>{label}</Text>
    </Pressable>
  )
}

export default Checkbox
