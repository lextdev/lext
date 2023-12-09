import React, { FC, ReactNode } from "react";
import { SafeAreaView as RSafeAreaView, ViewProps } from "react-native";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
import { useTheme } from "@emotion/react";
import { ThemeInterface } from "../../../interfaces";

type SafeAreaViewProps = {
  children: ReactNode;
  backgroundColor?: ColorTypeProps | null;
} & ViewProps;

const SafeAreaView: FC<SafeAreaViewProps> = ({
  children,
  backgroundColor = "background",
}) => {
  const theme: ThemeInterface = useTheme();

  return (
    <RSafeAreaView
      style={{
        flex: 1,
        backgroundColor: backgroundColor
          ? theme.colors[backgroundColor]
          : undefined,
      }}
    >
      {children}
    </RSafeAreaView>
  );
};

export default SafeAreaView;
