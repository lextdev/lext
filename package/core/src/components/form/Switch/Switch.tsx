import React from "react";
import { Switch, SwitchProps } from "react-native";
import FormProps from "../_types/FormProps";
import { useColor } from "../../../hooks";
import Layout from "../_layout/Layout";

interface CustomSwitchProps extends SwitchProps {}

const CustomSwitch: FormProps<CustomSwitchProps> = (props) => {
  const { layout, ...switchProps } = props;
  const getColor = useColor();
  return (
    <Layout transparent layout={layout}>
      <Switch
        trackColor={{ false: getColor("muted"), true: getColor("primary") }}
        thumbColor={getColor("background")}
        {...switchProps}
      />
    </Layout>
  );
};

export default CustomSwitch;
