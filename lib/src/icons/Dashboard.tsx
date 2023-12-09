import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDashboard = (props: SvgProps) => (
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
        d="M23.9 11.437A12 12 0 0 0 0 13a11.878 11.878 0 0 0 3.76 8.712A4.84 4.84 0 0 0 7.112 23h9.767a4.995 4.995 0 0 0 3.51-1.429 11.944 11.944 0 0 0 3.51-10.134Zm-4.909 8.7a3 3 0 0 1-2.11.863H7.112c-.73.015-1.44-.25-1.98-.74A9.9 9.9 0 0 1 2 13a10.014 10.014 0 0 1 3.338-7.457A9.881 9.881 0 0 1 11.986 3a9.994 9.994 0 0 1 7.005 17.142v-.005ZM7.807 17.285a1 1 0 1 1-1.4 1.43 8 8 0 0 1 6.736-13.634 1 1 0 0 1 .847 1.133.987.987 0 0 1-1.133.848 6 6 0 0 0-5.05 10.223Zm12.112-5.428a8.08 8.08 0 0 1-.541 4.246 7.932 7.932 0 0 1-1.786 2.613 1.002 1.002 0 0 1-1.4-1.432 5.98 5.98 0 0 0 1.744-5.14 1 1 0 1 1 1.981-.287h.002Zm-5.993.631a2.033 2.033 0 1 1-1.414-1.414l3.781-3.78a1 1 0 1 1 1.414 1.413l-3.78 3.781Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgDashboard;
