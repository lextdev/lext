import { NativeSyntheticEvent, TargetedEvent, TouchableOpacityProps } from "react-native";
interface TouchableOpacityInterface extends TouchableOpacityProps {
    onBlur?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
}
export default TouchableOpacityInterface;
