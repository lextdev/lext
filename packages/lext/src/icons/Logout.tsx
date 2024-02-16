import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLogout = (props: SvgProps) => (
  <Svg
    width={props.size || 24}
    height={props.size || 24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G fill={props.color || `#FFFFFF`} clipPath="url(#a)">
      <Path d="M11.476 15a1 1 0 0 0-1 1v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h2.476a3 3 0 0 1 3 3v3a1 1 0 0 0 2 0V5a5.006 5.006 0 0 0-5-5H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h2.476a5.006 5.006 0 0 0 5-5v-3a1 1 0 0 0-1-1" />
      <Path d="m22.867 9.879-4.586-4.586a1 1 0 1 0-1.414 1.414l4.262 4.263L6 11a1 1 0 0 0 0 2l15.188-.031-4.323 4.324a1 1 0 1 0 1.414 1.414l4.586-4.586a3 3 0 0 0 .002-4.242" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgLogout;
