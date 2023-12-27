import styled from "@emotion/native";
import { FlexStyle, ViewProps } from "react-native";

type CustomViewProps = {
  flex?: FlexStyle["flex"];
};

const View = styled.View<ViewProps & CustomViewProps>();

export default View;
