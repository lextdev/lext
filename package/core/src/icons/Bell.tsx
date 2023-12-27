import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBell = (props: SvgProps) => (
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
        d="m22.555 13.662-1.9-6.836A9.321 9.321 0 0 0 2.576 7.3l-1.471 6.615A5 5 0 0 0 5.986 20H7.1a5 5 0 0 0 9.8 0h.838a4.998 4.998 0 0 0 4.817-6.338M12 22a3 3 0 0 1-2.816-2h5.632A3 3 0 0 1 12 22m8.126-5.185A2.977 2.977 0 0 1 17.737 18H5.986a3 3 0 0 1-2.928-3.651l1.47-6.616a7.321 7.321 0 0 1 14.2-.372l1.9 6.836a2.978 2.978 0 0 1-.502 2.618"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgBell;
