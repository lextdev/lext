import { yupResolver } from "@hookform/resolvers/yup";
import { DefaultValues, useForm as RUseForm, Resolver } from "react-hook-form";
import * as yup from "yup";

type UseFormProps<T> = {
  values: T;
  validation: yup.ObjectShape;
};

const UseForm = <T extends object>({ values, validation }: UseFormProps<T>) => {
  const schema = yup.object().shape(validation);

  return RUseForm<T>({
    defaultValues: values as DefaultValues<T>,
    resolver: yupResolver(schema) as unknown as Resolver<T, any> | undefined,
  });
};

export default UseForm;
