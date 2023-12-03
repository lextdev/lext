import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBusiness = (props: SvgProps) => (
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
        d="M19 4h-1.1A5.01 5.01 0 0 0 13 0h-2a5.009 5.009 0 0 0-4.9 4H5a5.006 5.006 0 0 0-5 5v10a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9a5.006 5.006 0 0 0-5-5Zm-8-2h2a3 3 0 0 1 2.816 2H8.184A3 3 0 0 1 11 2ZM5 6h14a3 3 0 0 1 3 3v3H2V9a3 3 0 0 1 3-3Zm14 16H5a3 3 0 0 1-3-3v-5h9v1a1 1 0 0 0 2 0v-1h9v5a3 3 0 0 1-3 3Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgBusiness;
