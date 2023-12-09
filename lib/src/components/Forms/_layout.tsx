import { css } from "@emotion/native";
import { useTheme } from "@emotion/react";
import React, { FC, ReactNode } from "react";
import { FieldError } from "react-hook-form";
import { View } from "react-native";

import Group from "../Group";
import Stack from "../Stack";
import Text from "../Text";

type FormLayoutProps = {
  label?: string;
  left?: ReactNode;
  right?: ReactNode;
  error?: FieldError;
  paddingHorizontal?: number;
  children: ReactNode;
  isDisabled?: boolean;
};

const Layout: FC<FormLayoutProps> = ({
  label,
  left,
  right,
  error,
  children,
  paddingHorizontal,
  isDisabled = false,
}) => {
  const theme = useTheme();
  const { defaultOptions } = theme;

  let fieldCss = css({
    flex: 1,
    backgroundColor: isDisabled ? theme.colors.gray[3] : "#F9F9F9",
    borderWidth: 1,
    borderColor: isDisabled ? theme.colors.gray[1] : "#ECECEC",
    borderType: "solid",
    minHeight: defaultOptions.minHeight,
    gap: defaultOptions.gap + 5,
    paddingHorizontal: paddingHorizontal ?? defaultOptions.paddingHorizontal,
    paddingVertical: defaultOptions.paddingVertical,
    justifyContent: "center",
    borderRadius: defaultOptions.borderRadius,
  });

  if (error) {
    fieldCss = { ...fieldCss, borderColor: "red" };
  }

  return (
    <Stack>
      {label && <Text fontSize="caption">{label}</Text>}
      <Group
        style={fieldCss}
        justifyContent="space-between"
        alignItems="center"
      >
        {left && <View>{left}</View>}
        {children}
        {right && <View>{right}</View>}
      </Group>
      {error && (
        <Text fontSize="caption" color="red">
          {error.message}
        </Text>
      )}
    </Stack>
  );
};

export default Layout;
