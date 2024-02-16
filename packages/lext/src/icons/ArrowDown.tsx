import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowDown = (props: SvgProps) => (
  <Svg
    width={props.size || 24}
    height={props.size || 24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={props.color || `#FFFFFF`}
      d="M18.71 8.21a1 1 0 0 0-1.42 0l-4.58 4.58a1.002 1.002 0 0 1-1.42 0L6.71 8.21a1 1 0 1 0-1.42 1.41l4.59 4.59a3 3 0 0 0 4.24 0l4.59-4.59a1 1 0 0 0 0-1.41"
    />
  </Svg>
);
export default SvgArrowDown;
