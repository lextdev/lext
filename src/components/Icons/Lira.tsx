import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLira = (props: SvgProps) => (
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
        d="M21 12a1 1 0 0 0-1 1c0 4.963-4.038 9-9 9h-1c-1.103 0-2-.897-2-2v-6.613l7.316-2.439a.999.999 0 0 0 .632-1.265.998.998 0 0 0-1.265-.632l-6.684 2.228V9.386l7.316-2.439a.999.999 0 0 0 .632-1.265.998.998 0 0 0-1.265-.632L7.998 7.278V1a1 1 0 1 0-2 0v6.946L2.682 9.051a.999.999 0 1 0 .633 1.897l2.684-.895v1.893l-3.316 1.105a.999.999 0 1 0 .633 1.897L6 14.053v5.946c0 2.206 1.794 4 4 4h1c6.065 0 11-4.935 11-11a1 1 0 0 0-1-1V12Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgLira;
