import React, { FC, ReactNode } from "react";
import { SafeAreaView as RSafeAreaView, ViewProps } from "react-native";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
import { useColor } from "../../../hooks";
import {
  HandlerStateChangeEvent,
  TapGestureHandler,
  TapGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import { StatusBar, StatusBarProps } from "expo-status-bar";

type SafeAreaViewProps = {
  children: ReactNode;
  backgroundColor?: ColorTypeProps | null;
  statusBar?: StatusBarProps;
  onHandlerStateChange?: (
    event: HandlerStateChangeEvent<TapGestureHandlerEventPayload>
  ) => void;
} & ViewProps;

const SafeAreaView: FC<SafeAreaViewProps> = ({
  children,
  backgroundColor = "background",
  statusBar,
  onHandlerStateChange,
}) => {
  const getColor = useColor();
  const safeAreaView = {
    flex: 1,
    backgroundColor: backgroundColor ? getColor(backgroundColor) : undefined,
  };

  return (
    <TapGestureHandler onHandlerStateChange={onHandlerStateChange}>
      <RSafeAreaView style={safeAreaView}>
        {children}
        <StatusBar {...statusBar} />
      </RSafeAreaView>
    </TapGestureHandler>
  );
};

export default SafeAreaView;
