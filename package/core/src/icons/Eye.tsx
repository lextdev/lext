import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEye = (props: SvgProps) => (
  <Svg
    width={props.size || 24}
    height={props.size || 24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G fill={props.color || `#FFFFFF`} clipPath="url(#a)">
      <Path d="M23.271 9.419C21.72 6.893 18.192 2.655 12 2.655c-6.192 0-9.72 4.238-11.271 6.764a4.908 4.908 0 0 0 0 5.162C2.28 17.107 5.808 21.345 12 21.345c6.192 0 9.72-4.238 11.271-6.764a4.908 4.908 0 0 0 0-5.162m-1.705 4.115C20.234 15.7 17.219 19.345 12 19.345S3.766 15.7 2.434 13.534a2.918 2.918 0 0 1 0-3.068C3.766 8.3 6.781 4.655 12 4.655s8.234 3.641 9.566 5.811a2.918 2.918 0 0 1 0 3.068" />
      <Path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10m0 8a3 3 0 1 1 0-5.999A3 3 0 0 1 12 15" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgEye;
