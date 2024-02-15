import { ColorTypeProps } from "../../helpers/GetColorValue";

export type NavigationPluginProps = {
  background: ColorTypeProps;
  border: ColorTypeProps;
  card: ColorTypeProps;
  notification: ColorTypeProps;
  primary: ColorTypeProps;
  text: ColorTypeProps;
};

export type NavigationPluginThemeProps = {
  default: NavigationPluginProps;
};

export const NavigationPluginThemeData: NavigationPluginThemeProps = {
  default: {
    background: "background",
    border: "muted",
    card: "muted",
    notification: "secondary",
    primary: "primary",
    text: "global",
  },
};
