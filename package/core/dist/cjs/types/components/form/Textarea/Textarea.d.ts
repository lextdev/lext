import { DimensionValue, TextInputProps } from "react-native";
import FormProps from "../_types/FormProps";
interface CustomTextareaProps extends TextInputProps {
    height?: DimensionValue;
}
declare const CustomTextarea: FormProps<CustomTextareaProps>;
export default CustomTextarea;
