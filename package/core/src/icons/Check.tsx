import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCheck = (props: SvgProps) => (
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
        d="M22.319 4.431 8.5 18.249a1 1 0 0 1-1.417 0L1.739 12.9a1 1 0 0 0-1.635.325 1 1 0 0 0 .218 1.092l5.346 5.345a3.008 3.008 0 0 0 4.25 0L23.736 5.847a1 1 0 0 0-.709-1.71 1 1 0 0 0-.708.294"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgCheck;
