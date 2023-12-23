import React from "react";
import Layout from "../_layout/Layout";
import { DimensionValue, TextInput, TextInputProps } from "react-native";
import FormProps from "../_types/FormProps";
import { useColor, useTheme } from "../../../hooks";
import { GetTextSizeValue } from "../../../helpers";
import { InputProps } from "../_types/InputProps";

interface CustomTextareaProps extends TextInputProps, InputProps {
  height?: DimensionValue;
}

const CustomTextarea: FormProps<CustomTextareaProps> = (props) => {
  const { layout, height = 150, color, fontSize, ...textInputProps } = props;
  const { theme } = useTheme();
  const defaultProps = theme?.components.Input.default;

  const getColor = useColor();
  return (
    <Layout height={height} alignItems="flex-start" layout={layout}>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={{
          flex: 1,
          height: "100%",
          fontFamily: theme.fontFamily.monospace,
          color: getColor(color ?? defaultProps.color ?? "global"),
          fontSize: GetTextSizeValue(
            fontSize ?? defaultProps.fontSize,
            theme.fontSizes.text
          ),
        }}
        {...textInputProps}
      />
    </Layout>
  );
};

export default CustomTextarea;
