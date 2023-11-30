import { css } from "@emotion/native";
import { useTheme } from "@emotion/react";
import { FC } from "react";
import { View } from "react-native";

import GetColorValue, { ColorTypeProps } from "../../helpers/GetColorValue";
import Group from "../Group";
import Text from "../Text";

const DividerCSS = css({
  height: 1,
  width: "100%",
  backgroundColor: "black",
});

type DividerProps = {
  label: string;
  color?: ColorTypeProps;
};

const Divider: FC<DividerProps> = ({ label, color = "gray" }) => {
  const theme = useTheme();

  return (
    <Group gap={10}>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: GetColorValue(color, theme.colors),
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
          backgroundColor: GetColorValue(color, theme.colors),
        }}
      />
    </Group>
  );
};

export default Divider;
