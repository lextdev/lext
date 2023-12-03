import React, { FC, ReactNode } from "react";

import { ActionButtonProps } from "./DefaultProps";
import StyledActionButton from "./Styled";
import { ColorTypeProps } from "../../helpers/GetColorValue";

const ActionButton: FC<
  ActionButtonProps & {
    children: ReactNode;
    color?: ColorTypeProps;
  }
> = (props) => {
  const { children, color, ...touchableComponent } = props;

  return (
    <StyledActionButton
      {...touchableComponent}
      activeOpacity={0.7}
      style={{ opacity: props.disabled ? 0.3 : 1 }}
    >
      {children}
    </StyledActionButton>
  );
};

export default ActionButton;
