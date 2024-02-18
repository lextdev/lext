import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSettings = (props: SvgProps) => (
  <Svg
    width={props.size || 24}
    height={props.size || 24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G fill={props.color || `#FFFFFF`} clipPath="url(#a)">
      <Path d="M1 4.75h2.736a3.728 3.728 0 0 0 7.195 0H23a1 1 0 1 0 0-2H10.931a3.728 3.728 0 0 0-7.195 0H1a1 1 0 0 0 0 2M7.333 2a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M23 11h-2.736a3.727 3.727 0 0 0-7.194 0H1a1 1 0 0 0 0 2h12.07a3.727 3.727 0 0 0 7.194 0H23a1 1 0 1 0 0-2m-6.333 2.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5M23 19.25H10.931a3.728 3.728 0 0 0-7.195 0H1a1 1 0 0 0 0 2h2.736a3.728 3.728 0 0 0 7.195 0H23a1 1 0 1 0 0-2M7.333 22a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgSettings;
