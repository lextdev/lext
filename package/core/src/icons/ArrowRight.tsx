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
      d="M23.123 9.91 19.252 6a1 1 0 0 0-1.42 0 .998.998 0 0 0 0 1.42l3.56 3.58H1.002a1 1 0 0 0 0 2h20.45l-3.62 3.62a1 1 0 0 0 0 1.38.997.997 0 0 0 1.094.219.998.998 0 0 0 .326-.219l3.87-3.85a3 3 0 0 0 0-4.24"
    />
  </Svg>
);
export default SvgArrowRight;
