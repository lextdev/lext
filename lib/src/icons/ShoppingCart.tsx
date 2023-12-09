import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShoppingCart = (props: SvgProps) => (
  <Svg
    width={props.size || 24}
    height={props.size || 24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G fill={props.color || `#FFFFFF`} clipPath="url(#a)">
      <Path d="M22.713 4.077A2.993 2.993 0 0 0 20.41 3H4.242L4.2 2.649A3 3 0 0 0 1.222 0H1a1 1 0 0 0 0 2h.222a1 1 0 0 1 .993.883l1.376 11.7A5 5 0 0 0 8.557 19H19a1 1 0 0 0 0-2H8.557a3 3 0 0 1-2.82-2h11.92a5 5 0 0 0 4.921-4.113l.785-4.354a2.994 2.994 0 0 0-.65-2.456ZM21.4 6.178l-.786 4.354A3 3 0 0 1 17.657 13H5.419l-.941-8H20.41a1 1 0 0 1 .99 1.178ZM7 24a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 24a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgShoppingCart;
