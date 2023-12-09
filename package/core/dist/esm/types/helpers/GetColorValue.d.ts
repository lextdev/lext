import { ColorsProps } from "../types";
export type ColorTypeProps = keyof ColorsProps;
/**
 * @deprecated
 *
// export type ColorTypeProps =
//   | keyof ColorsProps
//   | `${keyof ColorsProps}.${number}`;
*/
/**
 * @deprecated
 * @param color
 * @param colors
 * @returns
 */
declare const GetColorValue: (color?: ColorTypeProps, colors?: ColorsProps) => string | undefined;
export default GetColorValue;
