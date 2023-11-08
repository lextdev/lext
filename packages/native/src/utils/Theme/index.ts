import { BoxComponentThemeData, BoxComponentThemeProps } from "../../components/Box/DefaultProps"
import { GridComponentThemeData, GridComponentThemeProps } from "../../components/Grid/DefaultProps"
import {
  GroupComponentThemeData,
  GroupComponentThemeProps,
} from "../../components/Group/DefaultProps"
import {
  HeadingComponentThemeData,
  HeadingComponentThemeProps,
} from "../../components/Heading/DefaultProps"
import {
  StackComponentThemeData,
  StackComponentThemeProps,
} from "../../components/Stack/DefaultProps"
import { TextComponentThemeData, TextComponentThemeProps } from "../../components/Text/DefaultProps"
import Colors, { Black, ColorsProps, White } from "../../styles/Colors"
import HeadingSizes, { HeadingSizesProps } from "../../styles/HeadingSizes"
import Spacing, { SpacingProps } from "../../styles/Spacing"
import TextSizes, { TextSizesProps } from "../../styles/TextSizes"

export type ThemeProps = {
  theme?: ThemeDefineProps
}

export type ThemeDefineProps = {
  primaryColor: keyof ColorsProps
  colors: ColorsProps
  white: string
  black: string
  spacing: SpacingProps
  fontsSizes: {
    heading: HeadingSizesProps
    text: TextSizesProps
  }
  components: {
    Text: TextComponentThemeProps
    Heading: HeadingComponentThemeProps
    Stack: StackComponentThemeProps
    Group: GroupComponentThemeProps
    Grid: GridComponentThemeProps
    Box: BoxComponentThemeProps
  }
  defaultOptions: {
    gap: number
    padding: 10
  }
}

const Theme: ThemeDefineProps = {
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
  },
  defaultOptions: {
    gap: 5,
    padding: 10,
  },
}

export default Theme
