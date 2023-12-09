import React, { FC } from "react";
import { View } from "react-native";
import { GetColorValue } from "../../../helpers";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
import Text from "../../typography/Text/Text";
import Group from "../Group/Group";
import { useTheme } from "@emotion/react";
import { ThemeInterface } from "../../../interfaces";

type DividerProps = {
  label: string;
  color?: ColorTypeProps;
};

const Divider: FC<DividerProps> = ({ label, color = "muted" }) => {
  const theme = useTheme();

  return (
    <Group gap={10}>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: color && theme.colors[color],
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
          backgroundColor: color && theme.colors[color],
        }}
      />
    </Group>
  );
};

export default Divider;
