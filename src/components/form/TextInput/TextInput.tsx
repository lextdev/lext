import React from "react";
import Layout from "../_layout/Layout";
import { TextInput, TextInputProps } from "react-native";
import FormProps from "../_types/FormProps";
import { useColor, useTheme } from "../../../hooks";
import { InputProps } from "../_types/InputProps";
import { GetTextSizeValue } from "../../../helpers";

type CustomTextInputProps = TextInputProps & InputProps & {};

const CustomTextInput: FormProps<CustomTextInputProps> = (props) => {
  const { layout, color, fontSize, placeholderTextColor, ...textInputProps } =
    props;
  const { theme } = useTheme();
  const defaultProps = theme?.components.Input.default;
  const getColor = useColor();
  return (
    <Layout layout={layout}>
      <TextInput
        style={{
          flex: 1,
          fontFamily: theme.fontFamily.monospace,
          color: getColor(color ?? defaultProps.color ?? "global"),
          fontSize: GetTextSizeValue(
            fontSize ?? defaultProps.fontSize,
            theme.fontSizes.text,
          ),
          height: "100%",
        }}
        placeholderTextColor={getColor(
          placeholderTextColor ?? defaultProps.placeholderTextColor ?? "muted",
        )}
        {...textInputProps}
      />
    </Layout>
  );
};

export default CustomTextInput;
