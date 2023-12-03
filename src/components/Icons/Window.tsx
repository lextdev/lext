import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWindow = (props: SvgProps) => (
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
        d="M19 1H5C2.24 1 0 3.24 0 6v12c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V6c0-2.76-2.24-5-5-5ZM5 3h14c1.65 0 3 1.35 3 3v2H2V6c0-1.65 1.35-3 3-3Zm14 18H5c-1.65 0-3-1.35-3-3v-8h20v8c0 1.65-1.35 3-3 3Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgWindow;
