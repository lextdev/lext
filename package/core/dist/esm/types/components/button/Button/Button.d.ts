import { FC, ReactNode } from "react";
import { ButtonProps } from "./DefaultProps";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
declare const Button: FC<ButtonProps & {
    children: ReactNode | string;
    color?: ColorTypeProps;
}>;
export default Button;
