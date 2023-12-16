import { FC, ReactNode } from "react";
import { ButtonProps } from "./DefaultProps";
declare const Button: FC<ButtonProps & {
    children: ReactNode | string;
}>;
export default Button;
