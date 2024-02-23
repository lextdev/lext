import styled from "@emotion/native";

import { ButtonProps } from "./DefaultProps";
import { ThemeProps } from "../../../styles/Theme";
import { useColor } from "../../../hooks";

const StyledButton = styled.View<ButtonProps & ThemeProps>(props => {
  const { theme, children, fontFamily, variant, size, ...componentProps } =
    props;
  const defaultProps = props.theme?.components.Button.default;
  const smProps = props.theme?.components.Button.sm;
  const mdProps = props.theme?.components.Button.md;
  const lgProps = props.theme?.components.Button.lg;
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
        ...lgProps,
        borderRadius: theme.defaultOptions.borderRadius * 2,
      };
      break;
    case "sm":
      typeStyle = {
        ...smProps,
        borderRadius: theme.defaultOptions.borderRadius * 0.5,
      };
      break;
    default:
      typeStyle = {
        ...mdProps,
        borderRadius: theme.defaultOptions.borderRadius,
      };
      break;
  }

  return {
    ...typeStyle,
    ...merged,
    borderWidth: 1,
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
