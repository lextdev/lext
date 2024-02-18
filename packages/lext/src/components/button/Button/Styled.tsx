import styled from "@emotion/native";

import { ButtonProps } from "./DefaultProps";
import { ThemeProps } from "../../../styles/Theme";
import { useColor } from "../../../hooks";

const StyledButton = styled.View<ButtonProps & ThemeProps>(props => {
  const { theme, children, fontFamily, variant, size, ...componentProps } =
    props;
  const defaultProps = props.theme?.components.Button.default;
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
        paddingVertical:
          divisionValue(theme.defaultOptions.paddingVertical) * 2,
        paddingHorizontal:
          divisionValue(theme.defaultOptions.paddingHorizontal) * 2,
        borderRadius: theme.defaultOptions.borderRadius * 2,
      };
      break;
    case "sm":
      typeStyle = {
        paddingVertical:
          divisionValue(theme.defaultOptions.paddingVertical) * 0.5,
        paddingHorizontal:
          divisionValue(theme.defaultOptions.paddingHorizontal) * 0.5,
        borderRadius: theme.defaultOptions.borderRadius * 0.5,
      };
      break;
    default:
      typeStyle = {
        paddingVertical:
          divisionValue(theme.defaultOptions.paddingVertical) * 1.5,
        paddingHorizontal: divisionValue(
          theme.defaultOptions.paddingHorizontal
        ),
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
});

export default StyledButton;
