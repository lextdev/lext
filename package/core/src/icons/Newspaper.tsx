import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgNewspaper = (props: SvgProps) => (
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
        d="M19 0h-9C7.243 0 5 2.243 5 5v1h-.5A4.505 4.505 0 0 0 0 10.5v10A3.504 3.504 0 0 0 3.499 24H19c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5M5 20.5c0 .827-.673 1.5-1.5 1.5S2 21.327 2 20.5v-10C2 9.122 3.122 8 4.5 8H5zM22 19c0 1.654-1.346 3-3 3H6.662c.216-.455.338-.963.338-1.5V5c0-1.654 1.346-3 3-3h9c1.654 0 3 1.346 3 3zM20 7a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1m0 4a1 1 0 0 1-1 1h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1m0 4a1 1 0 0 1-1 1h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1m0 4a1 1 0 0 1-1 1h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1M9 7V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgNewspaper;
