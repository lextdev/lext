import React, { FC } from "react";
import { View } from "react-native";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
import Text from "../../typography/Text/Text";
import Group from "../Group/Group";
import { useColor } from "../../../hooks";

type DividerProps = {
  label: string;
  color?: ColorTypeProps;
};

const Divider: FC<DividerProps> = ({ label, color = "muted" }) => {
  const getColor = useColor();

  return (
    <Group gap={10}>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: color && getColor(color),
        }}
      />
      <View>
        <Text color={color} fontSize="caption" style={{ textAlign: "center" }}>
          {label}
        </Text>
      </View>
      <View
        style={{
          flex: 5,
          height: 1,
          backgroundColor: color && getColor(color),
        }}
      />
    </Group>
  );
};

export default Divider;
