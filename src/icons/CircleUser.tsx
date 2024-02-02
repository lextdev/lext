import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCircleUser = (props: SvgProps) => (
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
        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0M8 21.164V21c0-2.206 1.794-4 4-4s4 1.794 4 4v.164A9.943 9.943 0 0 1 12 22a9.943 9.943 0 0 1-4-.836m9.925-1.113A6.01 6.01 0 0 0 12 15a6.01 6.01 0 0 0-5.925 5.051A9.993 9.993 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10a9.993 9.993 0 0 1-4.075 8.051M12 5C9.794 5 8 6.794 8 9s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4m0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgCircleUser;
