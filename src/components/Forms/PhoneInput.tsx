import { FC } from "react";
import { Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import MaskInput from "react-native-mask-input";

import { FormFieldProps } from "./_define";
import Layout from "./_layout";

const PHONE_MASKED = [
  "5",
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
];

const PhoneInput: FC<FormFieldProps & TextInputProps> = (props) => {
  const {
    label,
    left,
    right,
    error,
    name,
    control,
    isDisabled,
    ...inputComponent
  } = props;
  const LayoutProps = {
    isDisabled,
    label,
    left,
    right,
    error,
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
            mask={PHONE_MASKED}
            style={{ flex: 1 }}
            keyboardType="phone-pad"
            returnKeyType="done"
            {...inputComponent}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
          />
        </Layout>
      )}
    />
  );
};

export default PhoneInput;
