import { FC, ReactNode } from "react";
import { ViewProps } from "react-native";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
type SafeAreaViewProps = {
    children: ReactNode;
    backgroundColor?: ColorTypeProps | null;
} & ViewProps;
declare const SafeAreaView: FC<SafeAreaViewProps>;
export default SafeAreaView;
