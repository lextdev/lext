import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBan = (props: SvgProps) => (
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
        d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0m0 2a9.949 9.949 0 0 1 6.324 2.262L4.262 18.324A9.992 9.992 0 0 1 12 2m0 20a9.949 9.949 0 0 1-6.324-2.262L19.738 5.676A9.993 9.993 0 0 1 12 22"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgBan;
