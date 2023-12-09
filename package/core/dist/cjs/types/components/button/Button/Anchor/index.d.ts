import { FC, ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";
import { TextProps } from "../Text/DefaultProps";
type AnchorProps = TouchableOpacityProps & TextProps & {
    children: ReactNode;
};
declare const Anchor: FC<AnchorProps>;
export default Anchor;
