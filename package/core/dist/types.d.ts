import * as _emotion_react from '@emotion/react';
import { Theme as Theme$1 } from '@emotion/react';
import * as React from 'react';
import React__default, { FC, ReactNode, ReactElement } from 'react';
import * as _emotion_native from '@emotion/native';
import * as react_native from 'react-native';
import { FlexStyle, DimensionValue, TouchableOpacityProps, ModalProps, ViewProps, TextInputProps, SwitchProps } from 'react-native';

type ThemeProviderProps = {
    children: ReactNode;
    theme: Theme$1;
};
declare const ThemeProvider: FC<ThemeProviderProps>;

type ColorsProps = {
    primary: string;
    secondary: string;
    muted: string;
    default: string;
    background: string;
    global: string;
    emphasis: string;
    inverse: string;
    link: string;
    success: string;
    warning: string;
    danger: string;
};

type HeadingSizesProps = {
    h1: number;
    h2: number;
    h3: number;
};

type SpacingProps = {
    xl: number;
    lg: number;
    md: number;
    sm: number;
    xs: number;
};

type TextSizesProps = {
    subHeading: number;
    body: number;
    caption: number;
};

type ColorSchemeProps = "darken" | "lighten";

type ColorTypeProps = keyof ColorsProps;

type TextProps = {
    color?: ColorTypeProps;
    fontSize?: keyof TextSizesProps | number;
    fontFamily?: string;
};
type TextComponentThemeProps = {
    default: TextProps;
    classes?: object;
};

type HeadingProps = {
    color?: ColorTypeProps;
    fontSize?: keyof HeadingSizesProps | number;
    fontFamily?: string;
};
type HeadingComponentThemeProps = {
    default: HeadingProps;
    classes?: object;
};

type StackProps = {
    alignItems?: FlexStyle["alignItems"];
    justifyContent?: FlexStyle["justifyContent"];
    gap?: FlexStyle["gap"];
    flex?: FlexStyle["flex"];
};
type StackComponentThemeProps = {
    default: StackProps;
    classes?: object;
};

type GroupProps = {
    alignItems?: FlexStyle["alignItems"];
    justifyContent?: FlexStyle["justifyContent"];
    gap?: FlexStyle["gap"];
    flex?: FlexStyle["flex"];
};
type GroupComponentThemeProps = {
    default: GroupProps;
    classes?: object;
};

type GridProps = {
    alignItems?: FlexStyle["alignItems"];
    justifyContent?: FlexStyle["justifyContent"];
    gap?: FlexStyle["gap"];
    flex?: FlexStyle["flex"];
};
type GridComponentThemeProps = {
    default: GridProps;
    classes?: object;
};

type BoxProps = {
    backgroundColor?: ColorTypeProps;
} & FlexStyle;
type BoxComponentThemeProps = {
    default: BoxProps;
    classes?: object;
};

type ButtonProps$1 = ButtonProps & {
    backgroundColor?: ColorTypeProps;
    width?: DimensionValue;
    variant?: "filled" | "outline";
    paddingVertical?: number;
    paddingHorizontal?: number;
    borderRadius?: number;
    size?: "lg" | "md" | "sm";
    minHeight?: DimensionValue;
};
type ButtonComponentThemeProps = {
    default: ButtonProps$1;
    classes?: object;
};

type ActionButtonProps = ButtonProps & {
    backgroundColor?: ColorTypeProps;
    width?: DimensionValue;
    variant?: "filled" | "outline" | "transparent";
    paddingVertical?: number;
    paddingHorizontal?: number;
    borderRadius?: number;
    size?: "lg" | "md" | "sm";
    minHeight?: DimensionValue;
};
type ActionButtonComponentThemeProps = {
    default: ActionButtonProps;
    classes?: object;
};

