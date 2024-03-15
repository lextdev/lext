import {
  ActivityIndicatorProps as RNActivityIndicatorProps,
  ViewProps,
} from "react-native"
import { ThemeMainColorInterface } from "../ThemeColorInterface/ThemeColorInterface"

export interface ActivityIndicatorProps
  extends RNActivityIndicatorProps,
    ViewProps {
  color?: keyof ThemeMainColorInterface
}
