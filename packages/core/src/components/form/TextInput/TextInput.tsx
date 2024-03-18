import { TextInputProps } from "react-native"
import { TextStyle, ViewStyle } from "@/interfaces"
import { ThemeProps } from "@/types"
import { useTheme } from "@/hooks"
import Layout, { CustomLayoutProps } from "../Layout/Layout"
import React, { FC } from "react"
import styled from "@emotion/native"

type CustomInputProps = CustomLayoutProps &
  TextInputProps & {
    inputStyle?: TextStyle
  }

const TextInputStyled = styled.TextInput<TextStyle & ViewStyle>(
  ({ color, backgroundColor, children: _children, theme, ...attrProps }) => {
    const { getTextColor, getMainColor } = theme as ThemeProps

    return {
      ...attrProps,
      backgroundColor: getMainColor(backgroundColor ?? "background"),
      color: getTextColor(color ?? "global"),
    }
  },
)

const TextInput: FC<CustomInputProps> = ({
  children: _children,
  variant,
  inputStyle,
  allowFontScaling,
  autoCapitalize,
  autoComplete,
  autoCorrect,
  autoFocus,
  blurOnSubmit,
  caretHidden,
  contextMenuHidden,
  defaultValue,
  editable,
  keyboardType,
  inputMode,
  maxLength,
  multiline,
  onBlur,
  onChange,
  onChangeText,
  onContentSizeChange,
  onEndEditing,
  onPressIn,
  onPressOut,
  onFocus,
  onSelectionChange,
  onSubmitEditing,
  onTextInput,
  onScroll,
  onKeyPress,
  placeholder,
  placeholderTextColor,
  readOnly,
  returnKeyType,
  enterKeyHint,
  secureTextEntry,
  selectTextOnFocus,
  selection,
  selectionColor,
  textAlign,
  testID,
  inputAccessoryViewID,
  value,
  maxFontSizeMultiplier,
  ...attrLayout
}) => {
  const { getComponent } = useTheme()
  const variantName = variant ?? getComponent?.Input?.defaultVariant
  const defaultProps = getComponent?.Input?.variants[variantName]

  const inputProps = {
    allowFontScaling,
    autoCapitalize,
    autoComplete,
    autoCorrect,
    autoFocus,
    blurOnSubmit,
    caretHidden,
    contextMenuHidden,
    defaultValue,
    editable,
    keyboardType,
    inputMode,
    maxLength,
    multiline,
    onBlur,
    onChange,
    onChangeText,
    onContentSizeChange,
    onEndEditing,
    onPressIn,
    onPressOut,
    onFocus,
    onSelectionChange,
    onSubmitEditing,
    onTextInput,
    onScroll,
    onKeyPress,
    placeholder,
    placeholderTextColor,
    readOnly,
    returnKeyType,
    enterKeyHint,
    secureTextEntry,
    selectTextOnFocus,
    selection,
    selectionColor,
    textAlign,
    testID,
    inputAccessoryViewID,
    value,
    maxFontSizeMultiplier,
  }

  return (
    <Layout variant={variantName} {...attrLayout}>
      <TextInputStyled
        {...inputProps}
        style={inputStyle ?? defaultProps.input}
      />
    </Layout>
  )
}

export default TextInput
