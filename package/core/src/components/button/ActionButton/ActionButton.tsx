import React, { FC, ReactNode } from "react";

import { ActionButtonProps } from "./DefaultProps";
import StyledActionButton from "./Styled";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
import { TouchableOpacity } from "react-native";

const ActionButton: FC<
  ActionButtonProps & {
    children: ReactNode;
    color?: ColorTypeProps;
  }
> = (props) => {
  const { children, color, onLongPress, onPress, ...touchableComponent } =
    props;

  const actionButtonElement = (
    <StyledActionButton
      {...touchableComponent}
      activeOpacity={0.7}
      style={{ opacity: props.disabled ? 0.3 : 1 }}
    >
      {children}
    </StyledActionButton>
  );

  if (onPress || onLongPress) {
    return (
      <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
        {actionButtonElement}
      </TouchableOpacity>
    );
  }

  return actionButtonElement;
};

export default ActionButton;
