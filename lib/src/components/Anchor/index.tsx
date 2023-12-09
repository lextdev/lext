import React, { FC, ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import Text from "../Text";
import { TextProps } from "../Text/DefaultProps";

type AnchorProps = TouchableOpacityProps &
  TextProps & {
    children: ReactNode;
  };

const Anchor: FC<AnchorProps> = (props) => {
  const {
    children,
    color = "blue.3",
    fontSize,
    fontFamily,
    ...touchableOpacityProps
  } = props;

  const fontProps = {
    ...{ color, fontSize, fontFamily },
  };

  return (
    <TouchableOpacity activeOpacity={0.7} {...touchableOpacityProps}>
      <Text {...fontProps}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Anchor;
