import React, { FC, ReactNode } from "react";
import { SafeAreaView as RSafeAreaView, ViewProps } from "react-native";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
import { useColor } from "../../../hooks";
import {
  HandlerStateChangeEvent,
  TapGestureHandler,
  TapGestureHandlerEventPayload,
} from "react-native-gesture-handler";

type SafeAreaViewProps = {
  children: ReactNode;
  backgroundColor?: ColorTypeProps | null;
  onHandlerStateChange?: (
    event: HandlerStateChangeEvent<TapGestureHandlerEventPayload>
  ) => void;
} & ViewProps;

const SafeAreaView: FC<SafeAreaViewProps> = ({
  children,
  backgroundColor = "background",
  onHandlerStateChange,
}) => {
  const getColor = useColor();
  return (
    <TapGestureHandler onHandlerStateChange={onHandlerStateChange}>
      <RSafeAreaView
        style={{
          flex: 1,
          backgroundColor: backgroundColor
            ? getColor(backgroundColor)
            : undefined,
        }}
      >
        {children}
      </RSafeAreaView>
    </TapGestureHandler>
  );
};

export default SafeAreaView;
