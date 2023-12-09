import { DimensionValue } from "react-native";
import ColorsProps from "../types/ColorsProps";
import HeadingSizesProps from "../types/HeadingSizesProps";
import SpacingProps from "../types/SpacingProps";
import TextSizesProps from "../types/TextSizesProps";
import { TextComponentThemeProps } from "../components/typography/Text/DefaultProps";
import { HeadingComponentThemeProps } from "../components/typography/Heading/DefaultProps";
import { StackComponentThemeProps } from "../components/mics/Stack/DefaultProps";
import { GroupComponentThemeProps } from "../components/mics/Group/DefaultProps";
import { GridComponentThemeProps } from "../components/mics/Grid/DefaultProps";
import { BoxComponentThemeProps } from "../components/mics/Box/DefaultProps";
import { ButtonComponentThemeProps } from "../components/button/Button/DefaultProps";
import { ActionButtonComponentThemeProps } from "../components/button/ActionButton/DefaultProps";

interface ThemeInterface {
  colors: ColorsProps;
  white: string;
  black: string;
  spacing: SpacingProps;
  fontSizes: {
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

export default ThemeInterface;
