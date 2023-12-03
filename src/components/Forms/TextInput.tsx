import { FC } from "react";
import { Controller } from "react-hook-form";
import { TextInput as RtextInput, TextInputProps } from "react-native";

import { FormFieldProps } from "./_define";
import Layout from "./_layout";

const TextInput: FC<FormFieldProps & TextInputProps> = (props) => {
  const { label, left, right, error, name, control, ...inputComponent } = props;
  const LayoutProps = {
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
          <RtextInput
            style={{ flex: 1 }}
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

export default TextInput;
