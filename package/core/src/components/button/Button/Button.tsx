import React, { FC, ReactNode } from "react";

import { ButtonProps } from "./DefaultProps";
import StyledButton from "./Styled";
import Text from "../../typography/Text/Text";
import { useTheme } from "../../../hooks";
import { TextSizesProps } from "../../../types";
import { TouchableOpacity } from "react-native";

const Button: FC<
  ButtonProps & {
    children: ReactNode | string;
  }
> = (props) => {
  const { theme } = useTheme();
  const {
    children,
    color,
    fontFamily,
    onPress,
    onLongPress,
    ...touchableComponent
  } = props;
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
      style={{ opacity: props.disabled ? 0.3 : 1 }}
    >
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
      <TouchableOpacity onPress={onPress} onLayout={onLongPress}>
        {buttonElement}
      </TouchableOpacity>
    );
  }

  return buttonElement;
};

export default Button;
