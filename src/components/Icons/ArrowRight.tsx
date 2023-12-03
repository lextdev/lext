import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowRight = (props: SvgProps) => (
  <Svg
    width={props.size || 24}
    height={props.size || 24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={props.color || `#FFFFFF`}
      d="M23.123 9.91 19.253 6a.999.999 0 0 0-1.42 0 1 1 0 0 0 0 1.42l3.56 3.58H1.003a1 1 0 1 0 0 2h20.45l-3.62 3.62a1 1 0 0 0 0 1.38 1.001 1.001 0 0 0 1.42 0l3.87-3.85a3 3 0 0 0 0-4.24Z"
    />
  </Svg>
);
export default SvgArrowRight;
