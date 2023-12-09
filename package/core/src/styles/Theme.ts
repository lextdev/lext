import { TextComponentThemeData } from "../components/typography/Text/DefaultProps";
import { ThemeInterface } from "../interfaces";
import Colors, { Black, White } from "./Colors";
import HeadingSizes from "./HeadingSizes";
import Spacing from "./Spacing";
import TextSizes from "./TextSizes";

export type ThemeProps = {
  theme?: ThemeInterface;
};

const Theme: ThemeInterface = {
  colors: Colors,
  white: White,
  black: Black,
  spacing: Spacing,
  fontsSizes: {
    heading: HeadingSizes,
    text: TextSizes,
  },
  components: {
    Text: TextComponentThemeData,
    // Heading: HeadingComponentThemeData,
    // Stack: StackComponentThemeData,
    // Group: GroupComponentThemeData,
    // Grid: GridComponentThemeData,
    // Box: BoxComponentThemeData,
    // Button: ButtonComponentThemeData,
    // ActionButton: ActionButtonComponentThemeData,
  },
  defaultOptions: {
    gap: 5,
    padding: 25,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 7,
    minHeight: 47,
  },
};

export default Theme;
