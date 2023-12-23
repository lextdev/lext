import { FC } from "react";
import LayoutProps from "./LayoutProps";

type FormProps<P = object> = FC<P & LayoutProps>;

export default FormProps;
