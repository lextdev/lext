import React, { FC, ReactNode } from "react";

import { ButtonProps } from "./DefaultProps";
import StyledButton from "./Styled";
import Text from "../../typography/Text/Text";
import { useColor, useTheme } from "../../../hooks";
import { TextSizesProps } from "../../../types";
import { ActivityIndicator, TouchableOpacity } from "react-native";

const Button: FC<
  ButtonProps & {
    children: ReactNode | string;
    isLoader?: boolean;
    flex?: number;
  }
> = props => {
  const { theme } = useTheme();
  const {
    children,
    color,
    fontFamily,
    onPress,
    onLongPress,
    isLoader,
    disabled,
    flex,
    ...touchableComponent
  } = props;

  const getColor = useColor();
  const currentSize = props.size || theme.components.Button.default.size;
  const currentFontFamily =
    fontFamily ||
    theme.components.Button.default.fontFamily ||
    theme.fontFamily.text;

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

  const buttonElement = (
    <StyledButton
      {...touchableComponent}
      activeOpacity={0.7}
      style={{
        opacity: props.disabled || props.isLoader ? 0.5 : 1,
        flexDirection: "row",
        gap: 10,
      }}
    >
      {isLoader && (
        <ActivityIndicator
          size={"small"}
          color={getColor(
            color ?? theme.components.Button.default.color ?? "global"
          )}
        />
      )}
      <Text
        color={color || theme.components.Button.default.color}
        fontSize={fontSize}
        fontFamily={currentFontFamily}
      >
        {children}
      </Text>
    </StyledButton>
  );

  if (onPress || onLongPress) {
    return (
      <TouchableOpacity
        style={{ flex }}
        activeOpacity={!isLoader && !disabled ? 0.7 : 1}
        onPress={!isLoader && !disabled ? onPress : undefined}
        onLayout={!isLoader && !disabled ? onLongPress : undefined}
      >
        {buttonElement}
      </TouchableOpacity>
    );
  }

  return buttonElement;
};

export default Button;
