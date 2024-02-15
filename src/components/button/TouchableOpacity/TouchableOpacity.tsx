import React, { FC, ReactNode } from "react";
import { useTheme } from "../../../hooks";
import {
  TouchableOpacityProps as RNTouchableOpacityProps,
  TouchableWithoutFeedbackProps,
} from "react-native";
import { TouchableOpacityProps } from "./DefaultProps";
import { TextSizesProps } from "../../../types";
import StyledTouchableOpacity from "./Styled";
import ActivityIndicator from "../../mics/ActivityIndicator/ActivityIndicator";
import Text from "../../typography/Text/Text";

const TouchableOpacity: FC<
  TouchableWithoutFeedbackProps &
    RNTouchableOpacityProps &
    TouchableOpacityProps & {
      children: ReactNode | string;
      isLoader?: boolean;
    }
> = props => {
  const { theme } = useTheme();

  const { children, color, isLoader, ...touchableComponent } = props;

  const currentSize = props.size || theme.components.Button.default.size;
  let fontSize: keyof TextSizesProps;

  switch (currentSize) {
    case "sm":
      fontSize = "caption";
      break;
    case "lg":
      fontSize = "subHeading";
      break;
    default:
      fontSize = "body";
      break;
  }

  return (
    <StyledTouchableOpacity {...touchableComponent}>
      {isLoader && <ActivityIndicator color={color} />}
      {typeof children === "string" ? (
        <Text
          color={color || theme.components.Button.default.color}
          fontSize={fontSize}
        >
          {children}
        </Text>
      ) : (
        children
      )}
      {children}
    </StyledTouchableOpacity>
  );
};

export default TouchableOpacity;
