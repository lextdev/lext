import React from "react";
import Layout from "../_layout/Layout";
import { DimensionValue, TextInput, TextInputProps } from "react-native";
import FormProps from "../_types/FormProps";

interface CustomTextareaProps extends TextInputProps {
  height?: DimensionValue;
}

const CustomTextarea: FormProps<CustomTextareaProps> = (props) => {
  const { layout, height = 150, ...textInputProps } = props;

  return (
    <Layout height={height} alignItems="flex-start" layout={layout}>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={{ flex: 1, height: "100%" }}
        {...textInputProps}
      />
    </Layout>
  );
};

export default CustomTextarea;
