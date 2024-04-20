import { ModalComponentProps } from "@/interfaces"
import { Modal as RNModal } from "react-native"
import React, { FC } from "react"
import SafeAreaView from "../SafeAreaView/SafeAreaView"

const Modal: FC<ModalComponentProps> = ({
  children,
  backgroundColor,
  header,
  safeAreaView = true,
  animationType = "slide",
  ...props
}) => {
  if (safeAreaView) {
    return (
      <RNModal animationType={animationType} {...props}>
        <SafeAreaView backgroundColor={backgroundColor}>
          {header && header}
          {children}
        </SafeAreaView>
      </RNModal>
    )
  }

  return (
    <RNModal animationType={animationType} {...props}>
      {header && header}
      {children}
    </RNModal>
  )
}

export default Modal
