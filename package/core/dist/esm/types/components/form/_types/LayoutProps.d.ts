import { ReactElement } from "react";
type LayoutProps = {
    layout?: {
        label?: string;
        description?: string;
        error?: string;
        left?: ReactElement;
        right?: ReactElement;
    };
};
export default LayoutProps;
