import { DimensionValue } from "react-native";
import ColorsProps from "../types/ColorsProps";
import HeadingSizesProps from "../types/HeadingSizesProps";
import SpacingProps from "../types/SpacingProps";
import TextSizesProps from "../types/TextSizesProps";
import { TextComponentThemeProps } from "../components/typography/Text/DefaultProps";

interface ThemeInterface {
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
    // Heading: HeadingComponentThemeProps;
    // Stack: StackComponentThemeProps;
    // Group: GroupComponentThemeProps;
    // Grid: GridComponentThemeProps;
    // Box: BoxComponentThemeProps;
    // Button: ButtonComponentThemeProps;
    // ActionButton: ActionButtonComponentThemeProps;
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
