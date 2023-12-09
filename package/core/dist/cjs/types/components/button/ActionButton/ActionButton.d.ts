import { FC, ReactNode } from "react";
import { ActionButtonProps } from "./DefaultProps";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
declare const ActionButton: FC<ActionButtonProps & {
    children: ReactNode;
    color?: ColorTypeProps;
}>;
export default ActionButton;
