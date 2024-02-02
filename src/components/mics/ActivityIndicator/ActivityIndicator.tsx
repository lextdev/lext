import React, { FC } from "react";
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
import { useColor } from "../../../hooks";

type CustomActivityIndicatorProps = ActivityIndicatorProps & {
  color?: ColorTypeProps;
};

const CustomActivityIndicator: FC<CustomActivityIndicatorProps> = (props) => {
  const getColor = useColor();

  return (
    <ActivityIndicator color={getColor(props.color ?? "primary")} {...props} />
  );
};

export default CustomActivityIndicator;
