import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowLeft = (props: SvgProps) => (
  <Svg
    width={props.size || 24}
    height={props.size || 24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={props.color || `#FFFFFF`}
      d="M.88 14.09 4.75 18a1 1 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L2.61 13H23a1 1 0 1 0 0-2H2.55l3.62-3.62a1 1 0 0 0 0-1.38 1 1 0 0 0-1.42 0L.88 9.85a3 3 0 0 0 0 4.24"
    />
  </Svg>
);
export default SvgArrowLeft;
