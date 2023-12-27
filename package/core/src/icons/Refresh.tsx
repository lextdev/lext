import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRefresh = (props: SvgProps) => (
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
        d="M12 0a11.936 11.936 0 0 0-8 3.078V1a1 1 0 1 0-2 0v4c0 1.103.897 2 2 2h4a1 1 0 1 0 0-2H4.87A9.953 9.953 0 0 1 12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10c-5.21 0-9.492-3.908-9.959-9.09a1 1 0 0 0-1.992.18C.61 19.31 5.748 24 12 24c6.617 0 12-5.383 12-12S18.617 0 12 0"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgRefresh;
