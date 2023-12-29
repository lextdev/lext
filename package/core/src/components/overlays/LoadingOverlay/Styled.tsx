import styled from "@emotion/native";

import { LoadingOverlayProps } from "./DefaultProps";
import { ThemeProps } from "../../../styles/Theme";
import { useColor } from "../../../hooks";
import { HexToRGBA } from "../../../helpers";

const StyledLoadingOverlay = styled.View<LoadingOverlayProps & ThemeProps>(
  (props) => {
    const { theme, style, children, backgroundOpacity, ...componentProps } =
      props;
    const defaultProps = props.theme?.components.LoadingOverlay.default;
    const getColor = useColor();
    const merged = { ...defaultProps, ...componentProps };

    return {
      gap: props.theme.defaultOptions.gap,
      ...merged,
      backgroundColor: HexToRGBA(
        getColor(merged.backgroundColor ?? "secondary"),
        backgroundOpacity ?? defaultProps.backgroundOpacity ?? 0.5,
      ),
    };
  },
);

export default StyledLoadingOverlay;
