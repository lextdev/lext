import { FC, ReactNode } from "react";

import { ButtonProps } from "./DefaultProps";
import StyledButton from "./Styled";
import { ColorTypeProps } from "../../helpers/GetColorValue";
import Text from "../Text";

const Button: FC<
  ButtonProps & {
    children: ReactNode | string;
    color?: ColorTypeProps;
  }
> = (props) => {
  const { children, color, ...touchableComponent } = props;
  const fonstSize = props.size === "sm" ? "caption" : "body";

  return (
    <StyledButton
      {...touchableComponent}
      activeOpacity={0.7}
      style={{ opacity: props.disabled ? 0.3 : 1 }}
    >
      <Text color={color} fontFamily="UrbanistBold" fontSize={fonstSize}>
        {children}
      </Text>
    </StyledButton>
  );
};

export default Button;
