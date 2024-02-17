import styled from "@emotion/native";
import { FlexStyle, ScrollViewProps, ViewProps } from "react-native";

type CustomScrollViewProps = {
  flexDirection?: FlexStyle["flexDirection"];
  justifyContent?: FlexStyle["justifyContent"];
  alignItems?: FlexStyle["alignItems"];
};

const ScrollView = styled.View<ScrollViewProps & CustomScrollViewProps>();

export default ScrollView;
