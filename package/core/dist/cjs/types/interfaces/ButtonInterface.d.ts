interface ButtonProps {
    onPress?: () => void;
    onLongPress?: () => void;
    disabled?: boolean;
    underlayColor?: string;
    activeOpacity?: number;
}
export default ButtonProps;
