import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgX = (props: SvgProps) => (
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
        d="M23.707.293a1 1 0 0 0-1.414 0L12 10.586 1.707.293A1 1 0 0 0 .293 1.707L10.586 12 .293 22.293a1 1 0 0 0 1.414 1.414L12 13.414l10.293 10.293a1 1 0 0 0 1.414-1.414L13.414 12 23.707 1.707a1 1 0 0 0 0-1.414"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgX;
