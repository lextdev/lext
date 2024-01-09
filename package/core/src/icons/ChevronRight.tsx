import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChevronRight = (props: SvgProps) => (
  <Svg
    width={props.size || 24}
    height={props.size || 24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={props.color || `#FFFFFF`}
      d="M8.709 4.79a1 1 0 0 0 0 1.42l4.58 4.58a.997.997 0 0 1 .219 1.095.998.998 0 0 1-.219.326l-4.58 4.58a.999.999 0 0 0 0 1.42 1 1 0 0 0 1.41 0l4.59-4.59a3 3 0 0 0 0-4.24l-4.59-4.59a1 1 0 0 0-1.41 0"
    />
  </Svg>
);
export default SvgChevronRight;
