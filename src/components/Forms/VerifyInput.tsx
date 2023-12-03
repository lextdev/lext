import { FC } from "react";
import { Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import MaskInput from "react-native-mask-input";

import { FormFieldProps } from "./_define";
import Layout from "./_layout";

const VERIFY_MASKED = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

const VerifyInput: FC<FormFieldProps & TextInputProps> = (props) => {
  const { label, left, right, error, name, control, ...inputComponent } = props;
  const LayoutProps = {
    label,
    left,
    right,
    error,
    paddingHorizontal: 0,
  };
  const ControllerProps = {
    name,
    control,
  };

  return (
    <Controller
      {...ControllerProps}
      render={({ field: { onChange, onBlur, value } }) => (
        <Layout {...LayoutProps}>
          <MaskInput
            mask={VERIFY_MASKED}
            style={{ flex: 1, letterSpacing: 14, textAlign: "center" }}
            keyboardType="numeric"
            {...inputComponent}
            returnKeyType="done"
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
          />
        </Layout>
      )}
    />
  );
};

export default VerifyInput;
