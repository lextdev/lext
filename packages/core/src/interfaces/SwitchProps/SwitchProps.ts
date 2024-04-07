import { SwitchProps as RNSwitchProps } from "react-native"
import { ThemeMainColorInterface } from "../ThemeColorInterface/ThemeColorInterface"

export interface SwitchProps extends RNSwitchProps {
  thumbColor?: keyof ThemeMainColorInterface
  trackColor?: {
    false?: keyof ThemeMainColorInterface
    true?: keyof ThemeMainColorInterface
  }
  ios_backgroundColor?: keyof ThemeMainColorInterface
}
