import { ModalProps, Modal as RNModal } from "react-native"
import { ThemeMainColorInterface } from "@/interfaces/ThemeColorInterface/ThemeColorInterface"
import React, { FC } from "react"
import SafeAreaView from "../SafeAreaView/SafeAreaView"

type CustomModalProps = ModalProps & {
  backgroundColor?: keyof ThemeMainColorInterface
}

const Modal: FC<CustomModalProps> = ({
  children,
  backgroundColor,
  ...props
}) => {
  return (
    <RNModal animationType="slide" {...props}>
      <SafeAreaView backgroundColor={backgroundColor}>{children}</SafeAreaView>
    </RNModal>
  )
}

export default Modal
