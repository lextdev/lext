import React, { forwardRef, useEffect, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
} from "react-native";
import { View, Text } from "../../index";
import { ArrowDown, ArrowRight, ArrowUp } from "../../../icons";
import { GetColorValue } from "../../../helpers";
import { useColor, useTheme } from "../../../hooks";
type AccordionProps = {
  title: string;
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  bodyStyle?: StyleProp<ViewStyle>;
  icon?: React.ReactNode;
  isActive?: boolean;
  onToggle?: (isActive: boolean) => void;
};

const Accordion = forwardRef<TouchableOpacity, AccordionProps>((props, ref) => {
  const {
    title,
    children,
    containerStyle,
    buttonStyle,
    titleStyle,
    bodyStyle,
    icon,
    isActive = false,
    onToggle,
  } = props;

  const [isCollapsed, setIsCollapsed] = useState(true);
  const getColor = useColor();
  const { theme } = useTheme();

  useEffect(() => {
    setIsCollapsed(isActive);
  }, [isActive]);

  return (
    <View style={[{ marginBottom: 10 }, containerStyle]}>
      <TouchableOpacity
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: getColor("primary"),
            padding: theme.spacing.sm,
            borderTopStartRadius: theme.defaultOptions.borderRadius,
            borderTopEndRadius: theme.defaultOptions.borderRadius,
          },
          buttonStyle,
        ]}
        onPress={() => {
          setIsCollapsed(!isCollapsed);
          onToggle && onToggle(!isCollapsed);
        }}
      >
        <Text
          style={[
            {
              color: "white",
              fontFamily: theme.fontFamily.monospace,
              fontSize: theme.fontSizes.heading.h3,
            },

            titleStyle,
          ]}
        >
          {title}
        </Text>

        {icon ?? isCollapsed ? <ArrowDown /> : <ArrowUp />}
      </TouchableOpacity>
      {!isCollapsed && (
        <View
          style={[
            {
              padding: theme.spacing.sm,
              backgroundColor: getColor("muted"),
            },
            bodyStyle,
          ]}
        >
          {children}
        </View>
      )}
    </View>
  );
});

export default Accordion;
