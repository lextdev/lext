import { SvgProps as RNSSvgProps } from "react-native-svg";

declare module "react-native-svg" {
  interface SvgProps extends RNSSvgProps {
    size?: number;
  }
}
