import { ModalProps, TextInputProps, TouchableOpacityProps } from "react-native"
import { ReactNode } from "react"
import { SelectDataProps } from "@/types"
import {
  SwitchProps,
  ThemeMainColorInterface,
  ThemeTextColorInterface,
  ViewStyle,
} from ".."
import { TextStyle } from "../TextStyle/TextStyle"

export interface TextComponentProps extends TextStyle {
  variant?: string
}

export interface ButtonComponentProps extends TouchableOpacityProps {
  label: string
  variant?: string
  description?: string
  disabledBoxStyle?: ViewStyle
  boxStyle?: ViewStyle
  labelStyle?: TextStyle
  descriptionStyle?: TextStyle
  gap?: number
  left?: ReactNode
  right?: ReactNode
  backgroundColor?: keyof ThemeMainColorInterface
  borderColor?: keyof ThemeMainColorInterface
  color?: keyof ThemeTextColorInterface
}

export interface CheckboxComponentProps {
  label: string
  checked: boolean
  onChange: (isChecked: boolean) => void
  labelStyle?: TextStyle
  checkboxStyle?: ViewStyle
  boxStyle?: ViewStyle
  variant?: string
  checkboxActive?: ViewStyle
}

export interface FormLayoutComponentProps {
  labelStyle?: TextStyle
  descriptionStyle?: TextStyle
  layoutStyle?: ViewStyle
  errorLayoutStyle?: ViewStyle
  errorStyle?: TextStyle
  gap?: number
  variant?: string
  label?: string
  description?: string
  error?: string
  left?: ReactNode
  right?: ReactNode
}

export interface FormSelectComponentProps extends ModalComponentProps {
  data: SelectDataProps[]
  onChange?: (value: SelectDataProps) => void
  variant?: string
  itemSeparator?: JSX.Element
  value?: string | number
  itemStyle?: ViewStyle
  itemActiveStyle?: ViewStyle
  itemDescriptionStyle?: TextStyle
  itemTextStyle?: TextStyle
  itemLeftStyle?: ViewStyle
  onSelect?: () => void
  keyExtractor?: (item: SelectDataProps, index: number) => string
}

export interface FormSwitchComponentProps extends SwitchProps {
  variant?: string
}

export interface FormTextInputComponentProps
  extends FormLayoutComponentProps,
    TextInputProps {
  inputStyle?: TextStyle
}

export interface BoxComponentProps extends ViewStyle {
  variant?: string
}

export interface ModalComponentProps extends ModalProps {
  backgroundColor?: keyof ThemeMainColorInterface
  header?: JSX.Element
  safeAreaView?: boolean
}

export interface SafeAreaViewComponentProps {
  backgroundColor?: keyof ThemeMainColorInterface
}

export interface SheetComponentProps {
  children: ReactNode
  variant?: string
  touchableNativeFeedback?: boolean
  animationDamping?: number
  backdropColor?: keyof ThemeMainColorInterface
  backdropOpacity?: number
  topStyle?: ViewStyle
  lineStyle?: ViewStyle
  backgroundColor?: keyof ThemeMainColorInterface
  borderRadius?: number
}
