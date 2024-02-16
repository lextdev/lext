import styled from "@emotion/native";

import { ActionButtonProps } from "./DefaultProps";
import { ThemeProps } from "../../../styles/Theme";
import { useColor } from "../../../hooks";

const StyledActionButton = styled.View<ActionButtonProps & ThemeProps>(
  props => {
    const { theme, children, variant, size, ...componentProps } = props;
    const defaultProps = props.theme?.components.ActionButton.default;
    const merged = { ...defaultProps, ...componentProps };
    const getColor = useColor();

    const currentVariant = variant || defaultProps.variant;

    const divisionValue = (value: number, division: number = 2) =>
      value / division;

    const currentSize = size || defaultProps.size;
    let typeStyle = {};
    switch (currentSize) {
      case "lg":
        typeStyle = {
          padding: divisionValue(theme.defaultOptions.paddingVertical) * 2,
          borderRadius: theme.defaultOptions.borderRadius * 2,
        };
        break;
      case "sm":
        typeStyle = {
          padding: divisionValue(theme.defaultOptions.paddingVertical) * 0.5,
          borderRadius: theme.defaultOptions.borderRadius * 0.5,
        };
        break;
      default:
        typeStyle = {
          padding: divisionValue(theme.defaultOptions.paddingVertical) * 1.5,
          borderRadius: theme.defaultOptions.borderRadius,
        };
        break;
    }

    return {
      ...typeStyle,
      ...merged,
      borderWidth: 2,
      borderColor: merged.backgroundColor && getColor(merged.backgroundColor),
      borderStyle: "solid",
      backgroundColor:
        currentVariant == "outline"
          ? undefined
          : merged.backgroundColor && getColor(merged.backgroundColor),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
  }
);

export default StyledActionButton;
