import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSmallX = (props: SvgProps) => (
  <Svg
    width={props.size || 24}
    height={props.size || 24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={props.color || `#FFFFFF`}
      d="M18 6a1 1 0 0 0-1.414 0L12 10.586 7.414 6A1 1 0 0 0 6 7.414L10.586 12 6 16.586A1 1 0 0 0 7.414 18L12 13.414 16.586 18A1 1 0 0 0 18 16.586L13.414 12 18 7.414A1 1 0 0 0 18 6"
    />
  </Svg>
);
export default SvgSmallX;
