import FormProps from "../_types/FormProps";
import { CustomModalProps } from "../../mics/Modal/Modal";
type CustomSelectBoxProps = {
    modal: CustomModalProps;
    onPress?: () => any;
};
declare const CustomSelectBox: FormProps<CustomSelectBoxProps>;
export default CustomSelectBox;
