import { CheckboxComponentProps } from "@/interfaces"
import { Pressable } from "react-native"
import { useTheme } from "@/hooks"
import Box from "@/components/mics/Box/Box"
import React, { FC } from "react"
import Text from "@/components/typography/Text/Text"

const Checkbox: FC<CheckboxComponentProps> = ({
  label,
  checked,
  onChange,
  variant,
  checkboxStyle,
  labelStyle,
  boxStyle,
  checkboxActive,
}) => {
  const { getComponent, styleParse } = useTheme()

  const variantName = variant ?? getComponent?.Checkbox?.defaultVariant
  const defaultProps = getComponent?.Checkbox?.variants[variantName]

  const currentLabelStyle = { ...defaultProps?.label, ...labelStyle }
  const currentCheckboxStyle = { ...defaultProps?.checkbox, ...checkboxStyle }
  const currentBoxStyle = {
    ...defaultProps?.box,
    ...boxStyle,
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
    <Pressable onPress={toggleCheckbox} style={styleParse(currentBoxStyle)}>
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
