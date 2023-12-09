import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBranch = (props: SvgProps) => (
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
        d="M24 4c0-2.206-1.794-4-4-4s-4 1.794-4 4a4.007 4.007 0 0 0 3 3.873V8c0 1.654-1.346 3-3 3H8a4.98 4.98 0 0 0-3 1.002V7.873A4.007 4.007 0 0 0 8 4c0-2.206-1.794-4-4-4S0 1.794 0 4a4.007 4.007 0 0 0 3 3.873v8.253a4.007 4.007 0 0 0-3 3.873c0 2.206 1.794 4 4 4s4-1.794 4-4a4.007 4.007 0 0 0-3-3.873v-.127c0-1.654 1.346-3 3-3h8c2.757 0 5-2.243 5-5v-.127A4.006 4.006 0 0 0 24 4ZM2 4c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2Zm4 16c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2ZM20 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgBranch;
