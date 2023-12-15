import { FC, ReactNode } from "react";
import { ModalProps } from "react-native";
type CustomModalHeaderProps = {
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
};
export type CustomModalProps = ModalProps & {
    header?: CustomModalHeaderProps;
};
declare const CustomModal: FC<CustomModalProps & {
    children: ReactNode;
}>;
export default CustomModal;
