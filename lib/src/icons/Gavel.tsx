import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGavel = (props: SvgProps) => (
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
        d="M23.704 10.806a.999.999 0 0 0-1.414 0l-.55.549-9.081-9.082.549-.549A.999.999 0 1 0 11.794.31l-7 7a.999.999 0 1 0 1.414 1.414l.58-.581 3.828 3.827L.293 22.293a.999.999 0 1 0 1.414 1.414L12.03 13.384l3.84 3.841-.58.58a.999.999 0 1 0 1.415 1.414l7-7a.999.999 0 0 0 0-1.414l-.001.001Zm-9.088 2.337-3.672-3.672 3.042-3.042 3.672 3.672-3.042 3.042Zm-3.371-9.456 1.327 1.327L9.53 8.056 8.203 6.729l3.042-3.042Zm4.786 10.87 3.042-3.042 1.254 1.254-3.042 3.042-1.254-1.254Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgGavel;
