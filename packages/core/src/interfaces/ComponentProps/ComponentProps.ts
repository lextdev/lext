import { BottomSheetProps } from "@devvie/bottom-sheet"
import { ModalProps, PressableProps, TextInputProps } from "react-native"
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

export interface ButtonComponentProps extends PressableProps {
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
  containerStyle?: ViewStyle
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
  onChange?: (value: string | number) => void
  variant?: string
  itemSeparator?: JSX.Element
  value?: string | number
  itemStyle?: ViewStyle
  itemActiveStyle?: ViewStyle
  itemDescriptionStyle?: TextStyle
  itemTextStyle?: TextStyle
  itemLeftStyle?: ViewStyle
}

export interface FormSwitchComponentProps extends SwitchProps {
  variant?: string
}

export interface FormTextInputComponentProps
  extends FormLayoutComponentProps,
    TextInputProps {
  inputStyle?: TextStyle
}

export interface BottomSheetComponentProps extends BottomSheetProps {
  children: ReactNode
  variant?: string
  style?: ViewStyle
  dragHandleStyle?: ViewStyle
}

export interface BoxComponentProps extends ViewStyle {
  variant?: string
}

export interface ModalComponentProps extends ModalProps {
  backgroundColor?: keyof ThemeMainColorInterface
  header?: JSX.Element
}

export interface SafeAreaViewComponentProps {
  backgroundColor?: keyof ThemeMainColorInterface
}
