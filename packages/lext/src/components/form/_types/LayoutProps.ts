import { ReactElement } from "react";

type LayoutProps = {
  layout?: {
    label?: string;
    description?: string;
    error?: string;
    left?: ReactElement;
    right?: ReactElement;
    variant?: "md" | "sm";
  };
};

export default LayoutProps;
