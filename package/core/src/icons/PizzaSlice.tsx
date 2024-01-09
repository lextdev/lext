import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPizzaSlice = (props: SvgProps) => (
  <Svg
    width={props.size || 24}
    height={props.size || 24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G fill={props.color || `#FFFFFF`} clipPath="url(#a)">
      <Path d="M23.2.8a2.716 2.716 0 0 0-2.9-.624L3.155 6.929a4.976 4.976 0 0 0-3 5.824 15.855 15.855 0 0 0 11.094 11.1 4.983 4.983 0 0 0 5.825-3.009l6.758-17.172A2.71 2.71 0 0 0 23.2.8M11.746 21.911a13.8 13.8 0 0 1-9.656-9.657 2.95 2.95 0 0 1 1.265-3.18 11.987 11.987 0 0 0 11.569 11.572 2.948 2.948 0 0 1-3.178 1.265m4.027-3.227c-6.191-.1-10.355-4.265-10.456-10.457l15.693-6.18a.717.717 0 0 1 .771.17.7.7 0 0 1 .181.747L21.3 4.645c-5.758-1.98-8.942 6.209-3.413 8.668zm2.847-7.232a2.653 2.653 0 0 1 1.943-4.935z" />
      <Path d="M11 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgPizzaSlice;
