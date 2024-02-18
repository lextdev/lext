import { Alert, AlertButton } from "react-native";

type CustomAlertProps = {
  title: string;
  message?: string;
  options?: AlertButton[];
};

const CustomAlert = (data: CustomAlertProps) => {
  return Alert.alert(data.title, data.message, data.options);
};

export default CustomAlert;
