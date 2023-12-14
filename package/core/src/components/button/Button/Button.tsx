import React, { FC, ReactNode } from "react";

import { ButtonProps } from "./DefaultProps";
import StyledButton from "./Styled";
import Text from "../../typography/Text/Text";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
import { useColor } from "../../../hooks";

const Button: FC<
  ButtonProps & {
    children: ReactNode | string;
    color?: ColorTypeProps;
  }
> = (props) => {
  const { children, color = "global", ...touchableComponent } = props;
  const fonstSize = props.size === "sm" ? "caption" : "body";

  return (
    <StyledButton
      {...touchableComponent}
      activeOpacity={0.7}
      style={{ opacity: props.disabled ? 0.3 : 1 }}
    >
      <Text color={color} fontSize={fonstSize}>
        {children}
      </Text>
    </StyledButton>
  );
};

export default Button;
