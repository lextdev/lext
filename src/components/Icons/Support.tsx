import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSupport = (props: SvgProps) => (
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
        d="M21.155 19.74a11.954 11.954 0 0 0 0-15.481l.86-.86A1 1 0 0 0 20.6 1.985l-.86.86a11.954 11.954 0 0 0-15.482 0l-.86-.86A1 1 0 0 0 1.985 3.4l.86.86a11.954 11.954 0 0 0 0 15.482l-.86.86a1.001 1.001 0 0 0 .705 1.719 1 1 0 0 0 .71-.306l.86-.86a11.954 11.954 0 0 0 15.482 0l.86.86a1 1 0 0 0 1.413-1.415l-.86-.86ZM22 12a9.948 9.948 0 0 1-2.262 6.324l-3.571-3.571a4.965 4.965 0 0 0 0-5.506l3.57-3.571A9.948 9.948 0 0 1 22 12ZM9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-10a9.949 9.949 0 0 1 6.324 2.262l-3.571 3.57a4.966 4.966 0 0 0-5.506 0l-3.571-3.57A9.949 9.949 0 0 1 12 2ZM2 12a9.949 9.949 0 0 1 2.262-6.324l3.57 3.57a4.966 4.966 0 0 0 0 5.507l-3.57 3.57A9.949 9.949 0 0 1 2 12Zm10 10a9.948 9.948 0 0 1-6.324-2.262l3.57-3.571a4.965 4.965 0 0 0 5.507 0l3.57 3.57A9.948 9.948 0 0 1 12 22Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgSupport;
