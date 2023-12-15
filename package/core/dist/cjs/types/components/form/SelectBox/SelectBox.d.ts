import FormProps from "../_types/FormProps";
import { TextInputProps } from "react-native";
import { CustomModalProps } from "../../mics/Modal/Modal";
type DataProps = {
    image?: string;
    value: TextInputProps["value"];
    description?: string;
    label: string;
};
interface CustomSelectBoxProps extends TextInputProps {
    modal: CustomModalProps;
    onPress?: () => any;
    data: DataProps[];
    defaultSelectMessage?: string;
    onChange?: ((e: any) => void) | undefined;
}
declare const CustomSelectBox: FormProps<CustomSelectBoxProps>;
export default CustomSelectBox;
