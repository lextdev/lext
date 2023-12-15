import React, { ReactNode, useState } from "react";
import Text from "../../typography/Text/Text";
import Layout from "../_layout/Layout";
import FormProps from "../_types/FormProps";
import { TouchableOpacity } from "react-native";
import { Modal } from "../..";
import { CustomModalProps } from "../../mics/Modal/Modal";

type CustomSelectBoxProps = {
  modal: CustomModalProps;
  onPress?: () => any;
};

const CustomSelectBox: FormProps<CustomSelectBoxProps> = (props) => {
  const { layout, modal, onPress } = props;

  return (
    <>
      <Modal {...modal}>
        <Text>Hello World!</Text>
      </Modal>
      <Layout layout={layout}>
        <TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
          <Text>Hello World!</Text>
        </TouchableOpacity>
      </Layout>
    </>
  );
};

export default CustomSelectBox;
