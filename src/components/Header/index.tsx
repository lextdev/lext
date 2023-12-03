import { useTheme } from "@emotion/react";
import React, { FC } from "react";

import GetColorValue, { ColorTypeProps } from "../../helpers/GetColorValue";
import ActionButton from "../ActionButton";
import Box from "../Box";
import Group from "../Group";
import { ArrowLeft } from "../Icons";
import Text from "../Text";

type HeaderProps = {
  onPress?: () => void;
  title: string;
  textColor?: ColorTypeProps;
  actionBackground?: ColorTypeProps;
  actionColor?: ColorTypeProps;
  actionSize?: "md" | "lg" | "sm";
  actionVariant?: "filled" | "outline";
};

const Header: FC<HeaderProps> = ({
  onPress,
  title,
  textColor = "white",
  actionBackground = "white",
  actionColor = "white",
  actionSize = "md",
  actionVariant = "outline",
}) => {
  const theme = useTheme();

  return (
    <Box justifyContent="center" alignItems="stretch">
      <Group justifyContent="space-between">
        <ActionButton
          onPress={onPress}
          backgroundColor={actionBackground}
          size={actionSize}
          variant={actionVariant}
        >
          <ArrowLeft
            size={18}
            color={GetColorValue(actionColor, theme.colors)}
          />
        </ActionButton>
        <Text fontFamily="UrbanistBold" color={textColor}>
          {title}
        </Text>
      </Group>
    </Box>
  );
};

export default Header;
