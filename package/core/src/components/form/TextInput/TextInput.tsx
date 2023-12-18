import React from "react";
import Layout from "../_layout/Layout";
import { TextInput, TextInputProps } from "react-native";
import FormProps from "../_types/FormProps";
import { useTheme } from "../../../hooks";

interface CustomTextInputProps extends TextInputProps {}

const CustomTextInput: FormProps<CustomTextInputProps> = (props) => {
  const { layout, ...textInputProps } = props;
  const { theme } = useTheme();
  return (
    <Layout layout={layout}>
      <TextInput
        style={{ flex: 1, fontFamily: theme.fontFamily.monospace }}
        {...textInputProps}
      />
    </Layout>
  );
};

export default CustomTextInput;
