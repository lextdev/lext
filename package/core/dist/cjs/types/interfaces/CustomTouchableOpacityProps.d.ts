import { NativeSyntheticEvent, TargetedEvent, TouchableOpacityProps } from "react-native";
interface CustomTouchableOpacityProps extends TouchableOpacityProps {
    onBlur?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
}
export default CustomTouchableOpacityProps;
