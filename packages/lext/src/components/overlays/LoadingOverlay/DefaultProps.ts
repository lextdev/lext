import { FlexStyle } from "react-native";
import { ColorTypeProps } from "../../../helpers/GetColorValue";

export type LoadingOverlayProps = {
  alignItems?: FlexStyle["alignItems"];
  justifyContent?: FlexStyle["justifyContent"];
  gap?: FlexStyle["gap"];
  flex?: FlexStyle["flex"];
  backgroundColor?: ColorTypeProps;
  backgroundOpacity?: number;
};

export type LoadingOverlayComponentThemeProps = {
  default: LoadingOverlayProps;
};

export const LoadingOverlayComponentThemeData: LoadingOverlayComponentThemeProps =
  {
    default: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "secondary",
      backgroundOpacity: 0.8,
    },
  };
