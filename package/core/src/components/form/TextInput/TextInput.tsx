import React from "react";
import Layout from "../_layout/Layout";
import { TextInput, TextInputProps } from "react-native";
import FormProps from "../_types/FormProps";

interface CustomTextInputProps extends TextInputProps {}

const CustomTextInput: FormProps<CustomTextInputProps> = (props) => {
  const { layout, ...textInputProps } = props;

  return (
    <Layout layout={layout}>
      <TextInput style={{ flex: 1 }} {...textInputProps} />
    </Layout>
  );
};

export default CustomTextInput;
