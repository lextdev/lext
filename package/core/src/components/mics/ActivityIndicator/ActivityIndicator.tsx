import React, { FC } from "react";
import { ActivityIndicator } from "react-native";
import { ColorTypeProps } from "../../../helpers/GetColorValue";
import { useColor } from "../../../hooks";

type CustomActivityIndicatorProps = ActivityIndicator & {
  color?: ColorTypeProps;
};

const CustomActivityIndicator: FC<CustomActivityIndicatorProps> = (props) => {
  const getColor = useColor();

  return (
    <ActivityIndicator color={getColor(props.color ?? "primary")} {...props} />
  );
};

export default CustomActivityIndicator;
