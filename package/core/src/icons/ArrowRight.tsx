import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowRight = (props: SvgProps) => (
  <Svg
    width={props.size || 24}
    height={props.size || 24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill={props.color || `#FFFFFF`}
        d="M23.122 9.91 19.252 6a.999.999 0 0 0-1.42 0 1.001 1.001 0 0 0 0 1.42l3.56 3.58H1.002a1 1 0 0 0 0 2h20.45l-3.62 3.62a1 1 0 0 0 0 1.38 1 1 0 0 0 1.42 0l3.87-3.85a3 3 0 0 0 0-4.24"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgArrowRight;