interface ThemeInterface {
    colorScheme: ColorSchemeProps;
    colors: {
        darken: ColorsProps;
        lighten: ColorsProps;
    };
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

interface ButtonProps {
    onPress?: () => void;
    onLongPress?: () => void;
    disabled?: boolean;
    underlayColor?: string;
    activeOpacity?: number;
}

type SessionProps = {
    id: number;
    jwt: string;
};

type SessionProviderProps = {
    children: ReactNode;
};
declare const SessionProvider: FC<SessionProviderProps>;

declare const ColorSchemeProvider: FC<{
    children: ReactNode;
    themeColorScheme?: ColorSchemeProps;
}>;

declare function useCountdown(seconds: number): {
    isCompleteRemainingTime: boolean;
    formatTime: string;
};

declare const useKeyboard: () => {
    isKeyboardOpen: boolean;
    getKeyboardHeight: number;
    closeKeyboard: () => void;
};

declare const useSession: () => {
    session: SessionProps | null;
    signIn: (data: SessionProps) => Promise<void>;
    signOut: () => Promise<void>;
};

declare const useTheme: () => {
    colorScheme: ColorSchemeProps;
    setColorScheme: React.Dispatch<React.SetStateAction<ColorSchemeProps>>;
    theme: _emotion_react.Theme;
};

declare const useColor: () => (color: keyof ColorsProps) => string;

type ThemeProps = {
    theme?: ThemeInterface;
};
declare const Theme: ThemeInterface;

declare const Text: _emotion_native.StyledComponent<react_native.TextProps & {
    theme?: _emotion_react.Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & TextProps & ThemeProps, {}, {
    ref?: React.Ref<react_native.Text> | undefined;
}>;

declare const Heading: _emotion_native.StyledComponent<react_native.TextProps & {
    theme?: _emotion_react.Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & HeadingProps & ThemeProps, {}, {
    ref?: React.Ref<react_native.Text> | undefined;
}>;

declare const ActionButton: FC<ActionButtonProps & {
    children: ReactNode;
    color?: ColorTypeProps;
}>;

type AnchorProps = TouchableOpacityProps & TextProps & {
    children: string;
};
declare const Anchor: FC<AnchorProps>;

declare const Button: FC<ButtonProps$1 & {
    children: ReactNode | string;
    color?: ColorTypeProps;
}>;

declare const Box: _emotion_native.StyledComponent<react_native.ViewProps & {
    theme?: _emotion_react.Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & {
    backgroundColor?: keyof ColorsProps | undefined;
} & react_native.FlexStyle & ThemeProps, {}, {
    ref?: React.Ref<react_native.View> | undefined;
}>;

type DividerProps = {
    label?: string;
    color?: ColorTypeProps;
};
declare const Divider: FC<DividerProps>;

declare const _default: {
    Container: _emotion_native.StyledComponent<react_native.ViewProps & {
        theme?: _emotion_react.Theme | undefined;
        as?: React__default.ElementType<any> | undefined;
    } & GridProps & ThemeProps, {}, {
        ref?: React__default.Ref<react_native.View> | undefined;
    }>;
    Item: React__default.FC<{
        children: React__default.ReactNode;
        span: 2 | 1 | 10 | 5 | 12 | 3 | 4 | 6 | 7 | 8 | 9 | 11;
    }>;
};

declare const Group: _emotion_native.StyledComponent<react_native.ViewProps & {
    theme?: _emotion_react.Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & GroupProps & ThemeProps, {}, {
    ref?: React.Ref<react_native.View> | undefined;
}>;

declare const Stack: _emotion_native.StyledComponent<react_native.ViewProps & {
    theme?: _emotion_react.Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & StackProps & ThemeProps, {}, {
    ref?: React.Ref<react_native.View> | undefined;
}>;

type CustomModalHeaderProps = {
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
};
type CustomModalProps = ModalProps & {
    header?: CustomModalHeaderProps;
};
declare const CustomModal: FC<CustomModalProps & {
    children: ReactNode;
}>;

type SafeAreaViewProps = {
    children: ReactNode;
    backgroundColor?: ColorTypeProps | null;
} & ViewProps;
declare const SafeAreaView: FC<SafeAreaViewProps>;

type LayoutProps = {
    layout?: {
        label?: string;
        description?: string;
        error?: string;
        left?: ReactElement;
        right?: ReactElement;
    };
};

type FormProps<P = object> = FC<P & LayoutProps>;

interface CustomTextInputProps extends TextInputProps {
}
declare const CustomTextInput: FormProps<CustomTextInputProps>;

interface CustomTextareaProps extends TextInputProps {
    height?: DimensionValue;
}
declare const CustomTextarea: FormProps<CustomTextareaProps>;

interface CustomSwitchProps extends SwitchProps {
}
declare const CustomSwitch: FormProps<CustomSwitchProps>;

type DataProps = {
    image?: string;
    value: TextInputProps["value"];
    description?: string;
    label: string;
};
interface CustomSelectBoxProps extends TextInputProps {
    modal: CustomModalProps;
    onPress?: () => any;
    data: DataProps[];
    defaultSelectMessage?: string;
    onChange?: ((e: any) => void) | undefined;
}
declare const CustomSelectBox: FormProps<CustomSelectBoxProps>;

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
type DeepPartialTheme = DeepPartial<ThemeInterface>;
declare const createTheme: (newTheme?: DeepPartialTheme) => ThemeInterface;

export { ActionButton, Anchor, Box, Button, ButtonProps as ButtonInterface, ColorSchemeProps, ColorSchemeProvider, ColorsProps, Divider, _default as Grid, Group, Heading, HeadingSizesProps, CustomModal as Modal, SafeAreaView, CustomSelectBox as SelectBox, SessionProps, SessionProvider, SpacingProps, Stack, CustomSwitch as Switch, Text, CustomTextInput as TextInput, TextSizesProps, CustomTextarea as Textarea, Theme, ThemeInterface, ThemeProvider, createTheme, useColor, useCountdown, useKeyboard, useSession, useTheme };
