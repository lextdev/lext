import { css } from "@emotion/native";
import React, { FC, ReactNode } from "react";
import LayoutProps from "../_types/LayoutProps";
import Group from "../../mics/Group/Group";
import Stack from "../../mics/Stack/Stack";
import Text from "../../typography/Text/Text";
import { useColor, useTheme } from "../../../hooks";
import { DimensionValue, FlexStyle } from "react-native";

type CustomLayoutProps = {
  children: ReactNode;
  height?: DimensionValue;
  alignItems?: FlexStyle["alignItems"];
  transparent?: boolean;
};

const Layout: FC<LayoutProps & CustomLayoutProps> = ({
  layout,
  children,
  height,
  alignItems = "center",
  transparent = false,
}) => {
  const { theme } = useTheme();
  const getColor = useColor();
  const viewCss = css({
    backgroundColor: getColor("muted"),
    borderRadius: theme.defaultOptions.borderRadius,
    height: height ?? theme.defaultOptions.minHeight,
    paddingHorizontal: theme.defaultOptions.paddingHorizontal / 2,
    paddingVertical:
      alignItems !== "center"
        ? theme.defaultOptions.paddingVertical / 2
        : undefined,
    alignItems: alignItems,
    gap: theme.defaultOptions.gap,
    borderColor: getColor(layout?.error ? "danger" : "muted"),
    borderWidth: 1,
  });

  return (
    <Stack>
      {layout?.label && <Text fontSize={"caption"}>{layout.label}</Text>}
      <Group style={!transparent && viewCss}>
        {layout?.left && layout.left}
        {children}
        {layout?.right && layout.right}
      </Group>
      {!layout?.error && layout?.description && (
        <Text fontSize={"caption"} color={"emphasis"}>
          {layout.description}
        </Text>
      )}
      {layout?.error && (
        <Text fontSize={"caption"} color="danger">
          {layout.error}
        </Text>
      )}
    </Stack>
  );
};

export default Layout;
