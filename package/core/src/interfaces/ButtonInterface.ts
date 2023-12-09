import { TouchableOpacityProps } from "react-native";

interface ButtonProps {
  onPress?: () => void; // Kullanıcı bileşene dokunduğunda tetiklenecek fonksiyon
  onLongPress?: () => void; // Kullanıcı bileşene uzun süre dokunduğunda tetiklenecek fonksiyon
  disabled?: boolean; // Bileşenin etkin veya devre dışı olup olmadığını belirtir
  underlayColor?: string; // Kullanıcı bileşene dokunduğunda veya üzerine geldiğinde gölgeli bir renk efekti sağlar
  activeOpacity?: number; // Kullanıcı dokunduğunda düğmenin ne kadar opak olacağını belirtir
}

export default ButtonProps;
