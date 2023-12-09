import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMenuBurger = (props: SvgProps) => (
  <Svg
    width={props.size || 24}
    height={props.size || 24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G fill={props.color || `#FFFFFF`} clipPath="url(#a)">
      <Path d="M23 11H1a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2ZM23 4H1a1 1 0 0 0 0 2h22a1 1 0 1 0 0-2ZM23 18H1a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgMenuBurger;
