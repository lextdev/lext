import React, { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Text from "../../typography/Text/Text";
import { TextProps } from "../../typography/Text/DefaultProps";

type AnchorProps = TouchableOpacityProps &
  TextProps & {
    children: string;
  };

const Anchor: FC<AnchorProps> = props => {
  const {
    children,
    color = "primary",
    fontSize,
    ...touchableOpacityProps
  } = props;

  const fontProps = {
    ...{ color, fontSize },
  };

  return (
    <TouchableOpacity activeOpacity={0.7} {...touchableOpacityProps}>
      <Text {...fontProps}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Anchor;
