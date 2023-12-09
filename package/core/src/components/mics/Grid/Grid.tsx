import styled from "@emotion/native";
import React, { FC, ReactNode } from "react";
import { View } from "react-native";

import { GridProps } from "./DefaultProps";
import { ThemeProps } from "../../../styles/Theme";

const Container = styled.View<GridProps & ThemeProps>((props) => {
  const { theme, style, children, ...componentProps } = props;
  const defaultProps = props.theme?.components.Grid.default;
  const merged = { ...defaultProps, ...componentProps };

  return {
    gap: props.theme.defaultOptions.gap,
    flexDirection: "row",
    ...merged,
  };
});

const Item: FC<{
  children: ReactNode;
  span: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}> = ({ children, span = 1 }) => {
  return <View style={{ flex: span }}>{children}</View>;
};

export default { Container, Item };
