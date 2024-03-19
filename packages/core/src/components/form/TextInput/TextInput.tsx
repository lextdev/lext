import { InputRef, TextStyle } from "@/interfaces"
import { TextInput as RNTextInput, TextInputProps } from "react-native"
import { useTheme } from "@/hooks"
import Layout, { CustomLayoutProps } from "../Layout/Layout"
import React, { forwardRef } from "react"

export type CustomInputProps = CustomLayoutProps &
  TextInputProps & {
    inputStyle?: TextStyle
  }

const TextInput = forwardRef<InputRef, CustomInputProps>((props, ref) => {
  const { getComponent } = useTheme()
  const {
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
  } = props

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
      <RNTextInput
        ref={ref}
        {...inputProps}
        style={inputStyle ?? defaultProps.input}
      />
    </Layout>
  )
})

TextInput.displayName = "TextInput"

export default TextInput
