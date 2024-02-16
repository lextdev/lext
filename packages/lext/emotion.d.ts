import "@emotion/react";
import { ThemeInterface } from "./src";

declare module "@emotion/react" {
  export interface Theme extends ThemeInterface {}
}
