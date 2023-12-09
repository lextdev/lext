import "@emotion/react";
import { ButtonComponentThemeProps } from "./components/Button/DefaultProps";
import { DimensionValue } from "react-native";

declare module "@emotion/react" {
  export type ColorsProps = {
    gray: string[];
    white: string[];
    black: string[];
    primary: string[];
    red: string[];
    lightGreen: string[];
    green: string[];
    darkGreen: string[];
    blue: string[];
    yellow: string[];
    orange: string[];
    purple: string[];
    pink: string[];
  };

  export type SpacingProps = {
    xl: number;
    lg: number;
    md: number;
    sm: number;
    xs: number;
  };

  export type HeadingSizesProps = {
    h1: number;
    h2: number;
    h3: number;
  };

  export type TextSizesProps = {
    subHeading: number;
    body: number;
    caption: number;
  };

  export type TextComponentThemeProps = {
    default: TextProps;
    classes?: object;
  };

  export type HeadingComponentThemeProps = {
    default: HeadingProps;
    classes?: object;
  };

  export type StackComponentThemeProps = {
    default: StackProps;
    classes?: object;
  };

  export type GroupComponentThemeProps = {
    default: GroupProps;
    classes?: object;
  };

  export type GridComponentThemeProps = {
    default: GridProps;
    classes?: object;
  };

  export type BoxComponentThemeProps = {
    default: BoxProps;
    classes?: object;
  };

  export interface Theme {
    primaryColor: keyof ColorsProps;
    colors: ColorsProps;
    white: string;
    black: string;
    spacing: SpacingProps;
    fontsSizes: {
      heading: HeadingSizesProps;
      text: TextSizesProps;
    };
    components: {
      Text: TextComponentThemeProps;
      Heading: HeadingComponentThemeProps;
      Stack: StackComponentThemeProps;
      Group: GroupComponentThemeProps;
      Grid: GridComponentThemeProps;
      Box: BoxComponentThemeProps;
      Button: ButtonComponentThemeProps;
      ActionButton: ActionButtonComponentThemeProps;
    };
    defaultOptions: {
      gap: number;
      padding: number;
      paddingHorizontal: number;
      paddingVertical: number;
      borderRadius: number;
      minHeight: DimensionValue;
    };
  }
}
