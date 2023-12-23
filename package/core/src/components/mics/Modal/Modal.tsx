import React, { FC, ReactNode } from "react";
import { Modal, ModalProps, View } from "react-native";
import SafeAreaView from "../../layout/SafeAreaView/SafeAreaView";
import Box from "../Box/Box";
import Group from "../Group/Group";
import Divider from "../Divider/Divider";

type CustomModalHeaderProps = {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
};

export type CustomModalProps = ModalProps & {
  header?: CustomModalHeaderProps;
};

const CustomModal: FC<CustomModalProps & { children: ReactNode }> = (props) => {
  const { header, children, ...modalProps } = props;

  const HeaderComponent = () => {
    if (!header) {
      return null;
    }

    return (
      <>
        <Box gap={15}>
          <Group justifyContent="space-between">
            <View style={{ flex: 1 }}>{header.left && header.left}</View>
            <View style={{ flex: 1, alignItems: "center" }}>
              {header.center && header.center}
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              {header.right && header.right}
            </View>
          </Group>
        </Box>
        <Divider />
      </>
    );
  };

  return (
    <Modal
      animationType="slide"
      presentationStyle={"formSheet"}
      {...modalProps}
    >
      <SafeAreaView>
        <>
          {header && <HeaderComponent />}
          {children}
        </>
      </SafeAreaView>
    </Modal>
  );
};

export default CustomModal;
