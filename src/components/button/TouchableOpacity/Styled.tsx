import styled from "@emotion/native";
import { useColor } from "../../../hooks";
import { TouchableOpacityProps } from "./DefaultProps";
import { ThemeProps } from "../../../styles/Theme";

const StyledTouchableOpacity = styled.TouchableOpacity<TouchableOpacityProps & ThemeProps>(props => {
  const { theme, variant, size, ...componentProps } = props;
  const getColor = useColor();

  const defaultProps = props.theme?.components.TouchableOpacity.default;
  const merged = { ...defaultProps, ...componentProps };

  const divisionValue = (value: number, division: number = 2) => value / division;

  const currentSize = size || defaultProps.size;
  let typeStyle = {};

  switch (currentSize) {
    case "lg":
      typeStyle = {
        paddingVertical: divisionValue(theme.defaultOptions.paddingVertical) * 2,
        paddingHorizontal: divisionValue(theme.defaultOptions.paddingHorizontal) * 2,
        borderRadius: theme.defaultOptions.borderRadius * 2,
      };
      break;
    case "sm":
      typeStyle = {
        paddingVertical: divisionValue(theme.defaultOptions.paddingVertical) * 0.5,
        paddingHorizontal: divisionValue(theme.defaultOptions.paddingHorizontal) * 0.5,
        borderRadius: theme.defaultOptions.borderRadius * 0.5,
      };
      break;
    default:
      typeStyle = {
        paddingVertical: divisionValue(theme.defaultOptions.paddingVertical) * 1.5,
        paddingHorizontal: divisionValue(theme.defaultOptions.paddingHorizontal),
        borderRadius: theme.defaultOptions.borderRadius,
      };
      break;
  }

  return {
    borderWidth: 2,
    borderColor: merged.backgroundColor && getColor(merged.backgroundColor),
    borderStyle: "solid",
    backgroundColor:
      (variant || defaultProps.variant) === "outline"
        ? "transparent"
        : merged.backgroundColor && getColor(merged.backgroundColor),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...typeStyle,
    ...merged,
  };
});

export default StyledTouchableOpacity;
