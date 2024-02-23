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
  const labelProps = { ...theme.components.FormLayout.classes.label };
  const descriptionProps = {
    ...theme.components.FormLayout.classes.description,
  };
  const errorProps = { ...theme.components.FormLayout.classes.error };

  let typeStyle = {};
  switch (layout?.variant) {
    case "sm":
      typeStyle = {
        ...theme.components.FormLayout.sm,
        borderRadius: theme.defaultOptions.borderRadius * 0.5,
      };
      break;
    default:
      typeStyle = {
        ...theme.components.FormLayout.md,
        borderRadius: theme.defaultOptions.borderRadius,
      };
      break;
  }

  const viewCss = css({
    ...typeStyle,
    backgroundColor: getColor("muted"),
    borderRadius: theme.defaultOptions.borderRadius,
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
      {layout?.label && <Text {...labelProps}>{layout.label}</Text>}
      <Group style={!transparent && viewCss}>
        {layout?.left && layout.left}
        {children}
        {layout?.right && layout.right}
      </Group>
      {!layout?.error && layout?.description && (
        <Text {...descriptionProps}>{layout.description}</Text>
      )}
      {layout?.error && <Text {...errorProps}>{layout.error}</Text>}
    </Stack>
  );
};

export default Layout;
