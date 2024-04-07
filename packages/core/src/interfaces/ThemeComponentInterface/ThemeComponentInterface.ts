import { SwitchProps, TextStyle, ViewStyle } from ".."
import { ThemeVariantType } from "@/types"

export type ThemeComponentTextInterface = ThemeVariantType<TextStyle>
export type ThemeComponentBoxInterface = ThemeVariantType<ViewStyle>
export type ThemeComponentButtonInterface = ThemeVariantType<{
  disabledBox?: ViewStyle
  gap?: number
  box?: ViewStyle
  label?: TextStyle
  description?: TextStyle
}>
export type ThemeComponentInputInterface = ThemeVariantType<{
  label?: TextStyle
  input?: TextStyle
  layout?: ViewStyle
  errorLayout?: ViewStyle
  description?: TextStyle
  error?: TextStyle
}>
export type ThemeComponentSwitchInterface = ThemeVariantType<SwitchProps>
export type ThemeComponentBottomSheetInterface = ThemeVariantType<{
  style?: ViewStyle
  dragHandleStyle?: ViewStyle
}>
export type ThemeComponentSelectInterface = ThemeVariantType<{
  itemStyle?: ViewStyle
  itemActiveStyle?: ViewStyle
  itemTextStyle?: TextStyle
  itemDescriptionStyle?: TextStyle
  itemLeftStyle?: ViewStyle
}>
export type ThemeComponentCheckboxInterface = ThemeVariantType<{
  checkbox?: ViewStyle
  container?: ViewStyle
  label?: TextStyle
  checkboxActive?: ViewStyle
}>
