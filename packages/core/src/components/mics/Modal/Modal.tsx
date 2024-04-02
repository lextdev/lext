import { ModalProps, Modal as RNModal } from "react-native"
import { ThemeMainColorInterface } from "@/interfaces/ThemeColorInterface/ThemeColorInterface"
import React, { FC } from "react"
import SafeAreaView from "../SafeAreaView/SafeAreaView"

export type CustomModalProps = ModalProps & {
  backgroundColor?: keyof ThemeMainColorInterface
  header?: JSX.Element
}

const Modal: FC<CustomModalProps> = ({
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
