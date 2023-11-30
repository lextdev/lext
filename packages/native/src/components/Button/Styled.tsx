import styled from "@emotion/native";

import { ButtonProps } from "./DefaultProps";
import GetColorValue from "../../helpers/GetColorValue";
import { ThemeProps } from "../../utils";

const StyledButton = styled.TouchableOpacity<ButtonProps & ThemeProps>(
  (props) => {
    const { theme, children, variant, size, ...componentProps } = props;
    const defaultProps = props.theme?.components.Button.default;
    const merged = { ...defaultProps, ...componentProps };

    let variantStyle = {};
    if (variant === "outline") {
      variantStyle = {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: GetColorValue(props.backgroundColor, theme.colors),
        borderStyle: "solid",
      };
    } else {
      variantStyle = {
        backgroundColor: GetColorValue(merged.backgroundColor, theme.colors),
      };
    }

    const divisionValue = (value: number, division: number = 2) =>
      value / division;

    let typeStyle = {};
    switch (size) {
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
            theme.defaultOptions.paddingHorizontal,
          ),
          borderRadius: theme.defaultOptions.borderRadius,
        };
        break;
    }

    return {
      ...merged,
      ...typeStyle,
      ...variantStyle,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
  },
);

export default StyledButton;
