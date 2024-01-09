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
        d="M23.9 11.437A12 12 0 0 0 0 13a11.878 11.878 0 0 0 3.759 8.712A4.84 4.84 0 0 0 7.113 23h9.767a4.994 4.994 0 0 0 3.509-1.429A11.944 11.944 0 0 0 23.9 11.437m-4.909 8.7A3 3 0 0 1 16.88 21H7.113c-.73.015-1.44-.25-1.981-.741A9.9 9.9 0 0 1 2 13a10.014 10.014 0 0 1 3.338-7.457A9.88 9.88 0 0 1 11.986 3a9.994 9.994 0 0 1 7.005 17.142zM7.807 17.285a1 1 0 1 1-1.4 1.43 8 8 0 0 1 6.736-13.634 1 1 0 0 1 .847 1.133.989.989 0 0 1-1.133.848 6 6 0 0 0-5.05 10.223m12.112-5.428a8.08 8.08 0 0 1-.541 4.246 7.931 7.931 0 0 1-1.786 2.613 1.002 1.002 0 0 1-1.4-1.432 5.98 5.98 0 0 0 1.744-5.141 1.001 1.001 0 0 1 1.981-.286zm-5.993.631a2.033 2.033 0 1 1-1.414-1.414l3.781-3.781a1 1 0 1 1 1.414 1.414z"
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
