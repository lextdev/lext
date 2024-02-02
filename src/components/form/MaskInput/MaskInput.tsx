import React from "react";
import Layout from "../_layout/Layout";
import FormProps from "../_types/FormProps";
import { useColor, useTheme } from "../../../hooks";
import { InputProps } from "../_types/InputProps";
import { GetTextSizeValue } from "../../../helpers";
import MaskInput, {
  MaskInputProps as RNMIMaskInputProps,
} from "react-native-mask-input";

export type MaskInputProps = RNMIMaskInputProps & InputProps & {};

const CustomMaskInput: FormProps<MaskInputProps> = (props) => {
  const { layout, color, fontSize, placeholderTextColor, ...textInputProps } =
    props;
  const { theme } = useTheme();
  const defaultProps = theme?.components.Input.default;

  const getColor = useColor();
  return (
    <Layout layout={layout}>
      <MaskInput
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

export default CustomMaskInput;
