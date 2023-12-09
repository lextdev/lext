import { ReactNode } from "react";
import { Control, FieldError } from "react-hook-form";

export type FormFieldProps = {
  label?: string;
  placeholder?: string;
  left?: ReactNode;
  right?: ReactNode;
  error?: FieldError;
  control: Control<any, any>;
  name: string;
  isDisabled?: boolean;
};
