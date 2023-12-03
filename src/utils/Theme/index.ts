import { Theme } from "@emotion/react";

import { ActionButtonComponentThemeData } from "../../components/ActionButton/DefaultProps";
import { BoxComponentThemeData } from "../../components/Box/DefaultProps";
import { ButtonComponentThemeData } from "../../components/Button/DefaultProps";
import { GridComponentThemeData } from "../../components/Grid/DefaultProps";
import { GroupComponentThemeData } from "../../components/Group/DefaultProps";
import { HeadingComponentThemeData } from "../../components/Heading/DefaultProps";
import { StackComponentThemeData } from "../../components/Stack/DefaultProps";
import { TextComponentThemeData } from "../../components/Text/DefaultProps";
import Colors, { Black, White } from "../../styles/Colors";
import HeadingSizes from "../../styles/HeadingSizes";
import Spacing from "../../styles/Spacing";
import TextSizes from "../../styles/TextSizes";

export type ThemeProps = {
  theme?: Theme;
};

const ThemeData: Theme = {
  primaryColor: "blue",
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
    Heading: HeadingComponentThemeData,
    Stack: StackComponentThemeData,
    Group: GroupComponentThemeData,
    Grid: GridComponentThemeData,
    Box: BoxComponentThemeData,
    Button: ButtonComponentThemeData,
    ActionButton: ActionButtonComponentThemeData,
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

export default ThemeData;
