import { FC } from "react";
import { TouchableOpacityProps } from "react-native";
import { TextProps } from "../../typography/Text/DefaultProps";
type AnchorProps = TouchableOpacityProps & TextProps & {
    children: string;
};
declare const Anchor: FC<AnchorProps>;
export default Anchor;
