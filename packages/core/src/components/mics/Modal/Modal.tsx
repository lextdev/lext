import { ModalComponentProps } from "@/interfaces"
import { Modal as RNModal } from "react-native"
import React, { FC } from "react"
import SafeAreaView from "../SafeAreaView/SafeAreaView"

const Modal: FC<ModalComponentProps> = ({
  children,
  backgroundColor,
  header,
  ...props
}) => {
  return (
    <RNModal animationType="slide" {...props}>
      <SafeAreaView backgroundColor={backgroundColor}>
        {header && header}
        {children}
      </SafeAreaView>
    </RNModal>
  )
}

export default Modal
