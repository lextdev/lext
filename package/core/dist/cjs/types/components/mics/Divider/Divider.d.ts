import { FC } from "react";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
type DividerProps = {
    label?: string;
    color?: ColorTypeProps;
};
declare const Divider: FC<DividerProps>;
export default Divider;
